import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) =>
    {
        this.setState(
            {
                [e.target.id] : e.target.value
            }
        )
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(this.state);    
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <form onSubmit = {this.handleSubmit} className = "white">
                        <h5 className = "grey-text text-darken-3">
                            Create a new Project
                        </h5>
                        <div className = "input-field">
                            <label htmlFor = "title">Title</label>
                            <input type = "text" id = "title" onChange = {this.handleChange}/>
                        </div>
                        <div className = "input-field">
                            <label htmlFor = "content">Content</label>
                            <textarea name = "" id = "content" rows = "30" cols = "30" className = "materialize-textarea" onChange = {this.handleChange} />
                        </div>
                        <div className = "input-field">
                            <button className = "btn pnk lighten-1 z-depth-2">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateProject
