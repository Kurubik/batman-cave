import React, { PropTypes } from "react";

// Form submit component
export default class FormSubmit extends React.Component {
  // render
  render() {
    const {error, invalid, submitting, buttonSaveLoading, buttonSave} = this.props;
    return (
      <div>
        {error &&
        <div validationState="error">
          <div>{error}</div>
        </div>}

        <div className="submit">
          <button type="submit" bsStyle="primary" disabled={invalid || submitting}>
            {submitting ?
              (buttonSaveLoading ? buttonSaveLoading : 'Saving...') :
              (buttonSave ? buttonSave : 'Save')}
          </button>
        </div>
      </div>
    );
  }
}

// prop checks
FormSubmit.propTypes = {
  error: PropTypes.string,  // redux-form general `_error` message
  invalid: PropTypes.bool,  // redux-form invalid prop
  submitting: PropTypes.bool,   // redux-form invalid submitting
  buttonSaveLoading: PropTypes.string, // save button loading text, default is "Saving..."
  buttonSave: PropTypes.string,    // save button text, default is "Save"
};
