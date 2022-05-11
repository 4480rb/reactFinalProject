import React from 'react';
import './App.css';
import Login from './component/Login'
import { Route, Routes ,BrowserRouter} from 'react-router-dom'

// export function Login() { 
// return ( <div>Login</div> )
// }

function App() {
return (

  <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Login />} />      
     </Routes>
 </BrowserRouter>
);
}
export default App;
