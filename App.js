/*import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Employee/>
    </div>
  );
}
class Employee extends React.Component{
constructor(props){
super(props);
this.state={
employees:[]
};
}
comonentDidMount(){
let urld="http://localhost:81/ajax/day15_fetch.html"

fetch(urld).then(res=>res.json()).then((result)=>{this.setState({employees:result});});}
 render() {
      return (
        <div>
          <h2>Employees Data...</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>annualSalary</th>
                  <th>dateOfBirth</th>
              </tr>
            </thead>
            <tbody> 
            {this.state.employees.map(emp => (
         <tr key={emp.code}>
         <td>{emp.code}</td>
        <td>{emp.name}</td>
        <td>{emp.annualSalary}</td>
              <td>{emp.dateOfBirth}</td>
        </tr>
                  ))}  
            </tbody>
          </table>
        </div>
        );
      }
  }
export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Nomatch from './Nomatch';
import Login from './Login';
import Footer from './Footer';
import Signup from './Signup';
class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "grey" }}><div style={{ width: "100%" }}>

        <img src="https://static.vecteezy.com/system/resources/previews/000/623/567/non_2x/auto-car-logo-template-vector-icon.jpg" alt="Logo" style={{ height: "100px", width: "15%", marginTop: "0", marginLeft: "0", borderRadius: "50%" }}></img>
        <h3 className="w3-bar-item" style={{ color: "#fff", fontWeight: "700" }}>G1ViTA CAR SERVICES</h3>

        <h3 className="w3-bar-item" style={{ marginTop: "-50px", color: "red", fontWeight: "700", textAlign: "right" }}>Welcome </h3>
        <hr style={{ borderTop: " 1px solid black !important" }} />
      </div>
        <Router>
          <div style={{ backgroundColor: "black", width: "100%", alignItems: "left" }}>

            <p style={{ marginLeft: "60%" }}><Link to="/">Home</Link>&emsp;&emsp;&emsp;
              <Link to="/About">About</Link>&emsp;&emsp;&emsp;
              <Link to="/Contact">Contact</Link>&emsp;&emsp;&emsp;
              <Link to="/Signup">Signup</Link>&emsp;&emsp;&emsp;
              <Link to="/Login">Login</Link></p>

          </div>
          {/* A <Switch> looks through its children <Route>s and
                 renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="*">
              <Nomatch />
            </Route>

          </Switch>


        </Router>
        <Footer />
      </div>
    );

  }
}
export default App;




