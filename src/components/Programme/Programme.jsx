import React from 'react'
import './Programme.css';
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"

const Programme = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To Shape You</span>
      </div>

      {/* Programe Data */}
      <div className="program-categories">
         {
            programsData.map((program) => (
                <div className="category catagory-info">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span> <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))
         }
      </div>
    </div>
  )
}

export default Programme
