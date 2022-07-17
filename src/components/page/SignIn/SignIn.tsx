import React, {ChangeEvent, FC, useState} from 'react';
import {Link} from "react-router-dom";
import {useValidateForm, validateType} from "../../../hooks/useValidateForm";
import MyInput from "../../common/MyInput/MyInput";
import SignButton from "../../common/SignButton/SignButton";
import './SignIn.scss';

interface IProps {
    setLogin: (login: string) => void
}

const SignIn: FC<IProps> = ({setLogin}) => {
    const [loginValue, setLoginValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const setEmail = (e: ChangeEvent<HTMLInputElement>): void => setLoginValue(e.target.value);
    const setPass = (e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value);
    const [isValid, onSubmitForm]: validateType = useValidateForm(setLogin, password);
    return (
        <main className="sign-in-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-in-form" autoComplete="off" onSubmit={e => onSubmitForm(e, loginValue)}>
                <h2 className="sign-in-form__title">Sign In</h2>
                <MyInput name={'email'} type={'email'} labelText={'Email'} value={loginValue}
                         onChange={e => setEmail(e)}/>
                <MyInput name={'password'} type={'password'} labelText={'Email'} value={password}
                         onChange={e => setPass(e)}/>
                <SignButton text='Sign In' isValid={isValid}/>
            </form>
            <span>
        Already have an account?
        <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
      </span>
        </main>
    );
};

export default SignIn;