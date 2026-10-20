type ResultRowProps = {
  label: string
  value: number
  formatter: Intl.NumberFormat
}

export default function ResultRow({
  label,
  value,
  formatter,
}: ResultRowProps) {
  return (
    <p className="result-row">
      <span>{label}</span>
      <strong>{formatter.format(value)}</strong>
    </p>
  )
}