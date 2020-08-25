// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { fetchProjects } from '../action/action'


// const Projects = (props) => {
//     useEffect(() => {
//         props.fetchProjects()
//     },[])
//     return (
//         <div> 
//             {props.projects.map( project => (< ProjectCard />))}
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return  {
//         projects: state.projects,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect (mapStateToProps, {fetchProjects}) (Projects)