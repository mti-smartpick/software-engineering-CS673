const defaultState = {
    registerDemand: false,
    connexionDemand: true,
    projectDemand: false,
    messageDemand: false,
    issueDemand: false,
    taskDemand: false,
    projectTaskDemand:false,
    projectFormDemand: false,
    taskFromDemand: false,
    categoryID:''


};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_DEMAND': return {
            connexionDemand: typeof action.username !== "undefined" ? false : state.connexionDemand,
            registerDemand: typeof action.username !== "undefined" ? false : state.registerDemand
        }
        case 'REGISTER_DEMAND':
            return {
                ...state,
                registerDemand: true,
                connexionDemand: false,
                projectDemand: false,
                messageDemand: false,
                issueDemand: false,
                taskDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            };
        case 'CONNEXION_DEMAND':
            return {
                ...state,
                connexionDemand: true,
                registerDemand: false,
                projectDemand: false,
                messageDemand: false,
                issueDemand: false,
                taskDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            };
        case 'DEMAND_LOGOUT':
            return {
                ...state,
                connexionDemand: true,
                registerDemand: false,
                projectDemand: false,
                issueDemand: false,
                taskDemand: false,
                messageDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            }
        case 'MESSAGE_DEMAND':
            return {
                ...state,
                messageDemand: true,
                connexionDemand: false,
                registerDemand: false,
                projectDemand: false,
                issueDemand: false,
                taskDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            };
        case 'PROJECT_DEMAND':
            return {
                ...state,
                projectDemand: true,
                messageDemand: false,
                connexionDemand: false,
                registerDemand: false,
                issueDemand: false,
                taskDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            };
        case 'ISSUE_DEMAND':
            return {
                ...state,
                issueDemand: true,
                projectDemand: false,
                messageDemand: false,
                connexionDemand: false,
                registerDemand: false,
                taskDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            };
        case 'TASK_DEMAND':
            return {
                ...state,
                taskDemand: true,
                issueDemand: false,
                projectDemand: false,
                messageDemand: false,
                connexionDemand: false,
                registerDemand: false,
                projectFormDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
                categoryID: action.categoryID
            };

        // case 'PROJECTTASK_DEMAND':
        //     return {
        //         ...state,
        //         projectTaskDemand: true,
        //         projectFormDemand: false,
        //         taskDemand: false,
        //         issueDemand: false,
        //         projectDemand: false,
        //         messageDemand: false,
        //         connexionDemand: false,
        //         registerDemand: false,
        //     }

        case 'PROJECTFORM_DEMAND':
            return {
                ...state,
                projectFormDemand: true,
                taskDemand: false,
                issueDemand: false,
                projectDemand: false,
                messageDemand: false,
                connexionDemand: false,
                registerDemand: false,
                projectTaskDemand: false,
                taskFromDemand: false,
            }

        case 'ADD_TASKFORM_DEMAND':
            return {
                ...state,
                taskFromDemand: true,
                projectFormDemand: false,
                taskDemand: false,
                issueDemand: false,
                projectDemand: false,
                messageDemand: false,
                connexionDemand: false,
                registerDemand: false,
                projectTaskDemand: false,
                categoryID: action.categoryID
            }
        default:
            return state;
    }
};

export default user;