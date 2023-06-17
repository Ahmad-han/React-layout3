import note from "../assets/image 7.png"



export const FootSlide = () => {

    return (
        <div className="foot-slide">
            <div className="foot-slide-text">
                <h1>What is Lorem Ipsum?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <div className="read-more">
                        <p>May 20th 2020</p>
                        <a href="#">Read more</a>
                    </div>
            </div>
            <div className="foot-slide-img">
                <img src={note} alt="" />
            </div>
        </div>
    )
}