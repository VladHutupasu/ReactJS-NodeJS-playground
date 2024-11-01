import { useCurrencies } from "../hooks/useCurrencies";
import { useExchangeRate } from "../hooks/useExchangeRate";
import { useFormState } from "../hooks/useFormState";
import CoinSelector from "./CoinSelector";
import styles from "./currencyexchange.module.scss";
import CurrencyInput from "./CurrencyInput";
import Error from "./Error";
import Filters from "./Filters";
import SwapIcon from "./SwapIcon";

export default function CurrencyExchanger() {
  const { form, setForm } = useFormState();
  const { fetchExchangeRate, result, isLoading: isLoadingExchangeRate, error: errorExchangeRate } = useExchangeRate();

  const { allCurrencies, isLoading: isLoadingCurrencies, error: currenciesError } = useCurrencies();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchExchangeRate(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.flexRow}>
        <div className={styles.flexCol}>
          <CoinSelector
            allCurrencies={allCurrencies}
            value={form.fromCurrency}
            setValue={(value) => setForm({ ...form, fromCurrency: value })}
          />
          <CurrencyInput value={form.fromAmount} setValue={(value) => setForm({ ...form, fromAmount: value })} />

          <SwapIcon color="white" />

          <CoinSelector
            allCurrencies={allCurrencies}
            value={form.toCurrency}
            setValue={(value) => setForm({ ...form, toCurrency: value })}
          />
          <CurrencyInput value={form.toAmount} setValue={(value) => setForm({ ...form, toAmount: value })} />
        </div>
        <button disabled={!form.valid || isLoadingExchangeRate} type="submit">
          {isLoadingExchangeRate || isLoadingCurrencies ? "Loading..." : "Search"}
        </button>
      </div>

      <Filters filters={form.filters} setFilters={(value) => setForm({ ...form, filters: value })} />

      {errorExchangeRate && <Error message={errorExchangeRate} />}
      {currenciesError && <Error message={currenciesError} />}

      {result && <div style={{ fontWeight: "700", color: "green" }}>{result}</div>}

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}
