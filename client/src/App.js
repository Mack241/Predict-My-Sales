import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import BulkUploadPredict from './screens/BulkUploadPredict';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <hi>Login</hi>
          </Route>
          <Route path="/home">
            <Header />
            <HomeScreen />
          </Route>
          <Route path="/bulkuploadpredict">
            <Header />
            <BulkUploadPredict />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
