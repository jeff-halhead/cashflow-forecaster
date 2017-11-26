import React from 'react'
import moment from 'moment'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const CashflowTableRow = ({date, income, expenses, balance}) => (
  <Table.Row>
    <Table.Cell>
      {/* <Label ribbon>{moment(date).format('YYYY-MM-DD')}</Label> */}
      {moment(date).format('YYYY-MM-DD')}
    </Table.Cell>
    <Table.Cell>{income}</Table.Cell>
    <Table.Cell>{expenses}</Table.Cell>
    <Table.Cell>{balance}</Table.Cell>
  </Table.Row>
)

export default CashflowTableRow
