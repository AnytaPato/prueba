import React from "react";
import { Provider } from "react-redux";

import {store} from "./store/store";

import AuthRouter from "./routes/AuthRouter";


function App() {
  return (
<Provider store = { store }>
<AuthRouter />
</Provider>
  );
  }

export default App;
