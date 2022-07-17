import React, {ChangeEvent, FC, useState} from 'react';
import {ITrip} from "../../../types/types";
import FilterMenu from "../../common/FilterMenu/FilterMenu";
import {IFilter, useFiltration} from "../../../hooks/useFiltration";
import {useSearch} from "../../../hooks/useSearch";
import TripList from "../../common/TripList/TripList";

interface IPropTypes {
    trips: ITrip[]
}

const MainPage: FC<IPropTypes> = ({trips}) => {
    const [filters, setFilters] = useState<IFilter>({
        duration: '',
        level: ''
    });
    const [searchedValue, setSearchedValue] = useState<string>('');
    const changeFilter = (e:ChangeEvent<HTMLSelectElement>):void => setFilters({...filters, [e.target.name]: e.target.value});
    const changeSearch = (e:ChangeEvent<HTMLInputElement>):void =>  setSearchedValue(e.target.value);
    const filteredTrips: ITrip[] = useFiltration(trips, filters);
    const filteredAndSearchedTrips: ITrip[] = useSearch(filteredTrips, searchedValue)

    return (
        <main>
            <FilterMenu changeFilter={changeFilter} setSearchedValue={changeSearch} />
            <TripList filteredAndSearchedTrips={filteredAndSearchedTrips} />
        </main>
    );
};

export default MainPage;