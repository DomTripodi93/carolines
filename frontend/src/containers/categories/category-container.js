import React from 'react';
import Slider from 'infinite-react-carousel';

const CategoryContainer = props =>{

    return(
        <div>
            {props.description ?
                <div>    
                    <h2 className="centered backed-p-close">{props.category}!</h2>
                    <h3 className="centered backed-close">{props.description}</h3>
                </div>
            :
                <h2 className="centered backed-p2">{props.category}!</h2>
            }
            { props.images ?   
                <Slider dots>
                    {props.images.map(image=>(
                            <img src={image} key={image} alt={image} className="image-holder" />
                    ))}
                </Slider>
            :
                <Slider dots>
                    <div>
                    x
                    </div>
                    <div>
                    y
                    </div>
                </Slider>
            }
        </div>
    )
}

export default CategoryContainer;