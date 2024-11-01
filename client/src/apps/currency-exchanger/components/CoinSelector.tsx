import { ICoin, ICoins } from "../models/ICoins";

export default function CoinSelector({
  allCurrencies,
  value,
  setValue,
}: {
  allCurrencies: ICoins | null;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      <option value="">--Choose currency--</option>
      {allCurrencies?.supportedCodes &&
        allCurrencies.supportedCodes.map((currency: ICoin) => (
          <option key={currency[0]} value={currency[0]}>{`${currency[0]} (${currency[1]})`}</option>
        ))}
    </select>
  );
}
