import logo from './logo.svg';
import './App.scss';
import './Example/example.js';
import Mycomponent from './Example/example.js';

import ListTodo from './Todos/ListTodo.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from "./Navigation/Nav.js";
import Home from "./Example/Home.js";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <Mycomponent/>  */}
          {/* <ListTodo/> */}
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/todo">
              <ListTodo/>
            </Route>
            <Route path="/about">
              <Mycomponent/>
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          // transition: Bounce,
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
