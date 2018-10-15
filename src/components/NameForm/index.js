import React from 'react';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import {AppForm} from "./styles";

export const NameForm = ({name, onSubmit}) => {
  return (
    <AppForm>
      <Formik
        initialValues={{name: name}}
        onSubmit={(values) => {
          onSubmit(values.name);
        }}
        render={({
                   values,
                   handleChange,
                   handleSubmit
                 }) => (
          <form onSubmit={handleSubmit} className="player-name-form">
            <input
              type="text"
              onChange={handleChange}
              value={values.name}
              name="name"
            />
            <button type='submit'>Play</button>
          </form>
        )}
      />
    </AppForm>
  )
};

// interfaces
NameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};