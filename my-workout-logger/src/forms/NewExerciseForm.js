import React from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import { Icon, Row, Col, Input } from "antd";

const { TextArea } = Input;

const renderSets = ({ fields, meta: { error } }) => (
  <Col>
    <Row>
      <button type="button" onClick={() => fields.push()}>
        Add Set
      </button>
    </Row>
    {fields.map((set, index) => (
      <Row key={index}>
        <button
          type="button"
          title="Remove Set"
          onClick={() => fields.remove(index)}
        >
          <Icon type="close-circle" />
        </button>
        <Field
          name={`reps #${index + 1}`}
          type="number"
          component="input"
          placeholder="Reps or Time"
          label={`set #${index + 1}`}
        />
        <Field
          name={`reportime #${index + 1}`}
          component="select"
          label={`set #${index + 1}`}
        >
          <option value="#reps">Reps</option>
          <option value="seconds">Time</option>
        </Field>
        <Field
          name={`load #${index + 1}`}
          type="number"
          component="input"
          placeholder="Weight On The Bar"
          label={`set #${index + 1}`}
        />
      </Row>
    ))}
    {error && <li className="error">{error}</li>}
  </Col>
);

let NewExerciseForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col>
        <Row>
          <Field
            name="exerciseName"
            placeholder="Exercise Name"
            component="input"
            type="text"
          />
        </Row>
        <Row>ADD A TRAINING MAX TOGGLE TO THE FORM</Row>
        <Row>Sets</Row>
        <Row>
          <FieldArray name={`sets`} component={renderSets} />
        </Row>
        <label>Note:</label>
        <TextArea id="note" name="note" label="Notes" rows={4} type="text" />

        {/* if time, enter goal time */}

        {/* if reps, enter goal reps */}
      </Col>
    </form>
  );
};

NewExerciseForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(NewExerciseForm);

export default NewExerciseForm;
