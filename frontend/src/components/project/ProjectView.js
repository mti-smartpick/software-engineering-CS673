import React from "react";
import { connect } from 'react-redux';
import io from "socket.io-client";
import { addProject, getListOfProjects, showCategories } from '../../socket/projectSocket';
import ProjectTask from '../Task/projectTask.js';
import ProjectForm from '../project/ProjectForm';
//import {userId} from '../../socket/userSocket';
import '../../css/project.css'

const mapStateToProps = state => ({
    username: state.user.username,
    userId: state.user.userId,
    projectID: '',
    isProjectSelected: state.project.isProjectSelected,
    projectForm: state.project.projectForm,
    listOfProjects:[]
});

class ProjectView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,
            username: props.username,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {

        getListOfProjects(this.state.userId, (err,data) =>{
            this.setState({listOfProjects:data});
        })
    }

    handleChange(event) {
        //this.setState({ newtask: event.target.value });
        //console.log("inside handleChange:" + event.target.value);
    }

    handleSubmit(event) {
        //console.log('Add Project button pressed before call');
        this.props.dispatch({ type: 'USER_GET_PROJECTFORM' });
        
        addProject(this.state.username, this.state.newproject, (err, data) => {
            console.log('Add Project button pressed');
            this.setState({ newproject: data });
            console.log("inside handleSubmit");

        })
        event.preventDefault();
    }

    handleClick(event) {
        //Click event will listen for the target click. If it is Add Project Btn then it will lunch Add Project Form,
        //if one of the projects is clicked then it will open the project categories and all of it's tasks
        event.preventDefault();

        switch (event.target.id) {
            case "add-project-button":
                console.log('Add Task button pressed before call');
                this.props.dispatch({ type: 'USER_PROJECTFORM_DEMAND' });
                break;
            default:
                console.log('Project button is clicked:', event.currentTarget.id);
                this.setState({projectID:event.target.id});
                showCategories(event.currentTarget.id, (err, data) => {
                    //console.log('Add Project button pressed');
                    this.setState({ projectcategories: data });
                    this.props.dispatch({ type: 'USER_PROJECTTASK_DEMAND', projectTaskList: data });
                    //console.log("inside handleSubmit");

                })
            }
            event.preventDefault();
    }

    render() {
        {
            return (
                <div>
                    <div class="direct">
                        <div class="title">{this.state.projectName}</div>
                        <ul class="projects">
                            {this.state.getListofProjects.map(project =>
                                <li class="project_list">
                                    <div id={project.projectID} onClick={this.handleClick}>
                                        <div class="user-project" >
                                            <span class="span-project-mid">{project.projectName}</span>
                                        </div>
                                    </div>
                                </li>
                            )}
                            {/* {this.props.isProjectSelected && <ProjectTask dispatch={this.props.dispatch} />} */}
                        </ul>
    
                        <div>
                            <form onClick={this.handleClick}>
                                {/* <input id="add-task-input" type="text" value={this.state.newtask} onChange={this.handleChange} /> */}
                                <button id="add-project-button" type="click" onClick={this.handleClick}>Add Project</button>
                            </form>
                        </div>
    
                    </div>
    
                    {/* <div class="add_task"> */}
    
                </div>
            );
        }
}

export default connect(mapStateToProps)(ProjectView);