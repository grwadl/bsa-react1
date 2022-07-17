import React, {FC, useMemo} from 'react';
import {IBookedTrip} from "../../../types/types";
import BookingList from "../../common/BookingList/BookingList";
import './Bookings.scss';

export interface IPropBookingTypes {
    trips: IBookedTrip[],
    deleteBooking: (s:string) => void
}

const Bookings:FC<IPropBookingTypes> = ({trips, deleteBooking}) => {
    const sortedBookings: IBookedTrip[] = useMemo(() => {
        return trips.sort((a, b) =>
            Number(new Date(a.date).getTime()) - Number(new Date(b.date).getTime()));
    }, [trips]);
    return (
        <main className="bookings-page">
            <BookingList deleteBooking={deleteBooking} trips={sortedBookings} />
        </main>
    );
};

export default Bookings;