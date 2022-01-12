import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { useHistory, useParams } from 'react-router-dom';
import DisplayErrors from './DisplayErrors';
import Loading from './Loading';

export default function EditEntity<CreateDTO, ReadDTO>(props: editEntityProps<CreateDTO, ReadDTO>) {

    const { id }: any = useParams();
    const [entity, setEntity] = useState<CreateDTO>();
    const [errors, setErrors] = useState<string[]>();
    const history = useHistory();
    useEffect(() => {
        axios.get(`${props.apiURL}/${id}`)
            .then((resp: AxiosResponse<ReadDTO>) => {
                setEntity(props.transformReadToCreate(resp.data));
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    async function edit(entityToEdit: CreateDTO) {
        try {
            await axios.put(`${props.apiURL}/${id}`, entityToEdit)
            history.push(props.historyURL);
        }
        catch (err) {
            if (err && err.response) {
                setErrors(err.response.data);
            }
        }
    }

    return (
        <div>
            <h3>Edit {props.entityName}</h3>
            <DisplayErrors errors={errors} />
            {entity ? props.children(entity, edit) :
                <Loading />}
        </div>
    )
}
interface editEntityProps<CreateDTO, ReadDTO> {
    entityName: string,
    apiURL: string,
    historyURL: string,
    transformReadToCreate(entity: ReadDTO): CreateDTO,
    children(entity: CreateDTO, edit: (entity: CreateDTO) => void): ReactElement,

}
EditEntity.defaultProps = {
    transformReadToCreate: (entity: any) => entity,
}