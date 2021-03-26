import logo from "./logo.svg";
import "./App.css";

import Layout from "./Layout";
let s = true;
function App() {
  return <div className="App">{s && <Layout />}</div>;
}

export default App;
