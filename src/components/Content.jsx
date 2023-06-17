import { TitleSlide } from "./TitleSlide"
import { LongSlide } from "./LongSlide"
import { Cards } from "./Cards"
import { FootSlide } from "./FootSlide"





export const Content = () => {

    return (
        <div className="content">
            <TitleSlide />
            <LongSlide />
            <Cards />
            <FootSlide />
            <button>See more</button>
        </div>
    )
}