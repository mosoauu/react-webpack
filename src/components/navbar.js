import React, { Component } from 'react'
import { Button, Dropdown, Menu, Input, Container } from 'semantic-ui-react'

export default class SizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large'>
      <Container>
      <Menu.Item>
          <img src='http://semantic-ui.com/images/logo.png' />
        </Menu.Item>

        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Dropdown as={Menu.Item} text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
