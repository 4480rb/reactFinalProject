import React from 'react';
import './App.css';
import Login from './component/Login'
import { Route, Routes ,BrowserRouter} from 'react-router-dom'
import Settings from './component/Settings';

// export function Login() { 
// return ( <div>Login</div> )
// }

function App() {
return (
<><Login /></>
//   <BrowserRouter>
//      <Routes>
//        <Route path="/" exact element={<Login />} />  
//        <Route path="/Settings"  element={<Settings/>} />      
//      </Routes>
//  </BrowserRouter>
);
}
export default App;
