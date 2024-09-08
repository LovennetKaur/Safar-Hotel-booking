import "./searchcontainer.css"
import { DateRange } from 'react-date-range';
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";
import List from "../../routes/list/list";

function SearchContainer(){
        const [openDate, setOpenDate] = useState(false);
        const [date, setDate] = useState([
          {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
          }
        ]);
      
        const [openOptions, setOpenOptions] = useState(false);
        const [ options, setOptions] = useState(
          {
            adult: 1,
            children: 0,
            room: 1,
          }
        );
        
        const handleOption = (name, operation) => {
          setOptions((prev) => {
            return {
              ...prev,
              [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
          });
        };
      
  return (
    <>
        <div className="search-container">
        <div className="headerSearchBar">
            <div className="headerSearchItems">
             <i class="fa-solid fa-bed"></i>
             <input type="text" placeholder="Where are you going?" className="destination"/> 
            </div>

            <div className="headerSearchItems">
             <i class="fa-regular fa-calendar-days"></i>
             <span onClick ={()=>setOpenDate(!openDate)}className="dates">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
             {openDate && <DateRange
             editableDateInputs={true}
             onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
            </div>
            
            <div className="headerSearchItems">
            <i className="fa-solid fa-person"></i>
            <span onClick={() => setOpenOptions(!openOptions)} className="person">
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionitems">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      className="optioncounterButton"
                      onClick={() => handleOption("adult", "d")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="opencurrentnumber">{options.adult}</span>
                    <button className="optioncounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className="optionitems">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      className="optioncounterButton"
                      onClick={() => handleOption("children", "d")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="opencurrentnumber">{options.children}</span>
                    <button className="optioncounterButton" onClick={() => handleOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className="optionitems">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      className="optioncounterButton"
                      onClick={() => handleOption("room", "d")}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span className="opencurrentnumber">{options.room}</span>
                    <button className="optioncounterButton" onClick={() => handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
            

            <div className="headerSearchItems">
              <a href="/List"> <button className="Search">Search</button></a>

            </div>
        </div>
        </div>
       
    </>
    
  )
}

export default SearchContainer