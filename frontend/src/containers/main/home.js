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
            <h1 className="centered backed-p2">Welcome to Carolines Crystals!</h1> 
            <br />
            <br />
            <div className="centered backed bold">
                <h4>
                    Carolines Crystals is your destination for crystals, tapestries, incense, and 
                    good vibes!
                    <br />
                    We also have really cool funky snap button insert jewelry!
                </h4>
            </div>
            <br />
            <br />
            <div className="centered backed-p bold">
                <h3>
                    <strong>Entrance #21</strong> at the 
                    <br />
                    <br />
                    Quakertown Farmers Market  
                    <br />
                    <br />
                    201 Station Rd Quakertown PA 18951 
                </h3>
            </div>
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