import React, {FC} from 'react';
import BookingComponent from "../BookingComponent/BookingComponent";
import {IPropBookingTypes} from "../../page/Bookings/Bookings";
import './BookingList.scss';

const BookingList:FC<IPropBookingTypes> = ({trips, deleteBooking}) => {
    return (
        <ul className="bookings__list">
            {trips.map(trip => <BookingComponent key={trip.id} booked={trip} deleteBooking={deleteBooking}/>)}
        </ul>
    );
};

export default BookingList;