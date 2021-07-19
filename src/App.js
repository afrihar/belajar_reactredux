import './App.css';
import Counter from "./pages/Counter";
import {Provider} from "react-redux";
import store from './store'
import News from "./pages/News";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Counter/>
          <News/>
        </div>
      </Provider>
  );
}

export default App;
