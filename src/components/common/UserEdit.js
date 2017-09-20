import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import FormField from "./FormField";
import FormSubmit from "./FormSubmit";

// User add/edit page component
export class UserEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {user, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-user-edit">
        <div>{'User ' + (user._id ? 'edit' : 'add')}</div>
        <form onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="name" label="name" />
          <Field component={FormField} name="email" label="email" doValidate={true} />
          <Field component={FormField} name="phone" label="phone" />
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save User"/>
        </form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'USERS_ADD_EDIT',
        user: {
          _id: values._id || 0,
          name: values.name || '',
          email: values.email || '',
          phone: values.phone || '',
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const UserEditForm = reduxForm({
  form: 'user_edit',
  validate: function (values) {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    return errors;
  },
})(UserEdit);

// export the connected class
function mapStateToProps(state, own_props) {
    const user = state.users.find(
            x => {
                if (own_props.params && x._id === own_props.params._id) {
                    return x;
                }
            }
        ) || {};
  return {
    user: user,
    initialValues: user,
  };
}
export default connect(mapStateToProps)(UserEditForm);
