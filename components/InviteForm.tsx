import {useState, FC} from 'react'
import {IState as IProps} from '../pages/index'
import {Form as IForm, People as IPeople} from '../typeInterfaces'

interface IState {
   people :IPeople[]
   setPeople: React.Dispatch<React.SetStateAction<IPeople[]>>
}

const InviteForm = ({people, setPeople}: IState) => {
   const [form, setForm] = useState<IForm>({
      name:"",
      age: 0,
      note:""
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>):void => {
      const {name, value} = e.target
      setForm({
         ...form, 
         [name]: value
      })
   }

   const handleClick = ():void =>{
      if(!form.name || !form.age || !form.note){
         alert("input a invite details")
      } else {
         setPeople([...people, {
            name: form.name,
            age: form.age,
            note: form.note
         }])
      }

      setForm({
         name:"",
         age: 0,
         note:""
      })
   }

   return (
      <div className="w-96 bg-white ml-10">
         <div className="flex flex-col w-60 mx-auto my-2">
            <label htmlFor="Name">Name</label>
            <input
               name="name"
               type="text"
               className="border-2 border-gray-400 w-full px-2 py-1"
               placeholder='Full Name'
               value={form.name}
               onChange={handleChange}
            />
         </div>
         <div className="flex flex-col w-60 mx-auto my-2">
            <label htmlFor="age">Age</label>
            <input
               name="age"
               type="number"
               className="border-2 border-gray-400 w-full px-2 py-1"
               placeholder='Age'
               value={form.age}
               onChange={handleChange}
            />
         </div>
         {/* <div className="flex flex-col w-60 mx-auto my-2">
            <label htmlFor="image">Image</label>
            <input
               name="image"
               type="file"
               className="border-2 border-gray-400 w-full px-2 py-1"
               value={form.image}
               onChange={handleChange}
            />
         </div> */}
         <div className="flex flex-col w-60 mx-auto my-2">
            <label htmlFor="image">Note</label>
            <textarea
               name="note"
               className="border-2 border-gray-400 w-full px-2 py-1"
               value={form.note}
               onChange={handleChange}
            />
         </div>
         <div className="flex flex-col w-60 mx-auto my-5">
            <button 
               onClick={handleClick}
               className="w-full py-2 px-4 bg-gold text-lg font-semibold cursor-pointer mx-auto">Send Invite</button>
         </div>
      </div>
   )
}

export default InviteForm