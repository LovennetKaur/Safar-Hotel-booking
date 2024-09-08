import Hero from "../../components/Hero/Hero";
import Heroimg2 from "../../Safar-IMG/hero1.jpg";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import "./about.css"
import MailList from "../../components/mailistt/MailList";

function About(){
    return(
     <>
    <Navbar/>
    <Hero
    cName="Section2"
    heroimg={Heroimg2}       
    />
    <div className="About">
        <div className="about-section">
            <h1>About Us</h1>
            <p>Welcome to Safar, your ultimate travel companion! At Safar, we are committed to making your travel experience seamless, enjoyable, and unforgettable. Whether you're planning a quick getaway, a family vacation, or a business trip, we have got you covered with our comprehensive travel services.</p>
        </div>
        <h2>Our Service</h2>
        <div className="section">
            <h2>Hotels</h2>
            <p>Find and book the perfect hotel that fits your schedule, group size, and budget. With a wide range of options from luxury resorts to budget-friendly accommodations, we ensure you have a comfortable stay no matter where you go.</p>
        </div>
        <div className="section">
            <h2>Flights</h2>
            <p>Booking flights has never been easier. Compare prices, choose the best routes, and secure your seats with just a few clicks. Our platform ensures you get the best deals on domestic and international flights.</p>
        </div>
        <div className="section">
            <h2>Attractions</h2>
            <p>Discover and explore the best attractions at your destination. Whether it's cultural landmarks, outdoor adventures, or hidden gems, we provide curated recommendations to make your trip memorable.</p>
        </div>
        <div className="section">
            <h2>Car Rentals</h2>
            <p>Travel at your own pace with our car rental services. Choose from a variety of vehicles to suit your needs and enjoy the freedom to explore your destination on your own terms.</p>
        </div>
        <div className="section">
            <h2>Airport Taxis</h2>
            <p>Start and end your journey with ease. Book airport taxis for convenient and reliable transfers, ensuring a stress-free travel experience from the moment you land until you depart.</p>
        </div>

        <div className="contact">
            <h2> If you have any inquiry, please contact us at <a href="mailto:Safar@gmail.com">Safar@gmail.com</a></h2>
        </div>      
    </div>
    <MailList/>
    <Footer/>
     </>
    )
 }
 
 export default About;