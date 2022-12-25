import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/counterFunction';
import Header from './components/Header';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem';
import AllItems from './components/AllItem';
import Edit from './components/EditItem';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/Home" exact component={Home}/>
        <Route path="/ItemList" exact component={AllItems}/>
        <Route path="/addItem" exact component={AddItem}/>
        <Route path="/editItem/:id" exact component={Edit}/>
      </div>
    </Router>
  );
}

export default App;
