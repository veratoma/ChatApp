import './App.css';
import Routes from './components/Routes/Routes';
import { Provider } from "react-redux";
import { store } from "./Store/store"

export const App = function () {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Routes></Routes>
        </Provider>
      </header>
    </div>
  );
}

