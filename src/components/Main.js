import React from 'react'
import Asset3 from "../images/Asset-3.png"
import Asset4 from "../images/asset-4.png"

const Main = () => {
    return (
        <div>
            <div class="container main-content" >
                <div class="row section-one">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 p1">
                        <h1>
                            Redefining what a pension app can do.
                        </h1>
                        <p>
                            Lasaco assurance complete website redesign and development Was created with the sole purpose of goig digital and bringing Digital in 	surance capabilities to Nigerians.	
							With easy access to the Broadband and DSL the number of people using the internet haas skyrocket in recent years.
						</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 p2">
                        <p>
                        	Email, instant   messaging and files sharing with other Internet users has also  provided a platform for faster spreading of viruses, Trojan and  Spyware. Being on the Internet without proper protection is like  walking in the rain with no umbrella - you're gonna get wet no  matter how fast you run. With so many computers installed in  home offices it becomes critical that home users install the latest  Microsoft patches when they become available. 
                        </p>
                        <a>View Site &rarr;</a>
                    </div>
                </div>
            </div>
			<div class="container-fluid sectioon-two">
				<div class="container section-two">
				<div class="sec-two ">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 textAlignment">
							<h1>
								Welcome to the show
							</h1>
							<h3>
								Choice Of Fonts and Colors  
							</h3>
							<p>
								AIICO complete website redesign and development Was created with the sole purpose of goig digital  <br />and bringing Digital insurance capabilities to Nigerians. <br /><br />
								Lasaco assurance complete website redesign and development Was created with the sole purpose
							</p>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 wow slideInRight">
							<img src={Asset3} alt="Asset 3" title="Asset 3" />
						</div>
					</div>
				</div>
			</div>
			</div>
            

            <div class="container section-three">
				<div class="row section3">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 up wow slideInLeft">
						<h1>
							Wire frames to guide
						</h1>
						<h3>
							User experience  
						</h3>
						<p>
							AIICO complete website redesign and development Was created with the sole purpose of goig digital  and bringing Digital insurance capabilities to Nigerians. 
						</p>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 wow slideInRight"	 data-wow-duration="1500ms">
							<img src={Asset4} alt="Asset 4" title="Asset 4" />
					</div>
				</div>
			</div>

            <div class="container section-four text-center wow bounce"	 data-wow-duration="2000ms">
				<h1>A new way to onboard</h1>
				<h3>the digital customer</h3>
				<p>AIICO complete 
					website redesign and development Was created <br />with the sole purpose of goig digital  and bringing Digital insurance <br />capabilities to Nigerians
                </p>
			</div>
        </div>
    )
}

export default Main
