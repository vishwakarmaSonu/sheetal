import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import photo from './img/37.jpg';
import ProductScreen from './screens/ProductScreen';

import login from './screens/login';



function App() {
  return (

    <div>
   <h1>hekksidf</h1>
   <img src={photo} alt="photo"/>
  
    <Router>
      <Header/>
      <main className="py-3">
      <Container>
        <Route path='/#/' component={login} exact/>
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/HomeScreen' component={HomeScreen} />

      </Container>
      </main>
      <Footer/>
      
    </Router>
    </div>
  );
}

export default App;
