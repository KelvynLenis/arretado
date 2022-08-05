import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type linkProps = {
  name: string,
  path: string,
  icon: IconProp
}

type sidebarProps = {
  links: linkProps[],
  close: () => void
}

export default function Sidebar({links, close}: sidebarProps) {
  const location = useLocation();
  
  return (
    <div className='sidebar' onClick={close}>
      { links.map(link => (
        <Link className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} to={link.path} key={link.name}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  )
}
