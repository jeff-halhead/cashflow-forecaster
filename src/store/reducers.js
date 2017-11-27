import C from '../constants'
import { combineReducers } from 'redux'

export const income = (state=null, action) =>
  (action.type === C.ADD_INCOME) ?
  	action.payload :
  	state

export const expense = (state=null, action) =>
  (action.type === C.ADD_EXPENSE) ?
  	action.payload :
  	state

export const incomes = (state=[], action) => {

  switch(action.type) {

    case C.ADD_INCOME:
      return
         [
           ...state,
           income(null, action)
         ].sort((a, b) => new Date(b.date) - new Date(a.date))

    case C.REMOVE_INCOME:
      return state.filter(income => income.id !== action.payload)

    default:
      return state
  }

}

export const expenses = (state=[], action) => {

  switch(action.type) {

    case C.ADD_EXPENSE:
      return
         [
           ...state,
           expense(null, action)
         ].sort((a, b) => new Date(b.date) - new Date(a.date))

    case C.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload)

    default:
      return state
  }

}
export default combineReducers({
  incomes,
  expenses
})
