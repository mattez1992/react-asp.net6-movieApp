import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import GenreForm from "../../forms/genre/GenreForm";
import { genreCreationDTO } from "../../models/genres/genres.model";
import DisplayErrors from "../../utils/DisplayErrors";
import { urlGenres } from "../../utils/endpoints";

export default function Creategenre() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);
    async function create(genre: genreCreationDTO) {
        try {
            await axios.post(urlGenres, genre);
            history.push("/genres");
        } catch (error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }
    return (
        <>
            <DisplayErrors errors={errors} />
            <h3>Create Genre</h3>
            <GenreForm model={{ name: "" }}
                onSubmit={async newGenre => {
                    await create(newGenre)
                }}
            />
        </>
    )
}
