import IncomeList from '../ui/IncomeList'
import { connect } from 'react-redux'
import { addIncome, removeIncome } from '../../actions'

const mapStateToProps = (state, props) =>
  ({
    incomes: state.incomes
  })

const mapDispatchToProps = disptach =>
  ({
    onAddIncome({id, date, amount, description}) {
      disptach(
        addIncome(id, date, amount, description)
      )
    },
    onRemoveIncome(id) {
      disptach(
        addIncome(id)
      )
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList)
