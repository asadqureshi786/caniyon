import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";


export default function AboutUs() {
    return (
        <> 
            <div id="aboutUs" data-aos="fade-up" className="about_us maxWith py-3">
               <div className="text-center my-5">
                 <div className="subHead">
                    <PiWarningCircleLight /><span className='text'>About Us</span>
                </div>
                <p className="bigT white my-2">WHY CHOOSE <span className="sm_unique" >US?</span> </p>
                <p className="text white subText">
                    Our bespoke method merges imagination with planning, guaranteeing that each initiative is visually exceptional and aligns with goals. Assembled by a group of devoted experts, we actualize your concept, distinguishing your brand. Our devotion to superior quality guarantees thorough attention to every facet, creating a smooth and impactful journey.
                </p>
               </div>
            </div>
        </>
    )
}
