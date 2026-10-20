export const expenseRates = [
  { label: '80 % — řemeslné živnosti, zemědělství', value: 0.8 },
  { label: '60 % — ostatní živnosti', value: 0.6 },
  { label: '40 % — jiná samostatná činnost', value: 0.4 },
  { label: '30 % — nájem majetku v obchodním majetku', value: 0.3 },
]

type ExpenseRateSelectProps = {
  value: number
  onChange: (value: number) => void
}

export default function ExpenseRateSelect({
  value,
  onChange,
}: ExpenseRateSelectProps) {
  return (
    <>
      <label htmlFor="expenseRate">Výdajový paušál</label>
      <select
        id="expenseRate"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {expenseRates.map((rate) => (
          <option key={rate.value} value={rate.value}>
            {rate.label}
          </option>
        ))}
      </select>
    </>
  )
}