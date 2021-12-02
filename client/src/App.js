import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import BulkUploadPredict from './screens/BulkUploadPredict';
import Login from './screens/Login';
import  GeneralAnalysisScreen  from './screens/GeneralAnalysisScreen';
import PredictScreen from './screens/PredictScreen';
import SinglePredictScreen from './screens/SinglePredictScreen';


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
          <Route path="/single_agent_predict">
            <Header />
            <SinglePredictScreen />
          </Route>
          <Route path="/general_analysis">
            <Header />
            <GeneralAnalysisScreen />
          </Route>
          <Route path="/predict_data">
            <Header />
            <PredictScreen />
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
