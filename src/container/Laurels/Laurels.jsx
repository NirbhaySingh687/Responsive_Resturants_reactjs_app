import React from 'react';
import { SubHeading} from "../../components"
import { images,data} from "../../constants"
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle}}) => {
    return(
        <div className="app__laurels_awards-card">
            <img src={imgUrl} alt="awards"/>
            <div className="app__laurels_awards-card_content">
                <p className="p__cormorant" style={{ color: "#DCCA87"}}>{title}</p>
                <p className="p__cormorant" >{subtitle}</p>
            </div>
        </div>
    )
}

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition"/>
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurel_awards">
            {
                data.awards.map((award, index) => (
                    <AwardCard award={award} />
                ))
            }
        </div>
    </div>


      <div className="app_wrapper_img">
          <img src={images.laurels} alt="laurels"/>
      </div>
  </div>
);

export default Laurels;
