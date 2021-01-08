import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Index from "./pages/Index/Index";
import Detail from "./pages/Detail/Detail";

function App() {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <Router basename={"/amiibo-react"}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
