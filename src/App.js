import Footer from "./components/Footer/Footer" 
import Header from "./components/Header/Header" 
import Row from "./components/Row/Row" 
import Card from "./components/Card/Card" 

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
      	<Card />
      	<Card />
      	<Card />
      	<Card />
      	<Card />
      </Row>
      <Footer />
    </div>
  );
}

export default App;
