import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import { Switch, Route, Router } from "react-router";
import AdminDashBoard from "./pages/AdminDashBoard";
import ExcelPage from "./components/excelPage";
function App() {
  return (
    <div className="h-screen bg-brandWhite-back">
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <DashBoard />
          </Route>
          <Route exact path="/form">
            <NavBar />
            <Form />
          </Route>
        </Switch>
      </Router> */}
      {/* <NavBar />
      <DashBoard /> */}
      <Form /> */
    </div>
  );
}

export default App;
