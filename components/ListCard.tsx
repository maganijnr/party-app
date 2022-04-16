import {FC} from 'react'
import {People as IPeople} from '../typeInterfaces'


interface IState {
  people : IPeople[];
}

const ListCard:FC<IState> = ({people}) => {
  return (
    <ul>
      {
        people.map((person) => (
          <li key={person.name} className="w-full flex my-5 items-center h-20">
            <h2 className="font-bold text-xl ml-5 mr-5">{person.name}</h2>
            <h2 className="font-semibold text-base ml-5 mr-5">{person.age} years old</h2>
            <h2 className="font-semibold text-base ml-5 mr-5">{person.note}</h2>
          </li>
        ))
      }
    </ul>
  )
}

export default ListCard