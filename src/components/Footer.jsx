import inst from "../assets/instagram-fill 1.svg"
import twitt from "../assets/twitter-fill 1.svg"
import linc from "../assets/linkedin-box-fill 1.svg"



export const Footer = () => {

    return (
        <footer>
            <hr />
            <div className="footer">
                <div className="copyright">
                <b>hotcoffee</b> 2020 copyright all rights reserved
                </div>
                <div className="foot-logos">
                    <img src={inst}/>
                    <img src={twitt}/>
                    <img src={linc}/>
                </div>
            </div>
        </footer>
    )
}