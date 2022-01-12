import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { genreDTO } from '../../models/genres/genres.model'
import Button from '../../utils/Button'
import customConfirm from '../../utils/customConfirm'
import DisplayErrors from '../../utils/DisplayErrors'
import DisplayGenericList from '../../utils/DisplayGenericList'
import { urlGenrePagnation, urlGenres } from '../../utils/endpoints'
import Pagination from '../../utils/Pagination'
import SelectRecordsPerPage from '../../utils/SelectRecordsPerPage'
export default function IndexGenres() {
    const [genres, setGenres] = useState<genreDTO[]>([]);
    const [error, setError] = useState<string[]>();
    const [totalAmountOfPages, setTOtalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    // set pages and recordsPerPage as dependency so it reruns when they change.
    useEffect(() => {
        loadData();
        console.log(totalAmountOfPages)
        console.log(recordsPerPage)

        console.log(page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, recordsPerPage])

    function loadData() {
        axios.get(urlGenrePagnation, {
            params: { page, recordsPerPage }
        })
            .then((response: AxiosResponse<genreDTO[]>) => {
                const totalAmountOfRecords = parseInt(response.headers["totalamountofrecords"], 10);
                console.log(totalAmountOfRecords)
                setTOtalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setGenres(response.data)
            })
    }

    async function deletegenre(id: number) {
        try {
            await axios.delete(`${urlGenres}/${id}`);
            loadData();
        } catch (error) {
            if (error && error.response) {
                setError(error.response.data);
            }
        }

    }

    return (
        <>
            <h3>Genres</h3>
            <DisplayErrors errors={error} />
            <Link className='my-2 btn btn-primary' to="/genres/create">Create Genre</Link>

            <SelectRecordsPerPage onChange={(amountOfRecords) => {
                setPage(1);
                setRecordsPerPage(amountOfRecords)
            }} />

            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPage(newPage)} />         <DisplayGenericList list={genres}>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map(genre => <tr key={genre.id}>
                            <td>
                                <Link className='btn btn-success' to={`/genres/edit/${genre.id}`}>Edit</Link>
                                <Button className='btn btn-danger ms-1' onClick={() => customConfirm(() => deletegenre(genre.id))}>Delete</Button>
                            </td>
                            <td>
                                {genre.name}
                            </td>
                        </tr>)}
                    </tbody>

                </table>
            </DisplayGenericList>
        </>
    )
}
