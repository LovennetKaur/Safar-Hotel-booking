import "./propertyList.css";
import useFetch from "../../Hooks/useFetch"
import hotels from "../../Safar-IMG/hotels.jpg";
import resort from "../../Safar-IMG/resort.jpg";
import appartment from "../../Safar-IMG/appartment.jpg";
import cabin from "../../Safar-IMG/cabins.jpg";
import cottage from "../../Safar-IMG/cottage.jpg";
import villa from "../../Safar-IMG/villas.jpg";



const PropertyList = () => {
  const {data,loading,error} = useFetch(
    "/hotels/countByType"
  );

  const images =[
    {hotels},
    {appartment},
    {resort},
    {villa},
    {cabin},
    {cottage}
  ]
  
  return (
     <div className="pList">
      {loading ?(
      "loading"
    ): (
    <>
     { data && images.map((img,i) =>(
      <div className="pListItem"  key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
        </div>
        ))
      }
        
        </>
        )}
    </div>
    
  )
}
export default PropertyList;