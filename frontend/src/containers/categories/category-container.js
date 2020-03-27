import React from 'react';
import Slider from 'infinite-react-carousel';

const CategoryContainer = props =>{

    return(
        <div>
            <h2 className="centered">{props.category}!</h2>
            {props.description ?
                <h3 className="centered backed">{props.description}</h3>
            : 
                null}
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