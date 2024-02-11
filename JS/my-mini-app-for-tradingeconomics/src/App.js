import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const api_key = "ff118324a9784dd:uf05cp73mzkte9u";

function App() {
  const [country, setCountry] = useState("mexico");
  const [parameter, setParameter] = useState(24);
  const [dataTest1, setDataTest1] = useState([]);
  const [dataTest2, setDataTest2] = useState([]);
  const [dataTest3, setDataTest3] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api.tradingeconomics.com/country/${country}?c=${api_key}`
        );
        const data1 = response.data[parameter]["Country"];
        const data2 = response.data[parameter]["Category"];
        const data3 = response.data[parameter]["LatestValue"];

        setDataTest1(data1);
        setDataTest2(data2);
        setDataTest3(data3);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [country, dataTest1, dataTest2, dataTest3, parameter]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Pick one parameter:</h1>
          <button onClick={() => setParameter(24)}>Corporate Tax Rate</button>
          <button onClick={() => setParameter(25)}>Corruption Index </button>
          <button onClick={() => setParameter(26)}>Corruption Rank</button>
        </div>
        <div className="App-logo">
          <p>{dataTest1} </p>
          {country === "mexico" ? (
            <img src="https://flagsapi.com/MX/flat/64.png" />
          ) : (
            <img src="https://flagsapi.com/SE/flat/64.png" />
          )}
        </div>

        <h1>Pick one country: </h1>
        <div id="country">
          <button onClick={() => setCountry("mexico")}>Mexico</button>
          <button onClick={() => setCountry("sweden")}>Sweden</button>
        </div>

        <p>
          In {dataTest1} the parameter <span id="category">{dataTest2}</span>{" "}
          is: <span id="value">{dataTest3}</span>.
        </p>
      </header>
    </div>
  );
}

export default App;
