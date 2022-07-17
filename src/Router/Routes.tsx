import React, {ReactElement} from "react";

export enum PathEnum {
    signUp = 'sign-up',
    signIn = 'sign-in',
    bookings  = 'bookings',
    tripInfo = 'trip/:tripId',
    notFound = '*'
}

export interface IRoute {
    path?: PathEnum,
    element: ReactElement,
    index?: boolean
}
