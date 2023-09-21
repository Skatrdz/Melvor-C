import logo from './logo.svg';
import './App.css';
import test from "./mytest/test.css";
import Navbar from "./components/navbar/navbar";
import Prof from "./components/main/prof/prof";

// import Test from "./mytest/test";
import {createStore} from "redux"
import {Provider} from "react-redux";
import store from "./store/store";








function App() {

  return (
    // <div>
    //     <Test></Test>
    // </div>
      <Provider store={store}>
          <div id="container">
 
              <Navbar></Navbar>
              <Prof/>
          </div>
      </Provider>
  );
}

export default App;
