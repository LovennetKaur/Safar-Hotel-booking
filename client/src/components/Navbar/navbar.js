import { Component } from "react";
import "./navbarstyle.css";
import { Menuitems } from "../Navbar/Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    state = {clicked: false};
    handleClick =() =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">Safar</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>

                <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}>
                             <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                             
                            </li>
                        )
                    })}
                    <Link to="/signup">
                    <button>Sign Up</button>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar; 