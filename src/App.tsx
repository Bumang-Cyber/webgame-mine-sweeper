import { Provider } from "react-redux";

import Layout from "./components/Layout";
import Game from "./components/Game";
import Option from "./components/Option";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Option />
        <Game />
      </Layout>
    </Provider>
  );
}

export default App;
