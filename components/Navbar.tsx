import Link from 'next/link'

const Navbar = () => {
   return (
      <div className="w-full h-20 bg-black text-white flex items-center justify-between px-5 sticky top-0 left-0">
         <Link href='/'>
            <a className="text-2xl font-bold uppercase">
               Party Invite
            </a>
         </Link>
      </div>
   )
}

export default Navbar