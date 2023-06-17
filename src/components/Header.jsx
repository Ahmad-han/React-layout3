import search from "../assets/search-line 1.svg"
import inst from "../assets/instagram-fill 1.svg"
import twitt from "../assets/twitter-fill 1.svg"
import linc from "../assets/linkedin-box-fill 1.svg"





export const Header = () => {

    return (
        <header>
            <div className="logo">
                HotCoffee
            </div>
            <nav className="head-nav">
                <div className="search">
                    <img src={search} />
                    <span>Search...</span>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Articles</li>
                    <li><img src={inst} alt="" /></li>
                    <li><img src={twitt} alt="" /></li>
                    <li><img src={linc} alt="" /></li>
                </ul>
            </nav>
        </header>
    )
}