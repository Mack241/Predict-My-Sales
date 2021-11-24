import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import BulkUploadPredict from './screens/BulkUploadPredict';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path="/bulkuploadpredict">
            <Header />
            <BulkUploadPredict />
          </Route>
          <Route path="/" exact>
            <Header />
            <HomeScreen/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
