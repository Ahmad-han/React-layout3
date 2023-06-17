import guy from "../assets/image 1.png"



export const LongSlide = () => {

    return (
        <div className="long-slide">
            <div className="long-slide-one">
                <h2>long established</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that....</p>
                    <div className="read-more">
                        <p>May 20th 2020</p>
                        <a href="#">Read more</a>
                    </div>
            </div>
            <div className="long-slide-two">
                <img src={guy} alt="" />
            </div>
        </div>
    )
}