import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import parse from 'html-react-parser';

function ModalDisplay(props) {
  const [open, setOpen] = React.useState(false)

  return (<Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
trigger={<Button color="black" inverted>{props.name}</Button>}
  >
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>{props.name}</Header>
        {parse(String(props.summary_html))}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button
        content="Super Cool"
        labelPosition='right'
        icon='checkmark'
        onClick={() => setOpen(false)}
        color = "black"
      />
    </Modal.Actions>
  </Modal>)
}

export default ModalDisplay
