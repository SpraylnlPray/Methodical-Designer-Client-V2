import React from 'react';

const FormField = ({
  input,
  label,
  type,
  placeholder,
  iconLeft,
  iconRight,
  meta: { touched, error },
}: any) => {
  let controlIconClass = '';
  if (iconLeft) controlIconClass += 'has-icons-left';
  if (iconRight) controlIconClass += ' has-icons-right';

  return (
    <div className='field'>
      <label className='label'>{label}</label>
      <div className={`control ${controlIconClass}`}>
        <input
          {...input}
          className='input'
          type={type}
          placeholder={placeholder ? placeholder : ''}
        />
        {iconLeft && (
          <span className='icon is-small is-left'>
            <i className={`fas ${iconLeft}`} />
          </span>
        )}
        {iconRight && (
          <span className='icon is-small is-right'>
            <i className={`fas ${iconRight}`} />
          </span>
        )}
        {touched && error && (
          <p className='help is-danger'>
            <i className='fas fa-exclamation-triangle' />
            &nbsp;
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormField;
