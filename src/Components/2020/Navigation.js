import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {

      this.setState({ activeItem: name })
    }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted >
        <Menu inverted pointing secondary color="black">
          <Menu.Item
            name='home'
            as={Link}
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='About'
            as={Link}
            to="/about"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Languages'
            as={Link}
            to="/languages"
            active={activeItem === 'Languages'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}