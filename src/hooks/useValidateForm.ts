import {FormEvent, useMemo} from "react";
import {useNavigate} from "react-router-dom";


export type validateType = [boolean, (e: FormEvent<HTMLFormElement>, loginValue: string) => void];

export const useValidateForm = (setLogin: (l: string) => void, password: string): validateType => {
    const navigate = useNavigate();
    const isValid: boolean = useMemo(() => {
        return (password.length > 3 && password.length < 20)
    }, [password])
    const onSubmitForm = (e: FormEvent<HTMLFormElement>, loginValue: string): void => {
        e.preventDefault();
        setLogin(loginValue);
        navigate('/', {replace: true});
    }
    return [isValid, onSubmitForm];
}