import "./featuredProperties.css";
import useFetch from "../../Hooks/useFetch"
import home1 from "../../Safar-IMG/home1.jpg";
import home2 from "../../Safar-IMG/home2.jpg";
import home3 from "../../Safar-IMG/home3.jpg";
import home4 from "../../Safar-IMG/home4.jpg";

const FeaturedProperties = () => {
  
  const {data,loading,error} = useFetch(
    "/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
      "loading"
      ):(
       <>
       {data.map(item=>(
        <div className="fpItem" key ={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        {item.rating &&<div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
       ))}
      </>
      )}
    </div>
  );
};

export default FeaturedProperties;