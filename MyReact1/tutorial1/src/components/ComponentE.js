import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
    static contextType=UserContext
  render() {
    return (
        <div>
            Component E {this.context}
            <ComponentF></ComponentF>
        </div>
      
    )
  }
}

export default ComponentE