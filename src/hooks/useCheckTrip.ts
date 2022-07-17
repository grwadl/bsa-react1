import {useEffect} from "react";
import {ITrip} from "../types/types";
import {useNavigate} from "react-router-dom";

export type paramsId = {
    tripId: string
}

export const useCheckTrip = (trips:ITrip[], params: string, setTripItem:(i:ITrip) => void) => {
    const navigate = useNavigate();
    useEffect(() => {
        const item: ITrip | undefined = trips.find(trip => trip.id === params);
        !item
            ? navigate('/', {replace: true})
            : setTripItem(item);
    }, []);
}