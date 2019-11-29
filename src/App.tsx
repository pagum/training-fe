import React ,{useEffect, useState} from 'react'; 
import './App.css';  
import { history } from './history';
import   {StoreContextProvider, Data}   from './StoreContext';
import { Router, Route } from 'react-router';
import Main from './components/Main';
import { appData } from './data';
import { Dashboard } from './components/Dashboard';
import { TaskDetail } from './components/TaskDetail';

export const StoreContext = React.createContext(null)

// const RouteGuard = Component =>({match})=>
//     !store.getState().session.authenticated ?
//         <Redirect to="/"/> :
//         <Component match={match}/>;


const App: React.FC = () => { 
  const [data, setData] = useState<Data | undefined>(undefined)
  
  useEffect(() => {
    setData(appData); 
  }, []);
  return (
    <StoreContextProvider  value={data}> 
    <Router history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/dashboard" component={Dashboard} />
        
    <Route exact
                       path="/task/:id"
                       component={TaskDetail} />
      </Router>
    </StoreContextProvider >
  );

}  

export default  App;

