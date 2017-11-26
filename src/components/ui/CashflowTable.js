import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import CashflowTableRow from './CashflowTableRow'
import AddIncomeModal from './AddIncomeModal'

class CashflowTable extends Component {
  constructor(props) {
    super(props)
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
  }

  handleAddButtonClick() {
    console.log('Add button clicked')
  }

  render() {
    const { days } = this.props
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Income</Table.HeaderCell>
              <Table.HeaderCell>Expenses</Table.HeaderCell>
              <Table.HeaderCell>Balance</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {days.map(({ date, income, expenses, balance }, i) =>
            <CashflowTableRow key={i}
                              date={date}
                              income={income}
                              expenses={expenses}
                              balance={balance} />
          )}
          </Table.Body>
        </Table>
        <AddIncomeModal trigger={<Button floated='right'>+</Button>} />
      </div>
    )
  }
}


export default CashflowTable
