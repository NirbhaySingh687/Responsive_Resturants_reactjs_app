import React, {useRef} from 'react';
import { images } from "../../constants"
import { SubHeading } from "../../components"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import './Gallery.css';

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
    const scrollRef = useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef;
        if(direction === "left"){
            current.scrollLeft -= 300
        }else{
            current.scrollLeft += 300
        }
    }
    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram"/>
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{color: "#AAA", marginTop: "2rem"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem harum neque suscipit sequi necessitatibus repellat laudantium nesciunt debitis dicta eum eveniet totam in asperiores dignissimos, ratione, molestiae exercitationem ipsa. Eligendi?
                </p>
                <button type="button" className="custom__button">View More</button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {
                        image.map((i, index) => (
                            <div className="app__gallery-image-card flex__center" key={`gallery_images-${index+1}`}>
                                <img src={i} alt="gallery"/>
                                <BsInstagram className="gallery__image-icon" />
                            </div>
                        ))
                    }
                </div>
                <div className="app__gallery-images_arrow">
                    <BsArrowLeftShort className="gallery_arrow_icons" onClick={() => scroll("left")}/>
                    <BsArrowRightShort className="gallery_arrow_icons" onClick={() => scroll("right")}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
