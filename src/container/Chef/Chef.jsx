import React from 'react';
import { images } from "../../constants"
import { SubHeading} from "../../components"
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app_wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef img"/>
    </div>
      <div className="app__wrapper_info">
          <SubHeading title="Chef's Words"/>
          <h1 className="headtext__cormorant">What We Believe In</h1>
          <div className="app__chef-content">
              <div className="app__chef-content_quote">
                  <img src={images.quote} alt="quotes" />
                  <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>

              <p className="p__opensans">Autem harum neque suscipit sequi necessitatibus repellat laudantium nesciunt debitis dicta eum eveniet totam in asperiores dignissimos, ratione, molestiae exercitationem ipsa.</p>
          </div>
          <div className="app__chef-sign">
              <p>Kevin Luo</p>
              <p className="p__opensans">Chef & Founder</p>
              <img src={images.sign} alt="sign"/>
          </div>
      </div>
  </div>
);

export default Chef;
