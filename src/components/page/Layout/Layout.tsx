import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import '../../../assets/css/style.css';
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import '../../global.scss';
import './Layout.scss';

interface IProps {
    login: string | null,
    setLogin: (s:string | null) => void
}

const Layout: FC<IProps> = ({login, setLogin}) => {
    return (
        <div className={'wrapper'}>
            <Header login={login} setLogin={setLogin} />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;