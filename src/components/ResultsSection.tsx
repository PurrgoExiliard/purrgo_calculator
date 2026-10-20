import ResultRow from './ResultRow'

type ResultsSectionProps = {
  income: number
  expenseRate: number
  expenses: number
  profit: number
  estimatedTax: number
  estimatedHealthInsurance: number
  estimatedSocialInsurance: number
  totalDeductions: number
  remainingIncome: number
  effectiveRate: number
  formatter: Intl.NumberFormat
}

export default function ResultsSection({
  income,
  expenseRate,
  expenses,
  profit,
  estimatedTax,
  estimatedHealthInsurance,
  estimatedSocialInsurance,
  totalDeductions,
  remainingIncome,
  effectiveRate,
  formatter,
}: ResultsSectionProps) {
  return (
    <>
      <hr />

      <h2>Výsledky</h2>

      <ResultRow label="Celkový příjem" value={income} formatter={formatter} />
      <ResultRow
        label={`Výdaje (${expenseRate * 100} %)`}
        value={expenses}
        formatter={formatter}
      />
      <ResultRow
        label="Zisk před odvody"
        value={profit}
        formatter={formatter}
      />

      <hr />

      <h2>Orientační odvody</h2>

      <ResultRow
        label="Daň z příjmů (15 %)"
        value={estimatedTax}
        formatter={formatter}
      />
      <ResultRow
        label="Zdravotní pojištění (odhad)"
        value={estimatedHealthInsurance}
        formatter={formatter}
      />
      <ResultRow
        label="Sociální pojištění (odhad)"
        value={estimatedSocialInsurance}
        formatter={formatter}
      />
      <ResultRow
        label="Celkem odhadem"
        value={totalDeductions}
        formatter={formatter}
      />

      <hr />

      <h2>Odhadovaný zůstatek</h2>

      <div className="final-result">
        {formatter.format(remainingIncome)}
      </div>

      <p className="effective-rate">
        Podíl odvodů na příjmu: {(effectiveRate * 100).toFixed(1)} %
      </p>

      <small>
        Výpočet je pouze ilustrativní. Nezohledňuje limity paušálních
        výdajů, slevy na dani, minimální zálohy, maximální vyměřovací
        základy ani další pravidla. Skutečná daň a pojistné se mohou
        výrazně lišit.
      </small>
    </>
  )
}