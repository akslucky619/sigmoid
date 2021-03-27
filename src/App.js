import React from "react";

import Layout from "./components/Layout";
import Interface from "./components/Interface/Interface"
import { ACTIONS } from "./reducers/user";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

let s = true;
// class App extends React.Component{
//   return (
//     <Provider store={store}>
//       <Layout />
//     </Provider>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Interface />
      </Provider>
    );
  }
}
export default App;
