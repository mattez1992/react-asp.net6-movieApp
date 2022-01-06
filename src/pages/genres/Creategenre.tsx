import GenreForm from "../../forms/genre/GenreForm";

export default function Creategenre() {
    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{ name: "" }}
                onSubmit={async value => {
                    // when the form is posted
                    await new Promise(r => setTimeout(r, 2000));
                    console.log(value)
                }}
            />
        </>
    )
}
