import Destination from "../../components/destination/Desitination";
import Footer from "../../components/Footer/footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/navbar";
import Heroimg from "../../Safar-IMG/hero7.jpg";
import PropertyList from "../../components/propertylist/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailistt/MailList";
import SearchContainer from"../../components/SearchContainer/searchcontainer"
import "./home.css"

function Home(){

   return(
    <>
    <Navbar/>
     <Hero 
      cName="Section"
      heroimg={Heroimg}
      textCName = "hero-text"
      title="Your Journey Your Story"
      text="Choose your Favourite Destination"
      buttonText ="Travel Plan"
      url ="/"
      btnClass ="show"
     />
     <div className="searchbar">
      <SearchContainer/>
     </div>
     <Destination/>
     <div className="servicecontainer">
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties/>
     </div>
     <MailList/>
     <Footer/>
    </>
   )
}
export default Home;