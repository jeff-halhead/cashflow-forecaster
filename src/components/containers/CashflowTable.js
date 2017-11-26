import React from 'react'
import CashflowTable from '../ui/CashflowTable'

const days = [
  {
    date: new Date(2017, 11, 1),
    income: 0,
    expenses: 250,
    balance: 1000
  },
  {
    date: new Date(2017, 11, 2),
    income: 1000,
    expenses: 0,
    balance: 2000
  },
  {
    date: new Date(2017, 11, 3),
    income: 500,
    expenses: 1500,
    balance: 1000
  },
  {
    date: new Date(2017, 11, 4),
    income: 0,
    expenses: 0,
    balance: 1000
  },
  {
    date: new Date(2017, 11, 5),
    income: 0,
    expenses: 0,
    balance: 1000
  },
]

export default () => (
  <CashflowTable days={days} />
)
