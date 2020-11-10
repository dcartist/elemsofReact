import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import parse from 'html-react-parser';

function ModalDisplay(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
  trigger={<Button>{props.name}</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>{props.name}</Header>
          <p>
          {parse(props.summary_html) }
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDisplay
