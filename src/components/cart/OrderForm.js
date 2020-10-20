import React from 'react';
import { reduxForm, Field } from 'redux-form';

const OrderForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} >
        <div className="form-group">
            <div>
                <div className="control">
                <Field className="form-control form-control-sm" name="firstName" component="input" type="text" placeholder="NAME"/>
                </div>
            </div>
        
            <div className="field">
                <div className="control">
                <Field className="form-control form-control-sm" name="lastName" component="input" type="text" placeholder="SURNAME"/>
                </div>
            </div>
        
            <div className="field">
                <div className="control">
                <Field className="form-control form-control-sm" name="address" component="input" type="address" placeholder="ADDRESS"/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                <Field className="form-control form-control-sm" name="email" component="input" type="email" placeholder="EMAIL"/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                <Field className="form-control form-control-sm" name="number" component="input" type="number" placeholder="NUMBER"/>
                </div>
            </div>
        
            <div className="field">
                <div className="control">
                    <button className="btn-sm btn-block btn-custom disabled">ORDER</button>
                </div>
            </div>
        </div>
      
  
    </form>;
  };
  
  const validate = val => {
    const errors = {};
    if (!val.firstName) {
      console.log('First Name is required');
      errors.firstName = 'Required';
    }
    if (!val.lastName) {
      console.log('Last Name is required');
      errors.lastName = 'Required';
    }
    if (!val.email) {
      console.log('email is required');
      errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(val.email)) {
      console.log('email is invalid');
      errors.email = 'Invalid email address';
    }
   
    return errors;
  };
  
  
  
export default reduxForm({
    form: 'simple',
    validate,
    })(OrderForm);
 