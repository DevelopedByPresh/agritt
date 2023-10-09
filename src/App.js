
import React,{lazy, Suspense} from "react"

import SignIn from "./components/SignIn/SignIn"
import ForgotPassword from "./components/ForgotPassword"
import Login from "./components/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css"
// import HomePage from "./components/HomePage";
// import UserProfile from "./components/userProfile/UserProfile";
import PrivateRoute from "./components/privateRoute";


const  HomePage = lazy(()=> import("./components/HomePage"))
const  UserProfile = lazy(()=> import("./components/userProfile/UserProfile"))
const  Products = lazy(()=> import("./components/Products/Products"))


function App() {
  return(
<div>



<div className="App">
        <Router>
        <Suspense fallback={<h2 style={{textAlign:'center', marginTop:'40px', fontStyle:'italic', fontWeight:'bold', fontSize:'18px'}}>Working on it....</h2>}>
          <Routes>
            <Route element={<PrivateRoute />}>
                <Route element={<HomePage/>} path="/Home" exact/>
                <Route element={<UserProfile/>} path="/userProfile"/>
                <Route element={<Products/>} path="/products"/>
            </Route>
            <Route element={<Login/>} path="/"/>
            <Route exact path='/SignUp' element={<SignIn/>}/>
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          </Routes>
          </Suspense>
      </Router>
    </div>


    
    </div>
  );
}

export default App;



