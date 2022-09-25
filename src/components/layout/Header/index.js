import classnames from "./index.module.scss";
import links from "data/links";
import vlad from "images/vlad.png";
import cl from "classnames";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialNetworks from "data/social";
export default function Header() {
  return (
    <header className={classnames.main}>
      <div className={classnames.logo}>
        <img src={vlad} alt="Влад" />
      </div>
      <ul className={classnames.links}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
            exact={link.path === '/'}
              className={(isActive) =>{
              
                return cl({
                  [classnames.link]: true,
                  [classnames.link__active]: isActive ? classnames.link__active : false,
                })
              }}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={classnames.social}>
      {socialNetworks.map((item,index) => (
          <a href={item.url} key={index}>
            <FontAwesomeIcon icon={item.icon} size="xl"/>
          </a>
        ))}</div>
    </header>
  );
}
