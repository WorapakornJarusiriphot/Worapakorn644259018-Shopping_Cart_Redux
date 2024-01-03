import "./App.css";
import NavBar from "./components/Navbar";
import Page from "./components/Page";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Page />
    </Provider>
  );
}

export default App;
