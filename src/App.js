import { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DataContext } from './context/DataProvider'
import BubbleSort from './components/algorithms/BubbleSort'
import InsertSort from './components/algorithms/InsertSort'
import Header from './components/header/Header'
import './App.css';



const App = () => {
  const { buildData } = useContext(DataContext)

  useEffect(() => {
    buildData()
  }, [])

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
