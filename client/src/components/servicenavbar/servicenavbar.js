import "./seviceNavbar.css";
import { Link } from "react-router-dom";

function ServiceNavbar(){
    return(
        <>
        <div className="navbar">
            <h1 className="Logo">Safar</h1>
        </div>
        
      <div className="header">
          <div className="headerList">
         
            <div className="headerListItems">
            <Link to="/list"><i class="fa-solid fa-bed"></i> Stay</Link>
            </div>

            <div className="headerListItems">
             <a href="/"><i class="fa-solid fa-plane-departure"></i> Flights</a>
            </div>

            <div className="headerListItems">
             <a href="/"><i class="fa-solid fa-car"></i> Car rentals</a>
            </div>

            <div className="headerListItems">
             <a href="/"><i class="fa-solid fa-bed"></i> Attractions</a>
            </div>

            <div className="headerListItems">
             <a href="/"><i class="fa-solid fa-taxi"></i> Airport Taxis</a>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default ServiceNavbar;