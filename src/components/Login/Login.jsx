import React from 'react';
import { reduxForm ,Field} from 'redux-form';

const LoginForm = (props) => {
    console.log('rere');
    return(<form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name='login' placeholder={'login'}  component={"input"}/>
            </div>
            <div>
                <Field type="text" name={'password'} placeholder={'password'} component={"input"}/>
            </div>
            <div>
                <Field  type={'checkbox'}  id='rememberMe' name={"rememberMe"} component={"input"}/>
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div>
            <button type="submit">submit</button>
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
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login