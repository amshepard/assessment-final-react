export default function Movie ({ movieSelection }){
    return (
        <div>
            <h2><span>Title: </span>{movieSelection.title}</h2>
            <p><span>Release Date:</span>{movieSelection.release_date}</p>
            <p><span>Description: </span>{movieSelection.description}</p>

        </div>
    )
}