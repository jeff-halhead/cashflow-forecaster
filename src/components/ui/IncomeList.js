import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import IncomeListRow from './IncomeListRow'
import AddIncomeModal from './AddIncomeModal'

class IncomeList extends Component {
  render() {
    const { incomes, onAddIncome } = this.props
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {incomes.map(({ id, date, amount, description }, i) =>
            <IncomeListRow key={i}
                           id={id}
                           date={date}
                           amount={amount}
                           description={description} />
          )}
          </Table.Body>
        </Table>
        <AddIncomeModal trigger={<Button floated='right'>+</Button>} />
      </div>
    )
  }
}


export default IncomeList
