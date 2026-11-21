import { useState, useMemo } from "react";

const exchangeRates = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  KES: 129.0,
  JPY: 153.5,
};

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] =
    useState<keyof typeof exchangeRates>("USD");
  const [targetCurrency, setTargetCurrency] =
    useState<keyof typeof exchangeRates>("EUR");

  const baseAmount = useMemo(
    () => getBaseAmount(amount, startCurrency),
    [amount, startCurrency]
  );

  const convertedAmount = baseAmount * exchangeRates[targetCurrency];

  return (
    <div className="w-lg bg-zinc-900 text-white rounded py-8 px-4 text-center">
      <h1 className="text-2xl font-bold mb-5">Currency Converter</h1>
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {startCurrency.toUpperCase()} to {targetCurrency.toUpperCase()}{" "}
          Conversion
        </h3>
        <form className="space-y-2.5">
          <label htmlFor="amount" className="sr-only">
            Enter amount to convert
          </label>
          <input
            className="bg-white text-zinc-950 p-1 rounded w-full"
            type="number"
            id="amount"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <label htmlFor="start-currency">Start Currency</label>
          <select
            value={startCurrency}
            onChange={(e) =>
              setStartCurrency(e.target.value as typeof startCurrency)
            }
            name="start-currency"
            id="start-currency"
            className="bg-white text-zinc-950 p-1 rounded w-full">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="KES">KES</option>
            <option value="JPY">JPY</option>
          </select>

          <label htmlFor="target-currency">Target Currency</label>
          <select
            value={targetCurrency}
            onChange={(e) =>
              setTargetCurrency(e.target.value as typeof targetCurrency)
            }
            name="target-currency"
            id="target-currency"
            className="bg-white text-zinc-950 p-1 rounded w-full">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="KES">KES</option>
            <option value="JPY">JPY</option>
          </select>
        </form>
        <p className="mt-5 font-bold text-lg text-green-600">
          Converted amount: {convertedAmount.toFixed(2)}{" "}
          {targetCurrency.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="w-full h-screen p-5 flex justify-center items-center bg-zinc-950">
      <CurrencyConverter />
    </div>
  );
}

function getBaseAmount(amount: number, from: keyof typeof exchangeRates) {
  return amount / exchangeRates[from];
}

export default App;
