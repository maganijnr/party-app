import {FC} from 'react'
import {IState as IProps} from '../pages/index'
import styled from 'styled-components'
import ListCard from './ListCard'
import {People as IPeople} from '../typeInterfaces'

const ListBody = styled.div`
   box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
   -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`

export interface IState {
   people :IPeople[]
}

const InviteList:FC<IState> = ({people}) => {
   return (
      <ListBody className="h-full w-full flex items-center flex-col bg-white">
         <ListCard people={people} />
      </ListBody>
   )
}

export default InviteList