import { faHome, faUtensils, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Receitas",
      path: "/recipes",
      icon: faUtensils
    },
    {
      name: "Sobre o chefe",
      path: "/about",
      icon: faUser
    }
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to='/' className="logo">
          <img src="/img/logo.svg" alt="logo chapeu" />
        </Link>
        <div className="nav-links">
          { links.map(link => (
            <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
          ))}
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
    </>
  )
}
