import React from "react";
//Render is life cycle component of reactjs
class LoadData extends React.Component{
     constructor(){
       super();
           this.state={
              name:"Vaishi"
           };
           console.log("I am constructor")
     }
     changeName = () => {
           this.setState(
           {name:"bruno"}
           )

     }

     render(){
           console.log("I am render")
           return(
                <div>

                   <h2>I am {this.state.name}</h2>
                   <button onClick={this.changeName}>Click Me</button>
                </div>
          )
     }

}
console.log("I am out of class")
export default LoadData
