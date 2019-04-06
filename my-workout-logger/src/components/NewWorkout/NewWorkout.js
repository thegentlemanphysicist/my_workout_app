import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Button, Form, Radio, Input } from "antd";
import NewExerciseForm from "../../forms/NewExerciseForm";
class NewWorkout extends Component {
  state = {
    workoutKey: 1,
    visible: false,
    numberOfSets: 0
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formElementForSet = (
      <Form.Item label="Set">
        {getFieldDecorator("exerciseName", {
          rules: [
            {
              required: true,
              message: "Name of excersize required!"
            }
          ]
        })(<Input />)}
      </Form.Item>
    );

    return (
      <div>
        <p>A Workout to be added</p>
        <p>This is a new workout</p>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>ADD NEW EXERCISE TO WORKOUT</p>
          <NewExerciseForm />

          {/* training max toggle, show field  */}
        </Modal>
        {/* Must open a modal to add an exercise */}
      </div>
    );
  }
}
const WrappedNewWorkout = Form.create({ name: "normal_login" })(NewWorkout);
export default WrappedNewWorkout;
