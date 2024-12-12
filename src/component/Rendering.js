import React from 'react'
const Rendering = (props) => {
    const welcome=<h1>welcome {props.username} </h1>
    const Logout= <h1>Can't Login</h1>
    return (props.islogged ? welcome : Logout)
}
export default Rendering;