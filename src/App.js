import React from 'react';
import { Outlet} from 'react-router-dom';
import Style from './App.module.css'
class App extends React.Component {
  render(){
    return (
      <div className={Style.main}>
        <div className={Style.container}>
          <Outlet/>
        </div>
      </div>  
  )}
}

export default App;
