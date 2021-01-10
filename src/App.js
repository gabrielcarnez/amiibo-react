import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Index from "./pages/Index/Index";
import Detail from "./pages/Detail/Detail";
import contact from "./text-data.json";

function App() {
  const { madeWith, personal, description, name, subTitle } = contact;
  return (
    <Provider store={store}>
      <Router basename={"/amiibo-react"}>
        <div className="App">
          <Header {...{ name, subTitle }} />
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/detail/:id" component={Detail} />
          </Switch>
          <Footer {...{ madeWith, personal, description, name }} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
