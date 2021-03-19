import { useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DataContext } from './context/DataProvider'
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'
import BubbleSort from './components/algorithms/sorts/BubbleSort'
import InsertSort from './components/algorithms/sorts/InsertSort'
import MergeSort from './components/algorithms/sorts/MergeSort'
import SelectionSort from './components/algorithms/sorts/SelectionSort'
import HeapSort from './components/algorithms/sorts/HeapSort'
import './App.css';



const App = () => {
  const { buildData } = useContext(DataContext)

  useEffect(() => {
    buildData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/bubble-sort' component={BubbleSort} />
          <Route path='/insert-sort' component={InsertSort} />
          <Route path='/merge-sort' component={MergeSort} />
          <Route path='/selection-sort' component={SelectionSort} />
          <Route path='/heap-sort' component={HeapSort} />
        </Switch>
    </div>
  );
}

export default App;
