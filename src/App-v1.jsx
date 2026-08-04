// `https://api.exchangerate.host/convert?from=EUR&to=USD&amount=100`

import { Children, useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState("");

  const api = `https://open.er-api.com/v6/latest/${fromCurrency}`;

  console.log(api);

  useEffect(() => {
    if (!amount) return;

    const getConvertedValue = async () => {
      try {
        const res = await fetch(api);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        const rate = data.rates[toCurrency];
        setOutput((amount * rate).toFixed(2));
      } catch (err) {
        console.error(err);
      }
    };
    getConvertedValue();
  }, [api, amount, toCurrency]);

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
