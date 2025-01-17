import {put, takeEvery, actionChannel} from 'redux-saga/effects'




function* handleProjectDemand(action){
    yield put({type: "IS_PROJECT_DEMAND",projectID: action.projectID });
}

 function* handleViewProjectTasks(action){
     yield put({type: 'VIEW_PROJECTTASKS', projectID: action.projectID })

 }

function* handleViewProjectsDemand(action){
    yield put({type: 'VIEW_PROJECT', projectID: action.projectID});
}

// function* handleAddProjectDemand(action){
//     yield put({type: 'PROJECTFORM_DEMAND', projectForm: action.projectForm});
// }

function* handleAddProjectDemand(){
    yield put({type: 'PROJECTFORM_DEMAND'});
}

 function *projectSaga(){
    yield takeEvery('USER_IS_PROJECT_DEMAND', handleProjectDemand);
    yield takeEvery('USER_VIEW_PROJECT', handleViewProjectsDemand);
    yield takeEvery('USER_PROJECTFORM_DEMAND', handleAddProjectDemand);
    yield takeEvery('USER_VIEW_PROJECTTASKS', handleViewProjectTasks);

}

export default projectSaga;