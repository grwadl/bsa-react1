import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";
import {ITrip} from "../../../types/types";
import BookingModal from "../../common/BookingModal/BookingModal";
import {paramsId, useCheckTrip} from "../../../hooks/useCheckTrip";
import './TripPage.scss';

interface IPropTypes {
    trips: ITrip[]
}

const TripPage: FC<IPropTypes> = ({trips}) => {
    const params = useParams<paramsId>();
    const [tripItem, setTripItem] = useState<ITrip | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const closeModal = () => setModalOpen(false);
    useCheckTrip(trips, params.tripId as string, setTripItem)
    return (
        <main className="trip-page">
            {modalOpen && <BookingModal trip={tripItem as ITrip} closeModal={closeModal}/>}
            <div className="trip">
                <img src={tripItem?.image} className="trip__img" alt="trip image"/>
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{tripItem?.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{tripItem?.duration}</strong> days</span>
                            <span className="trip-info__level">{tripItem?.level}</span>
                        </div>
                    </div>
                    <div className="trip__description">
                        {tripItem?.description}
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">{tripItem?.price}</strong>
                    </div>
                    <button className="trip__button button" onClick={() => setModalOpen(true)}>Book a trip</button>
                </div>
            </div>
        </main>
    );
};

export default TripPage;