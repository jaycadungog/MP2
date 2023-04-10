import "../WorkCard/WorkCard.css"
import WorkCard from "../WorkCard/WorkCard"
import WorkCardData from "../Work/WorkCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return (
                    <WorkCard 
                        key = {ind}
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                        text = {val.text}
                        view = {val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work