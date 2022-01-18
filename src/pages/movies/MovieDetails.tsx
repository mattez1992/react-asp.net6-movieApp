import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { coordinateDTO } from '../../models/map/coordinateDTO.model';
import { movieDTO } from '../../models/movies/movies.model';
import { urlMovies, urlRatings } from '../../utils/endpoints';
import Map from "../../utils/Map";
import Loading from '../../utils/Loading';
import { randomBytes, randomInt } from 'crypto';
import Ratings from '../../utils/Ratings';
import Swal from 'sweetalert2';

export default function MovieDetails() {
    const { id }: any = useParams();
    const [movie, setMovie] = useState<movieDTO>();

    useEffect(() => {

        loadData();
    }, [id]);
    function loadData() {
        axios.get(`${urlMovies}/${id}`)
            .then((response: AxiosResponse<movieDTO>) => {
                response.data.releaseDate = new Date(response.data.releaseDate);
                setMovie(response.data);
                console.log(response.data)
            })
    }
    function transformCoordinates(): coordinateDTO[] {
        if (movie?.movieTheaters) {
            const coordinates = movie.movieTheaters.map(theater => {
                return { lat: theater.latitude, lng: theater.longitude, name: theater.name } as coordinateDTO;
            });
            return coordinates;
        }
        return [];
    }

    function generateEmbeddedVideoURL(trailer: string): string {
        if (!trailer) {
            return "";
        }
        let videoId = trailer.split("v=")[1];
        const ampersandPos = videoId.indexOf("&");
        if (ampersandPos !== -1) {
            videoId = videoId.substring(0, ampersandPos);
        }
        return `https://www.youtube.com/embed/${videoId}`;
    }
    function handleUserRate(rate: number) {
        axios.post(urlRatings, { rating: rate, movieId: id })
            .then(() => {
                Swal.fire({ icon: "success", title: "Rating recieved" });
            }).then(() => loadData());

    }
    return (
        <>
            {movie ?
                <div>
                    <h2>{movie.title} ({movie.releaseDate.getFullYear()})</h2>
                    {movie.genres?.map(genre =>
                        <Link key={genre.id + Math.random()} className="btn btn-primary btn-sm rounded-pill me-1"
                            to={`/movies/filter?genreId=${genre.id}`}>{genre.name}</Link>
                    )} | {movie.releaseDate.toDateString()}
                    | Your vote: <Ratings maxValue={5} selectedValue={movie.userRate} onChange={handleUserRate} /> Average Rating: {movie.averageRating};

                    <div className="d-flex mt-1">
                        <span className="d-inline-block me-1">
                            <img src={movie.poster} alt="poster" style={{ width: "225px", height: "315px" }} />
                        </span>

                        {movie.trailer ?
                            <div>
                                <iframe

                                    title='youtube-trailer'
                                    src={generateEmbeddedVideoURL(movie.trailer)}
                                    frameBorder={0}
                                    width="560"
                                    height="315"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                                    allowFullScreen
                                ></iframe>
                            </div> : null
                        }
                    </div>
                    {movie.summary ?
                        <div className='mt-2'>
                            <h3>Summary</h3>
                            <div>
                                <ReactMarkdown>{movie.summary}</ReactMarkdown>
                            </div>
                        </div> : null}

                    {movie.moviesActors && movie.moviesActors.length > 0 ?
                        <div className='mt-2'>
                            <h3>Actors</h3>
                            <div className="d-flex flex-column">
                                {movie.moviesActors?.map(actor =>
                                    <div key={Math.random()} className='mb-1'>
                                        <img src={actor.picture} style={{ width: "50px", verticalAlign: "middle" }} alt="pic" />
                                        <span className="d-inline-block ms-1" style={{ width: "200px" }}>
                                            {actor.name}
                                        </span>
                                        <span className="d-inline-block" style={{ width: "45px" }}>---</span>
                                        <span>{actor.movieCharacter}</span>
                                    </div>
                                )}
                            </div>
                        </div> : null}

                    {movie.movieTheaters && movie.movieTheaters.length > 0 ?
                        <div>
                            <h2>Showing on</h2>
                            <Map coordinates={transformCoordinates()} readonly={true} />
                        </div> : null
                    }
                </div> :
                <Loading />}
        </>
    )
}
