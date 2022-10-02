import React, {useState} from 'react';

const Navbar = () => {
  let Links = [
    {name: "HOME", link:"/"},
    {name: "SRVICE", link:"/"},
    {name: "PRODUCT", link:"/"},
    {name: "PROJECT", link:"/"},
    {name: "ABOUT US", link:"/"},
    {name: "CONTACT", link:"/"},
  ]
  let [open, setOpen] = useState(false)
  return(
    <div className='shadow-mf w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name='logo-ionic'/>
            Designer
          </span>
        </div>
        
        <div  onClick={()=>setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 
            absolute md:static bg-white md:z-auto 
            z-[-1] left-0 w-full md:w-auto md:pl-0 
            pl-9 transition-all duration-500 ease-in ${open? 'top-16':'top-[-490px]'} md:opacity-100`}
        >
          {
            Links.map((Link)=>(
              <li key={Link.name} className='md:ml-8 lg:text-xl font-medium md:my-0 my-7'>
                <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
              </li>
            )) 
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar;