export default function CurrencyInput({ value, setValue }: { value: number; setValue: (value: number) => void }) {
  return (
    <input
      type="number"
      placeholder="Amount"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      aria-label="Amount"
      required
    />
  );
}
