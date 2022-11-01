import React, { Component } from 'react'

export class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>CONTACT LIST</h1>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default ContactList
