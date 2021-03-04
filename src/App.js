import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import BubbleSort from './components/algorithms/BubbleSort'
import InsertSort from './components/algorithms/InsertSort'
import Header from './components/header/Header'
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path='/bubble-sort' component={BubbleSort} />
          <Route path='/insert-sort' component={InsertSort} />
        </Switch>
    </div>
  );
}

export default App;
