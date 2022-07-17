import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../../page/Layout/Layout";
import SignUp from "../../page/SignUp/SignUp";
import SignIn from "../../page/SignIn/SignIn";
import Bookings from "../../page/Bookings/Bookings";
import TripPage from "../../page/TripPage/TripPage";
import MainPage from "../../page/MainPage/MainPage";
import {IRoute, PathEnum} from "../../../Router/Routes";
import jsonCards from '../../../data/cards.json';
import jsonBookings from '../../../data/bookings.json';
import {IBookedTrip, ITrip} from "../../../types/types";

const trips: ITrip[] = JSON.parse(JSON.stringify(jsonCards));

const RouterComponent = () => {
    const [login, setLogin] = useState<string | null>(null);
    const loginUser = (login: string | null): void => setLogin(login);
    const [bookings, setBookings] = useState<IBookedTrip[]>(JSON.parse(JSON.stringify(jsonBookings)));
    const deleteBooking = (id: string): void => setBookings(bookings.filter(item => item.id !== id));
    const routes: IRoute[] = [
        {path: PathEnum.signUp, element: <SignUp setLogin={loginUser}/>},
        {path: PathEnum.signIn, element: <SignIn setLogin={loginUser}/>},
        {path: PathEnum.bookings, element: <Bookings trips={bookings} deleteBooking={deleteBooking}/>},
        {path: PathEnum.tripInfo, element: <TripPage trips={trips}/>},
        {path: PathEnum.notFound, element: <MainPage trips={trips}/>},
        {index: true, element: <MainPage trips={trips}/>}
    ];
    return (
        <div className="markup">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout login={login} setLogin={loginUser}/>}>
                        {routes.map(route => route.index
                            ? <Route key='index' index element={route.element}/>
                            : <Route key={route.path} path={route.path} element={route.element}/>)}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RouterComponent;