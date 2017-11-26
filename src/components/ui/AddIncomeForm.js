import React from 'react'
import { Form, Input, Label, Button } from 'semantic-ui-react'

const AddIncomeForm = () => (
  <Form>
    <Form.Input label='Date' type='date' />
    <Form.Field>
      <Input label='$' placeholder='Amount' type='number' />
    </Form.Field>
    <Button positive type='submit'>Add</Button>
  </Form>
)

export default AddIncomeForm
