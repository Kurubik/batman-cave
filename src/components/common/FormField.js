import React, { PropTypes } from "react";

// Form field component
export default class FormField extends React.Component {
  // render
  render() {
    const {className, doValidate, meta} = this.props;
      return (
          <div className={className}>
              {this.content()}
          </div>
      );
  }

  // the field content
  content() {
    const {theme, label} = this.props;
    if ('other_theme' === theme) {
      // layout for some other theme
    } else {
      // default theme: 2col
      return (
        <div>
          <label>{label}</label>
          {this.field()}
        </div>
      );
    }
  }

  // the field itself
  field() {
    const {input, componentClass, type, placeholder, children} = this.props;
    return (
      <input {...input} className={componentClass} type={type} placeholder={placeholder}>
        {children}
      </input>
    );
  }
}

// prop checks
FormField.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  theme: PropTypes.string,  // 2col (default), etc
  doValidate: PropTypes.bool, // true or false
  label: PropTypes.any,  // the field text or a react component if we have html inside (empty string by default)
  componentClass: PropTypes.string, // input (by default), textarea, select
  type: PropTypes.string,   // input type: text (by default), password
  placeholder: PropTypes.string,    // input placeholder (empty string by default)
  className: PropTypes.string,  // the class name (empty string by default)
}
