
export default function Person({ searchedPerson }) {
    return (
        <div className="person">
            <p>{`Name: ${searchedPerson.name}`}</p>
            <p>{`Age: ${searchedPerson.age}`}</p>
            <p>{`Eye Color: ${searchedPerson.eye_color}`}</p>
            <p>{`Hair Color: ${searchedPerson.hair_color}`}</p>
        </div>
    )
}
