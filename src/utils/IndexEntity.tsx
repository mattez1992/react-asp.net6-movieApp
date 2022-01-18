import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { Link } from 'react-router-dom';
import Button from './Button';
import customConfirm from './customConfirm';
import DisplayErrors from './DisplayErrors';
import DisplayGenericList from './DisplayGenericList';
import Pagination from './Pagination';
import SelectRecordsPerPage from './SelectRecordsPerPage';

export default function IndexEntity<T>(props: IndexProps<T>) {

    const [entities, setEntity] = useState<T[]>([]);
    const [error, setError] = useState<string[]>();
    const [totalAmountOfPages, setTOtalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    // set pages and recordsPerPage as dependency so it reruns when they change.
    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, recordsPerPage])

    function loadData() {
        axios.get(props.pagnationURL, {
            params: { page, recordsPerPage }
        })
            .then((response: AxiosResponse<T[]>) => {
                const totalAmountOfRecords = parseInt(response.headers["totalamountofrecords"], 10);
                console.log(totalAmountOfRecords)
                setTOtalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setEntity(response.data)
            })
    }

    async function deleteEntity(id: number) {
        try {
            await axios.delete(`${props.baseURL}/${id}`);
            loadData();
        } catch (error) {
            if (error && error.response) {
                setError(error.response.data);
            }
        }

    }
    const buttons = (id: number) => <>
        <Link className='btn btn-success' to={`${props.editURL}/${id}`}>Edit</Link>
        <Button className='btn btn-danger ms-1' onClick={() => customConfirm(() => deleteEntity(id))}>Delete</Button>
    </>
    return (
        <>
            <h3>{props.entityName}</h3>
            <DisplayErrors errors={error} />
            {props.createURL ? <Link className='my-2 btn btn-primary' to={props.createURL}>Create {props.entityName}</Link> : null}


            <SelectRecordsPerPage onChange={(amountOfRecords) => {
                setPage(1);
                setRecordsPerPage(amountOfRecords)
            }} />

            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPage(newPage)} />

            <DisplayGenericList list={entities}>
                <table className='table table-striped'>
                    {props.children(entities!, buttons)}

                </table>
            </DisplayGenericList>
        </>
    )
}
interface IndexProps<T> {
    entityName?: string;
    pagnationURL: string;
    baseURL: string;
    createURL?: string;
    editURL: string;
    children(entites: T[], buttons: (id: number) => ReactElement): ReactElement;
}