import { userEffect, useRef, useEffect } from "react";
import logo from "../../src/assets/images/logo.png";
import userImg from "../../src/assets/images/avatar-icon.png";
import {BiMenu} from "react-icons/bi"
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    Path: "/home",
    display: "Home",
  },
  {
    Path: "/doctors",
    display: "Find a doctor",
  },

  {
    Path: "/services",
    display: "Services",
  },

  {
    Path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = ()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })        

    }

    useEffect(()=>{
        handleStickyHeader()

        return ()=> window.removeEventListener('scroll',handleStickyHeader)
    })

    const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*========= logo ============ */}
          <div>
            <img src={logo} alt="" />
          </div>

        {/*========= Menu  ============ */}
          <div className="navigation" ref={menuRef}  onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((Link, index) => (
                <li key={index}>
                  <NavLink
                    to={Link.Path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {Link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        {/*========= nav right ============ */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userImg} alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
                    justify-center rounded-[50px]"
              >
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
               <BiMenu className="w-6 h-6 cursor-pointer" ></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
