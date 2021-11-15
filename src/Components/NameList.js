import React from 'react'
import Person from './Person'

// function NameList() {
//     const names = ['Shyjan', 'AAAAAA', 'BBBBBB', 'CCCCCCCC']
//     return (
//         <div>
//             {names.map((name) =>{
//                 return <h2>{name}</h2>
//             })}
//         </div>
//     )
// }

// export default NameList

// function NameList() {
//     const names = ['Shyjan', 'AAAAAA', 'BBBBBB', 'CCCCCCCC']
//     const nameList =  names.map((name) =>{
//                         return <h2>{name}</h2>
//     })
//     return (
//         <div>
//             {nameList}
//         </div>
//     )
// }

// export default NameList

function NameList() {
    const persons = [{
        name: "shyjan",
        id: 1,
        age: 23
    },
    {
        name: "AAAAA",
        id: 2,
        age: 24
    },
    {
        name: "BBBBBB",
        id: 3,
        age: 25
    },
    {
        name: "CCCCCC",
        id: 4,
        age: 26
    }]
    // In the arrow function { return  <Person person = {person}/>}if arrow function no use the carlybraces the should return only one
    const personList =  persons.map((person) =>
        // console.log(person)
        <Person key = {person.id} person = {person}/>
    )
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
