// import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL} from '../action/action'
// import { POST_DATA, POST_SUCCESS, POST_FAIL} from '../action/action'
// import {PUT_DATA, PUT_SUCCESS, PUT_FAIL}  from '../action/action'
// import {DELETE_DATA, DELETE_SUCCESS,DELETE_FAIL} from '../action/action'


// // set up inititial state object

// const inititalState = {
// projects:[],
// isFetching: false,
// isPosting: false,
// error: ''
// }


// const projectsReducer = (state=inititalState, actions) => {
//     switch(actions.type) {
//         case FETCH_DATA:
//             return {
//                 ...state,
//                 isFetching: true
//             } 
//             case FETCH_SUCCESS:
//                 return {
//                     ...state,
//                     isFetching: false,
//                     projects: actions.payload
//                 }
//                 case FETCH_FAIL:
//                     return {
//                         ...state,
//                         isFetching: false,
//                         error: actions.payload
//                      }
//                      case POST_DATA: 
//                     return {
//                          ...state,
//                           isPosting: true,
//                           projects: [...state.projects]
//         }
//                    case POST_SUCCESS: 
//                    return {
//                        ...state,
//                        isPosting: false,
//                          projects: actions.payload
//                           }
//                    case POST_FAIL: 
//                    return {
//                      ...state,
//                    isPosting: false,
//                    err: actions.payload
//         }
//         default: 
//         return state
                     
//     } 
// }

// export default projectsReducer