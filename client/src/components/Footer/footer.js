import "./footer.css";

const Footer = () =>{
    return(
        <div className="footer">
              <div className="top">
                <h1>Safar</h1>
                <p>Discover your next travel destination with ease using our website!</p>
              </div>
              <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Linkedln</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Trouble Shooting</a>
                    <a href="/">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
              </div>
        </div>
    )
}
export default Footer;