import "./list.css";
import SearchItem from "../../components/Searchitem/SearchItem"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Navbar from "../../components/Navbar/navbar";
import useFetch from "../../Hooks/useFetch";

const List = () => {
  const location = useLocation();

  const defaultDestination = '';
  const defaultDate = [{ startDate: new Date(), endDate: new Date(), key: 'selection' }];
  const defaultOptions = { adult: 1, children: 0, room: 1 };

  const [destination, setDestination] = useState(location.state?.destination || defaultDestination);
  const [dates, setDates] = useState(location.state?.dates|| defaultDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || defaultOptions);
    // Define min and max state
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    value={options.adult}
                    onChange={(e) => setOptions({ ...options, adult: e.target.value })}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    value={options.children}
                    onChange={(e) => setOptions({ ...options, children: e.target.value })}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    value={options.room}
                    onChange={(e) => setOptions({ ...options, room: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <button onClick ={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item=>(
               <SearchItem item = {item} key={item._id}/>
            ))}
            </>}
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;