import React, { useState } from "react";
import './NewBoardForm.css';
import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitCallback({
      title: formFields.title,
      owner: formFields.owner
    });
    setFormFields({
      title: '',
      owner: ''
    });
  };

  const onTitleChange = (event) => {
    setFormFields({
        ...formFields,
        title: event.target.value
    })
};

const onOwnerChange = (event) => {
    setFormFields({
        ...formFields,
        owner: event.target.value
    })
};

  return (
    <form onSubmit={onFormSubmit}>
      <div className='boardFormInputs'>
        <label>Board Title: </label>
        <input
          name="title"
          id="title"
          value={formFields.title}
          onChange={onTitleChange}
          required
        />
        <label>Board Owner: </label>
        <input
          name="owner"
          id="owner"
          value={formFields.owner}
          onChange={onOwnerChange}
          required
        />
      </div>
      <button type='submit'>SUBMIT</button>
    </form>
  );
};

NewBoardForm.propTypes = {
  onSubmitCallback: PropTypes.func
};

export default NewBoardForm;