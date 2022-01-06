import React, { useEffect, useState } from 'react'
import { landinpageDTO } from '../models/movies/movies.model';
import MoviesList from '../models/movies/MoviesList'

export default function Home() {
    const [movies, setMovies] = useState<landinpageDTO>({});
    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [{
                    id: 1,
                    title: "Spider-Man: Farm From Home",
                    imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
                },
                {
                    id: 2,
                    title: "Spider-Man: No Way Home",
                    imgUrl: "https://www.nfbio.se/sites/nfbio.se/files/styles/movie_poster/public/media-images/2021-12/spiderman_rec_webb.jpg?itok=nuUDBuV9",
                },
                {
                    id: 3,
                    title: "The Matrix Resurrections",
                    imgUrl: "https://www.nfbio.se/sites/nfbio.se/files/styles/movie_poster_teaser/public/media-images/2021-12/Matrix-webb.jpg?itok=TF9xj7Wb",
                }
                ],
                upComingMovies: [
                    {
                        id: 4,
                        title: "Sword Art Online: Progressive - Aria of a Starless Night",
                        imgUrl: "https://catalog.cinema-api.com/cf/images/ncg-images/01691481cbe1482f8f4c8063510f9c6f.jpg?width=240&version=A19103CA7793183CD8B9765948343211&format=webp",
                    },
                    {
                        id: 5,
                        title: "The King's Man",
                        imgUrl: "https://catalog.cinema-api.com/cf/images/ncg-images/c421eaabb124478f808978684c050fec.jpg?width=240&version=52EE0703BF62A0DCFA1F43851764DEBD&format=webp",
                    }
                ]
            })
        }, 2000)
    })

    return (
        <>
            <h2>In Theaters</h2>
            <MoviesList movies={movies.inTheaters} />

            <h2>Upcoming Releases</h2>
            <MoviesList movies={movies.upComingMovies} />
        </>
    )
}
