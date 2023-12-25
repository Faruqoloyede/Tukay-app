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
        <img src={toggle ? close : menu} className="w-[35px] h-[35px]" onClick={() => setToggle ((prev)=> !prev)} />


          <div className={`${toggle ? 'flex' : 'hidden'}`}>
          <ul className="list-none ">
          {navlinks.map((link)=>(
            <li key={link.id} className="font-space text-[16px] font-medium cursor-pointer text-grey mr-10">
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
         ))}
      </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
