import React from 'react'
import { render } from 'react-dom'




class Hello extends React.Component{
    render(){
        return (
            <p>see you  !react JS!</p>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)
