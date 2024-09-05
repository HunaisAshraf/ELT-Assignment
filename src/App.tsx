import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="lg:ms-56">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
