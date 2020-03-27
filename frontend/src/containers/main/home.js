import React, { useEffect } from 'react';
import CustomButton from '../../components/button/custom-button.component';
import { Link } from 'react-router-dom';


const Home = () => {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div>
            <br />
            <br />
            <div className="centered backed3 bold">
                <h1>Welcome to Carolines Crystals!</h1> 
                <h4>
                Welcome to Caroline’s Crystals, your supplier for crystals, 
                tapestries, incense, and good vibes! 
                <br />
                <br />
                Family owned and operated since 2015, our store at the 
                Quakertown Farmer’s Market (Q-Mart to locals) can
                find what you need. Whether looking for our metaphysical 
                aspect, or just for fun, everyone is welcome!
                </h4>
            </div>
            <br />
            <br />
            <div className="centered backed-p bold">
                <h3>
                    Visit us at <strong>Entrance #21</strong> at the 
                    <br />
                    <br />
                    Quakertown Farmers Market  
                    <br />
                    <br />
                    201 Station Rd Quakertown PA 18951 
                </h3>
            </div>
            <br />
            <br />
            <div className="middle centered backed2">
                <h2>
                    Hours:
                </h2>
                <h3 className="grid20 shrink">
                    <div>
                        Mon - Thur:
                        <br />
                        Q-Mart Closed 
                    </div>
                    <div>
                        Friday:
                        <br />
                        9am-9pm
                    </div>
                    <div>
                        Saturday:
                        <br />
                        9am-9pm
                    </div>
                    <div>
                        Sunday:
                        <br />
                        10am-5pm
                    </div>
                </h3>
            </div>
            <br />
            <br />
            <br />
            <div className="grid80">
                <div></div>
                <Link to="/tour" className="grid100">
                    <CustomButton 
                        label="Virtual Tour"
                        buttonStyle="purple"
                        />
                </Link>
            </div>
        </div>
    )
}

export default Home;