import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import AddIncomeForm from './AddIncomeForm'

class AddIncomeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: undefined,
      amount: 0.0
    }
  }
  render() {
    const { trigger } = this.props
    return (
      <Modal trigger={trigger}>
        <Modal.Header>Add Income</Modal.Header>
        <Modal.Content>
            <AddIncomeForm />
        </Modal.Content>
      </Modal>
    )
  }
}

export default AddIncomeModal
