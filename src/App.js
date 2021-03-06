import { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DataContext } from './context/DataProvider'
import BubbleSort from './components/algorithms/sorts/BubbleSort'
import InsertSort from './components/algorithms/sorts/InsertSort'
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'
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
          <Route exact path='/' component={Homepage} />
          <Route path='/bubble-sort' component={BubbleSort} />
          <Route path='/insert-sort' component={InsertSort} />
        </Switch>
    </div>
  );
}

export default App;
