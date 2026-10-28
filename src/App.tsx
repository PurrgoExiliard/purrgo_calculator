import { useState } from 'react'
import './App.css'

import IncomeInput from './components/IncomeInput'
import ExpenseRateSelect from './components/ExpenseRateSelect'
import ResultsSection from './components/ResultsSection'

const formatter = new Intl.NumberFormat('cs-CZ', {
  style: 'currency',
  currency: 'CZK',
  maximumFractionDigits: 0,
})

function App() {
  const [totalIncome, setTotalIncome] = useState(0)
  const [expenseRate, setExpenseRate] = useState(0.6)

  const income = Math.max(0, totalIncome)
  const expenses = income * expenseRate
  const profit = income - expenses

  // Simplified estimates, ai used for the values as I am lazy going to google
  const estimatedTax = profit * 0.15
  const estimatedHealthInsurance = profit * 0.5 * 0.135
  const estimatedSocialInsurance = profit * 0.5 * 0.292

  const totalDeductions =
    estimatedTax +
    estimatedHealthInsurance +
    estimatedSocialInsurance

  const remainingIncome = profit - totalDeductions
  const effectiveRate = income > 0 ? totalDeductions / income : 0

  return <>
    <main className="calculator">
      <h1>Kalkulačka paušálních výdajů</h1>

      <IncomeInput
        value={totalIncome}
        onChange={setTotalIncome}
      />

      <ExpenseRateSelect
        value={expenseRate}
        onChange={setExpenseRate}
      />

      <ResultsSection
        income={income}
        expenseRate={expenseRate}
        expenses={expenses}
        profit={profit}
        estimatedTax={estimatedTax}
        estimatedHealthInsurance={estimatedHealthInsurance}
        estimatedSocialInsurance={estimatedSocialInsurance}
        totalDeductions={totalDeductions}
        remainingIncome={remainingIncome}
        effectiveRate={effectiveRate}
        formatter={formatter}
      />
    </main>
  </>
}

export default App