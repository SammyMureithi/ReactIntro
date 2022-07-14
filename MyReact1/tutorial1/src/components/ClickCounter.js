import React, { Component } from 'react'

export class ClickCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         hcount: 0
      }
    }
    CountClicked(){
        this.setState({
            count : this.state.count+1
        })
    }
    HoverCount(){
        this.setState({
            hcount: this.state.hcount+1
        })
    }
   
  render() {
    return (
      <div>
        <button onClick={()=>this.CountClicked()}>Clicked {this.state.count} times</button>
        <h1 onMouseOver={()=>this.HoverCount()}>Hovered count={this.state.hcount}</h1>
      </div>
    )
  }
}

export default ClickCounter