import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ paths }) => {
  const createLinks = (
    <ul>
      {paths.map((item, key) => (
        <li key={key}>
          <NavLink to={item.layout + item.path} key={key}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="header container-fluid">
        <div className="mainLogo">Logo</div>
        <div className="mainMenu">{createLinks}</div>
        <div className="headerUtil">
          <span className="headerLanguage">EN</span>
          <span className="headerSearch">
            <i className="icon icon-search" />
          </span>
          <span className="headerMenu">
            <i className="icon icon-menu" />
          </span>
        </div>
    </header>
  );
};

export default Header;
