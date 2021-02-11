import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) =>
{
    const { project } = props
    console.log({project})
    if(project)
    {
        return (
            <div className = "container section project-details">
                <div className = "card z-depth-0">
                    <div className = "card-content">
                        <span className = "card-title">
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                    </div>
                    <div className = "card-action grey lighten-4 grey-text">
                        <div>
                            Posted by {project.authorFName} {project.authorLName}
                        </div>
                        <p>Posted: {project.createdAt}</p>
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div class = "container center">
                <h4>Loading...</h4>
                <img src = "https://cdn.dribbble.com/users/959813/screenshots/5861109/pencil_loading_02.gif"/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, state)
    return {
      project: state.firestore.data.projects && state.firestore.data.projects[ownProps.match.params.id]
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
       { collection: 'projects'}
   ])
)(ProjectDetails);