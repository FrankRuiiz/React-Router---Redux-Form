import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }
  //   The objext passed tothe above input is similar to the below
  //   onChange={field.input.onChange}
  //   onFocus={field.input.onFocus}
  //   onBlur={field.input.onBlue}

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // console.log(valuses) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

// 'validate: validate' could also be condensed down to just 'validate'
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew);
