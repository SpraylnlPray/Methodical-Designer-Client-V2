import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField/FormField';
import { required } from '../../InputChecks';

const EditProfileModal = (props) => {
  const { toggleVisibility, submitting, handleSubmit, pristine } = props;

  const onSubmit = (e) => {
    console.log(e);
    console.log('saving changes!');
  };

  return (
    <div className='box'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Edit your Profile</p>
        </header>
        <section className='modal-card-body is-flex is-flex-direction-column is-align-items-center'>
          <figure className='image is-128x128'>
            <img
              src='https://bulma.io/images/placeholders/128x128.png'
              alt='Image'
            />
          </figure>
          <Field
            name='name'
            type='text'
            label='Username'
            placeholder='Max Example'
            component={FormField}
            iconLeft='fa-user'
            validate={[required]}
          />
        </section>
        <footer className='modal-card-foot'>
          <button
            className='button'
            disabled={submitting}
            onClick={toggleVisibility}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='button is-success'
            disabled={submitting || pristine}
            onClick={toggleVisibility}
          >
            Save Changes
          </button>
        </footer>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'EditProfileForm',
})(EditProfileModal);
