import React from 'react'
import Asset from "../images/Asset1.png"

const Banner = () => {
    return (
        <div>
            <div class="container pre-banner text-center wow rollIn" >
                <h1>AIICO Insurance Plc</h1>
                <p>Amplify Digital is a full service digital product development agency helping companies build br /ands, products and experiences as well as helping them engage with an increasingly digital fiesr consumer.</p>
		    </div>
		    <div class="container-fluid banner">
                <div class="container-fluid banner1 text-center img-responsive">
                    <img src={Asset} class="img-fluid position-mid" />
                </div> 
		    </div>
        </div>
    )
}

export default Banner
