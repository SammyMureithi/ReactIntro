import React from "react";

const UpdatedComponent=(originalComponent)=>{
    class NewCompo extends React.Component{

        render(){
            return <originalComponent name='Sammy'/>
        }
    }
    return NewCompo

}
export default UpdatedComponent