import logo from "../assets/logo.png"
import { navlinks } from "../constants"
import Button from "./Button"
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex items-center justify-between py-2'>
      <img src={logo} />

      <ul className="list-none sm:flex hidden items-center justify-center flex-1">
        {navlinks.map((link)=>(
          <li key={link.id} className="font-space text-[16px] font-medium cursor-pointer text-grey mr-10">
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden sm:block">
        <Button label="Login" styles="bg-primary" color= "white" />
        <Button label="Sign up" color="#00545F" />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={menu} className="w-[35px] h-[35px]" onClick={()=>setToggle(true)} />


        <div className={`${toggle ? 'top-0' : 'hidden'} flex flex-col items-center absolute -top-[100% bg-secondary w-[100%] right-0 p-6 sidebar`}>
          <img src={close} className="w-[35px] h-[35px] absolute right-5" onClick={()=>setToggle(false)}  />
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navlinks.map((link)=>(
              <li key={link.id} className="font-space text-[18px] font-semibold cursor-pointer text-grey mr-10 m-4">
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            <Button label="Login" styles="bg-primary" color= "white" />
            <Button label="Sign up" color="#00545F" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
