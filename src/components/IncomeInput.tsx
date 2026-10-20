type IncomeInputProps = {
  value: number
  onChange: (value: number) => void
}

export default function IncomeInput({
  value,
  onChange,
}: IncomeInputProps) {
  return (
    <>
      <label htmlFor="totalIncome">Celkový roční příjem (Kč)</label>
      <input
        type="number"
        id="totalIncome"
        min="0"
        step="1000"
        placeholder="Např. 800000"
        value={value || ''}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
      />
    </>
  )
}