import React from 'react'
import Asset10 from "../images/asset-10.png"
import Asset11 from "../images/asset-11.png"
import VidContent from "../video/AIICO-pension.mp4" 

const Media = () => {
    return (
        <div>
            <div class="continer video-wrap">
				<video id="video-bg" preload="auto" autoplay="true" loop="loop" muted="muted">
                    <source src={VidContent} type="video/mp4"></source>
                </video>
			</div>

            <div class="container picture">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 wow fadeInUpBig" data-wow-duration="1500ms">
						<figure>
							<img src={Asset10} alt="Wadex" title="Wadex" />
							<figcaption class="text-center">
								Wadex
								<p>
									Brand Identity/Landing page
								</p>
							</figcaption>
						</figure>
					</div>	
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6  wow fadeInUpBig" data-wow-duration="2000ms">
						<figure>
							<img src={Asset11} alt="Music plus" title="Music plus" />
							<figcaption class="text-center">
								Music Plus
								<p>
									Digital Marketing Campaign
								</p>
							</figcaption>
						</figure>
					</div>	
				</div>		
			</div>	

            <div class="container text-center footer">
				<h1 id="footer-h1">Touch base with Us.</h1>
				<p id="footer-p">Email, Call, Text, Instagram, Facebook us.</p>
				<a>Get in Touch</a>
			</div>	
        </div>
    )
}

export default Media
