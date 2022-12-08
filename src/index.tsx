import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore({ data: [], dataIsLoading: false });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
