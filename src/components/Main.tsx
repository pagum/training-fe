import React, { useContext } from 'react'; 
import {Link} from "react-router-dom";
import { StoreContext } from '../StoreContext';

interface DispatchProps{
 
}
type Props = DispatchProps

const Main: React.FC<Props> = ( ) => {
  const data = useContext(StoreContext)
  return (
  <>
    Main 
    <Link to="/dashboard">About</Link>
      
  </>   
  );
} 

export default (Main)
