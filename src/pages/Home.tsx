import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import Authorized from '../auth/Authorized';
import { landinpageDTO } from '../models/movies/movies.model';
import MoviesList from '../models/movies/MoviesList'
import AlertContext from '../utils/AlertContext';
import { urlMovies } from '../utils/endpoints';

export default function Home() {
    const [movies, setMovies] = useState<landinpageDTO>({});

    useEffect(() => {
        loadData();
    }, [])
    function loadData() {
        axios.get(urlMovies)
            .then((response: AxiosResponse<landinpageDTO>) => {
                console.log(response.data)
                setMovies(response.data);
            })
    }
    return (
        <AlertContext.Provider value={() => { loadData(); }}>
            <h2>In Theaters</h2>
            <MoviesList movies={movies.inTheaters} />

            <h2>Upcoming Releases</h2>
            <MoviesList movies={movies.upComingReleases} />
        </AlertContext.Provider>
    )
}
