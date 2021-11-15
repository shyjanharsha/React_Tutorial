import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>name is {person.name} her id num is {person.id} and him age is {person.age}</h2>
        </div>
    )
}

export default Person
