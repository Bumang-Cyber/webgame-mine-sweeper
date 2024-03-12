import { Provider } from "react-redux";

import Layout from "./components/Layout";
import Game from "./components/Game";
import Option from "./components/Option";
import store from "./store";

function App() {
  // TODO: currentLevel을 전역상태관리로 바꾸기

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
