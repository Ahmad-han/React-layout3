import programmer1 from "../assets/image 2.png"
import programmer2 from "../assets/image 4.png"
import programmer3 from "../assets/image 5.png"



export const Cards = () => {

    return (
        <div className="cards">
            <div className="card">
                <img src={programmer1} alt="" />
                <b>long established</b>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that....</p>
                     <div className="read-more">
                        <p>May 20th 2020</p>
                        <a href="#">Read more</a>
                    </div>
            </div>
            <div className="card">
                <img src={programmer2} alt="" />
                <b>long established</b>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that....</p>
                     <div className="read-more">
                        <p>May 20th 2020</p>
                        <a href="#">Read more</a>
                    </div>
            </div>
            <div className="card">
                <img src={programmer3} alt="" />
                <b>long established</b>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that....</p>
                     <div className="read-more">
                        <p>May 20th 2020</p>
                        <a href="#">Read more</a>
                    </div>
            </div>
        </div>
    )
}