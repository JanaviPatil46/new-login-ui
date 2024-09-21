// import React from 'react'
// import Login from './login/Login'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Passwordreset from './login/Passwordreset'
// import Termsandcontions from './login/Termsandcontions'
// import Signup from './login/Signup'

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route  path='/login' element={<Login />} />
//           <Route path='/passwordreset' element={<Passwordreset/>}/>
//           <Route path='/termsncond' element={<Termsandcontions/>}/>
//           <Route path='/signup' element={<Signup/>}/>
//         </Routes>
//       </BrowserRouter>


//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login/Login';
import Passwordreset from './login/Passwordreset';
import Termsandcontions from './login/Termsandcontions';
import Signup from './login/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<Passwordreset />} />
        <Route path="/termsncond" element={<Termsandcontions />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
