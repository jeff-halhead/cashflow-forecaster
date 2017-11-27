import C from './constants'

export const addIncome = (id, date, amount, description) => ({
  type: C.ADD_INCOME,
  payload: {id, date, amount, description}
})

export const removeIncome = (id) => ({
  type: C.REMOVE_INCOME,
  payload: id
})

export const addExpense = (id, date, amount, description) => ({
  type: C.ADD_EXPENSE,
  payload: {id, date, amount, description}
})

export const removeExpense = (id) => ({
  type: C.REMOVE_EXPENSE,
  payload: id
})
