import React from 'react'
import Asset5 from "../images/asset-5.png"
import Asset6 from "../images/asset-6.png"
import Asset7 from "../images/asset-7.png"
import Asset8 from "../images/asset-8.png"
import Asset9 from "../images/asset-9.png"
import Landing2 from "../images/Landing-2.png"

const Services = () => {
    return (
        <div>
            <div class="container service-one">
			    <div class="container ">
				    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6  wow slideInLeft" data-wow-duration="1500ms" >
                            <img src={Asset5} alt="Asset 5" title="Asset 5" />
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 second-content  wow slideInRight" data-wow-duration="1500ms"  id="left">
                            <h3>
                                Manage Pension Account
                            </h3>
                            <p>
                                This contain the primary app function. Which is to keep <br  />customers up to date on their Recruitment savings <br />account, chat with a customer care agent and find the <br />nearest Aiico br /anch when the need arises.
                            </p>
                        </div>
                    </div>
				</div>
			</div>

            <div class="container service-two">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 second-content wow slideInLeft" data-wow-duration="1500m" id="left">
						<h3>
							Create Reminders and <br /> set Goals
						</h3>
						<p>
							A custom strategic planner &amp; daily agenda for planning <br />and living a well-designed life. Making sure you don't<br />forget or skip your daily goals with a personalised p.a <br />reminding you of your set goals for the day the ones <br /> done and the reminder for the ones you've not.
						</p>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6  wow slideInRight" data-wow-duration="1500ms">
						<img src={Asset6} alt="Asset 6" title="Asset 6" />
					</div>
				</div>
            </div>

            <div class="container service-three">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 wow slideInLeft">
						<img src={Asset7} alt="Asset 7" title="Asset 7" />
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 second-content" id="left">
						<h3>
							Retire in style
						</h3>
						<p>
							This section of the app is the fun part of the <br />app where users fill it ehat they want their <br /> retirement to look like. Like the type of car <br /> they want to drive, Lifestyle, vacation <br />and so on. <br /><br />
							Also, pension remitted monthly, retirement <br />age this will then give an aggregate of how <br />much more they need to remit per month(if <br /> they already have an RSA) or how much they <br />need to remit (if they don't).
						</p>
					</div>
				</div>
			</div>

            <div class="container service-four">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 second-content wow slideInLeft" id="left">
						<h3>
							Personalized Daily <br />Content Digest 
						</h3>
						<p>
							Tailored content for app users. This content is based on <br />interest varying from sports,news,arts &amp; culture <br />selected by the users upon signing up for the app
						</p>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 wow slideInRight" data-wow-duration="1500ms">
						<img src={Asset8} alt="Asset 8" title="Asset 8" />
					</div>
				</div>
			</div>

            <div class="container service-five">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 wow slideInLeft" data-wow-duration="1500ms">
						<img src={Asset9} alt="Asset 9" title="Asset 9" />
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 second-content wow slideInRight" data-wow-duration="1500ms" id="left">
						<h3>
							Retire in style
						</h3>
						<p>
							This is the core of this app, Users are asked to <br /> fill in basic information anout themelves like <br />age, pension remitted monthly <br />age and so on.
						</p>
					</div>
				</div>
			</div>

            <div class="container  wow bounceInDown" data-wow-duration="1500ms">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 second-content  wow bounceInDown" data-wow-duration="1500ms">
						<h1>
							Welcome to the show
						</h1>
						<h3>custom wordpress development</h3>
						<p>
							AIICO complete website redesign and development <br />Was created with the sole purpose of going digital  <br />and bringing Digital insurance capabilities to <br />Nigerians. <br /><br /><br />
							Lasaco assurance complete website redesign and <br />development Was created with the sole purpose
						</p>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<img src={Landing2} alt="Landing image" title="Landing image" />
					</div>
				</div>
			</div>

        </div>
    )
}

export default Services
