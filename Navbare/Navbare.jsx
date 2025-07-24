import Button from '@mui/material/Button';
import TokenIcon from '@mui/icons-material/Token';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
function Navbar() {
  const [navb, setNavb] = useState(false);

  const handleNav = () => setNavb(!navb);

  return (
    <div className="flex p-4 lg:justify-around justify-between relative lg:items-center items-start shadow-xl">
      <h1 className="capitalize font-bold flex justify-center items-center xl:text-xl text-md">
        <span style={{ color: "#0184a0" }}>
          <TokenIcon /> codeOne
        </span>{' '}
        technologies
      </h1>

      <div className={`flex lg:flex-row flex-col  lg:gap-0 gap-4 justify-between items-center w-1/2 ${navb ? "newnavbar" : "navbar"}`}>
        {navb && (
          <CloseIcon
            className="closeNav lg:hidden block self-end mb-2"
            onClick={handleNav}
          />
        )}

        <ul className="flex lg:flex-row flex-col gap-4">
          <li className="font-bold capitalize text-[#0184a0] hover:text-[#b4d8e4] transition-colors cursor-pointer"><Link to="/">Home</Link></li>
          <li className="font-bold capitalize text-[#0184a0] hover:text-[#b4d8e4] transition-colors cursor-pointer">About</li>
          <li className="font-bold capitalize text-[#0184a0] hover:text-[#b4d8e4] transition-colors cursor-pointer">Projects</li>
          <li className="font-bold capitalize text-[#0184a0] hover:text-[#b4d8e4] transition-colors cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-4 xl:flex-row flex-col xl:ml-8">
          <Button variant="contained" style={{ background: "#fff", color: "#0184A0" ,borderRadius:"20PX",width:"180PX"}}><Link to="/Sign-up">sign up</Link></Button>
          <Button variant="contained" style={{ background: "#0184A0",borderRadius:"20PX",width:"180PX" }}><Link to='/demo'>Look a Demo <ArrowOutwardIcon/></Link></Button>
        </div>
      </div>

      {!navb && (
        <MenuIcon
          className="menuIcon "
          onClick={handleNav}
        />
      )}
    </div>
  );
}

export default Navbar;