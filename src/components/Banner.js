import React from 'react'
import Asset from "../images/Asset1.png"

const Banner = () => {
    return (
        <div>
		    <div class="container-fluid banner">
                <div class="container-fluid banner1 text-center img-responsive">
                    <img src={Asset} class="img-fluid position-mid" />
                </div> 
		    </div>
        </div>
    )
}

export default Banner
