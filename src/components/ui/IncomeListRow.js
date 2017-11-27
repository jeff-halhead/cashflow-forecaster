import React from 'react'
import moment from 'moment'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const IncomeListRow = ({id, date, amount, description}) => (
  <Table.Row>
    <Table.Cell>{id}</Table.Cell>
    <Table.Cell>
      {/* <Label ribbon>{moment(date).format('YYYY-MM-DD')}</Label> */}
      {moment(date).format('YYYY-MM-DD')}
    </Table.Cell>
    <Table.Cell>{amount}</Table.Cell>
    <Table.Cell>{description}</Table.Cell>
  </Table.Row>
)

export default IncomeListRow
