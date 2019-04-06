import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import { Modal, Button } from "antd";
import "antd/dist/antd.css";
// import logo from "./logo.svg";
import Layout from "./components/Layout/Layout";
import NewWorkout from "./components/NewWorkout/NewWorkout";
import Workouts from "./components/Workouts/Workouts";
import Home from "./components/Home/Home";
import "./App.css";

class App extends Component {
  // state = {
  //   visible: false
  // };

  // showModal = () => {
  //   this.setState({
  //     visible: true
  //   });
  // };

  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false
  //   });
  // };

  // handleCancel = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Layout />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workouts" exact component={Workouts} />
          <Route exact path="/newworkout" component={NewWorkout} />
        </Switch>

        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
        {/* <NewWorkout /> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
