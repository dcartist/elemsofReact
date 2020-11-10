import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.css'

const ButtonSelection = (props) => (
  <div>
      <Button.Group className="buttonGroupSpace">
    <Button attached='left' onClick={() => props.apiSelection("name")} inverted color='red' className="buttonSpace"> Search By Name </Button>
    <Button.Or className="buttonSpaceOnOr"/>
    <Button attached='right' onClick={() => props.apiSelection("id")} inverted color='red' className="buttonSpace"> Search by ID </Button>
    </Button.Group>
  </div>
)

export default ButtonSelection