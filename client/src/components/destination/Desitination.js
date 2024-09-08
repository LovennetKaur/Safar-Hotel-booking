import "./Desitinationstyle.css"
import DesitinationData from "./Desitinationdata";
import valcano1 from "../../Safar-IMG/ver5.jpg";
import valcano2 from "../../Safar-IMG/ver6.jpg";
import beach1 from "../../Safar-IMG/ver1.jpg";
import beach2 from "../../Safar-IMG/ver2.jpg";

const Destination = () =>{
    return(
        <div className = "destination">
            <h1>Popular Destination</h1>
            <p>Journey to Unforgettable Destinations</p>
        
        <DesitinationData
        className = "first-des"
        heading ="Taal Volcano, Batangas"
        text ="Experience the breathtaking beauty of Taal Volcano, a true natural wonder nestled in Batangas, Philippines. As you gaze upon the world's smallest active volcano, you'll be captivated by its serene crater lake set against a backdrop of lush greenery, its panoramic views offer a serene escape for nature lovers and adventurers. Whether hiking to its summit or cruising its pristine waters, Taal Volcano promises an unforgettable experience in the heart of Batangas."
        img1 ={valcano1}
        img2 ={valcano2}
        />

        <DesitinationData
        className = "first-des-reverse"
        heading ="Mount Rainier, United States:"
        text ="Marvel at the majestic beauty of Mount Rainier, a towering icon in Washington State. With its snow-capped peak, lush meadows, and vibrant wildflowers, this active stratovolcano offers breathtaking vistas year-round. Whether hiking its scenic trails or simply soaking in the panoramic views, Mount Rainier promises an unforgettable adventure in the heart of the Pacific Northwest. Witness the changing seasons and the serene landscapes that make this national park a must-visit destination."
        img1 ={beach1}
        img2 ={beach2}
        />
        </div>

    )
}
export default Destination;