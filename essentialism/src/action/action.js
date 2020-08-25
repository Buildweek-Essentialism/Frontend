// import axios from 'axios'
// import axiosWithAuth from '../utils/axiosWithAuth'


// // setting up actions
// export const  FETCH_DATA = "FETCH_DATA"
// export const FETCH_SUCCESS = "FETCH_SUCCESS"
// export const FETCH_FAIL = "FETCH_FAIL"

// export const fetchProjects = () => (dispatch) => {
//     dispatch({type: FETCH_DATA })
//     axiosWithAuth()
//     .get('/projects')
//     .then(res => { 
//      console.log("Fetch Success", res.data);
//      dispatch({type: FETCH_SUCCESS, payload: res.data})
//     })
//     .catch(err => {
//         console.log(err)
//         dispatch({type: FETCH_FAIL, payload: err})
//     })
// }

// export const POST_DATA = "POST_DATA";
// export const POST_SUCCESS = "POST_SUCCESS";
// export const POST_FAIL = 'POST_FAIL';

// export const postProjects = (projects) => (dispatch) => {
//     dispatch({type:POST_DATA})
//     axiosWithAuth()
//     .post('/projects', project)
//     .then (res => { 
//         console.log("Post success", res.data);   
//         dispatch({type: POST_SUCCESS, payload: res.data})
//     }) .catch( err => { ("error posting", err)
// dispatch({type: POST_FAIL, payload:err})
//     })
//  }

// //  export const PUT_DATA = "PUT_DATA"
// //  export const PUT_SUCCESS = "PUT_SUCCESS"
// //  export const PUT_FAIL = "PUT_FAIL"




// //  export const editProject = (project) => (dispatch) => {
// //     dispatch({type: PUT_SUCCESS})
// // axiosWithAuth()
// // .put('/projects/:id', project)
// // .then( res => {
// //     console.log("Put Successful", res.data);
// //     dispatch({type: PUT_SUCCESS, payload:res.data})
// // }) .catch( err => { ("Put Error", err)
// // dispatch({type: PUT_FAIL, payload:err})
// //     })
// //  } 
 


// //  export const DELETE_DATA = "DELETE_DATA"
// //  export const DELETE_SUCCESS = "DELETE_SUCCESS"
// //  export const DELETE_FAIL = "DELETE_FAIL"

// //  export const deleteProject = (project) => (dispatch) => {
// //      dispatch({type: DELETE_DATA})
// //      axiosWithAuth()
// //      .delete('/projects/:id', project)
// //      .then( res => { console.log('successful delete', res.data)
// //     dispatch({type: DELETE_SUCCESS, payload: res.data})
// //     }) .catch( err => { console.log( "error deleting", err)
// //     dispatch({type: DELETE_FAIL, payload:err})

// //     })
// //  }







 


