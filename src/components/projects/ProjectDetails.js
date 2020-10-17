import React from 'react'

const ProjectDetails = (props) =>
{
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className = "card z-depth-0">
                <div className = "card-content">
                    <span className = "card-title">
                        Project Title
                    </span>
                    <p>Some random text here. {id}</p>
                </div>
                <div className = "card-action grey lighten-4 grey-text">
                    <div>
                        Posted by Shubh Ashish
                    </div>
                    <p>Posted on 15th October</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails