import cup from "../assets/image 6.png"
import croods from "../assets/croods 1.png"



export const TitleSlide = () => {

    return (
        <div className="title-slide">
            <div className="title-text">
                <h1>Make better coffee</h1>
                <img src={cup} />
                <p>why learn how to blog?</p>
            </div>
            <div className="title-image">
                <img src={croods}/>
            </div>
        </div>
    )
}