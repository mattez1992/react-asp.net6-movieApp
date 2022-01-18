import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'
import { userDTO } from '../../models/auth/auth.models'
import Button from '../../utils/Button'
import customConfirm from '../../utils/customConfirm'
import { urlAccounts } from '../../utils/endpoints'
import IndexEntity from '../../utils/IndexEntity'

export default function IndexUsers() {
    async function makeAdmin(userId: string) {
        await callAdminAPI(`${urlAccounts}/createAdmin`, userId);
    }
    async function removeAdmin(userId: string) {
        await callAdminAPI(`${urlAccounts}/removeAdmin`, userId);
    }
    async function callAdminAPI(url: string, id: string) {
        await axios.post(url, JSON.stringify(id), {
            headers: { "Content-Type": "application/json" }
        });
        Swal.fire({
            title: "Success",
            text: "Operation finished correctly",
            icon: "success"
        })
    }
    return (
        <IndexEntity<userDTO>
            entityName="Users"
            baseURL={`${urlAccounts}`}
            pagnationURL={`${urlAccounts}`}
            editURL={`${urlAccounts}`}
        >
            {users => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user =>
                        <tr key={user.id}>
                            <td>
                                <Button
                                    onClick={() => customConfirm(() => makeAdmin(user.id), `Do you want to make ${user.email} an Admin`, "Do it")} >Make Admin</Button>
                                <Button className='btn btn-danger ms-1'
                                    onClick={() => customConfirm(() => removeAdmin(user.id), `Do you want to revoke admin rights of ${user.email}`, "Remove rights")} >Remove Admin</Button>
                            </td>
                            <td>{user.email}</td>
                        </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}
