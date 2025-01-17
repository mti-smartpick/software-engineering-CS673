import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/login/Login';
import Inscription from '../components/register/Register';
import Chat from '../components/chat/Chat';
import Project from '../components/project/Project';
import ProjectForm from '../components/project/ProjectForm';
import Task from '../components/Task/Task';
import ProjectTask from '../components/Task/projectTask';
import TaskForm from '../components/task-design/TaskForm';
import Issues from '../components/issue-design/issue';
import Menu from './Menu';

const mapStateToProps = state => ({
    username: state.user.username,
    id_user: state.user.id_user,
    projectID: state.project.projectID,
    registerDemand: state.demand.registerDemand,
    connexionDemand: state.demand.connexionDemand,
    messageDemand: state.demand.messageDemand,
    projectDemand: state.demand.projectDemand,
    issueDemand: state.demand.issueDemand,
    taskDemand: state.demand.taskDemand,
    projectTaskDemand: state.demand.projectTaskDemand,
    projectFormDemand:state.demand.projectFormDemand,
    taskFromDemand:state.demand.taskFromDemand,
    categoryID: state.demand.categoryID
});

const MainPage = ({ dispatch, connexionDemand, registerDemand, messageDemand, projectDemand, issueDemand, taskDemand, projectFormDemand, projectTaskDemand,taskFromDemand }) => (
    <div id="test">
        <Menu />
        <main>
            {registerDemand && !connexionDemand && <Inscription dispatch={dispatch} />}
            {connexionDemand && !registerDemand && <Login dispatch={dispatch} />}
            {messageDemand && <Chat dispatch={dispatch} />}
            {projectDemand && <Project dispatch={dispatch} />}    
            {issueDemand && <Issues dispath={dispatch} />}
            {taskDemand && <Task dispatch={dispatch} />}
            {projectTaskDemand && <ProjectTask dispatch={dispatch} />}
            {projectFormDemand && <ProjectForm dispatch={dispatch} />}
            {taskFromDemand && <TaskForm dispatch={dispatch}/>}
        </main>
    </div>
);

export default connect(mapStateToProps)(MainPage);
