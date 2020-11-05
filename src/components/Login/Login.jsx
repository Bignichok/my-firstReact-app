import React from 'react';
import { reduxForm ,Field} from 'redux-form';
import {connect} from 'react-redux'
import { Input } from '../common/FromsControls/FormsControls';
import { requiredField } from '../../utils/validators';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import styles from '../common/FromsControls/FormsControls.module.css'

const LoginForm = (props) => {
   
    return(<form onSubmit={props.handleSubmit}>
            <div>
                <Field type="email" name='email' placeholder='email' validate={[requiredField]} component={Input}/>
            </div>
            <div>
                <Field type="password" name='password' placeholder='password' validate={[requiredField]} component={Input}/>
            </div>
            <div>
                <Field  type='checkbox' id='rememberMe' name="rememberMe" component={Input}/>
                <label htmlFor="rememberMe">Remember me</label>
            </div>
        <div>
            {props.error && <div className={styles.formSummaryError}> 
               {props.error}
            </div>}
            <button type="submit">login</button>
            </div>
        </form>
) 
    
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        const {email,password,rememberMe} = formData
        props.login(email,password,rememberMe)
    }

    if (props.isAuth) {
      return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};


export default connect(mapStateToProps,{login})(Login)