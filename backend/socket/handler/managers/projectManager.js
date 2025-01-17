
const projectController = require('../../../controller/projectController');
module.exports = function (io) {
    //connect to the socket so that we can link with the frontend
    io.on('connection', (client) => {
        client.on('USER_CREATE_PROJECT', async (userID, projectName, dueDate ) => {
            console.log('Project Manager: UserID:',userID, 'Project Name:',projectName, 'Due Date:',dueDate);
            const result = await projectController.insertNewProject(userID,projectName,dueDate);
            client.emit('CREATE_PROJECT', result);
           })

        client.on('USER_GET_PROJECTLIST', async (userID) => {
            const result = await projectController.getListofProjects(userID);
            client.emit('GET_PROJECTLIST', result);
        })

        client.on('USER_GET_PROJECTID', async (projectName) => {
            const result = await projectController.findProjectID(projectName);
            client.emit('GET_PROJECTID', result);
        })

        client.on('USER_UPDATE_PROJECT_NAME', async (pID,pName) => {
            const result = await projectController.updateProjectName(pID,pName);
            client.emit('UPDATE_PROJECT_NAME', result);
        })

        client.on('USER_UPDATE_PROJECT_DUEDATE', async (pID,pDueDate) => {
            const result = await projectController.updateProjectDueDate(pID,pDueDate);
            client.emit('UPDATE_PROJECT_DUEDATE', result);
        })

        client.on('USER_UPDATE_PROJECT_ISDELETED', async (pID,pIsDeleted) => {
            const result = await projectController.updateProjectIsDeleted(pID,pIsDeleted);
            client.emit('UPDATE_PROJECT_ISDELETED', result);
        })

        
        client.on('USER_GET_PROJECTCATEGORIES', async (pID) => {
            const result = await projectController.getCategories(pID);
            client.emit('GET_PROJECTCATEGORIES', result);
        })

        client.on('USER_ADD_CATEGORY', async(pID, catName) =>{
            const result = await projectController.addCategory(pID, catName);
            client.emit('ADD_CATEGORY', result);
        })
    })
};
