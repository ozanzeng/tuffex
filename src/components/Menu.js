import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ paths }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);

  const createLinks = (
    <ul>
      {paths.map((item, key) => (
        <li key={key}>
          <NavLink
            exact
            activeClassName="menu-active-link"
            to={item.layout + item.path}
            key={key}
            onClick={handleMenuToggle}
            className="menu-link"
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <button type="button" className="headerMenu" label=" " onClick={handleMenuToggle} />
      <div className={`sidebar-wraper ${menuToggle === false ? 'menu-hide' : 'menu-show'}`}>
        <button type="button" className="icon-close" label=" " onClick={handleMenuToggle} />
        {createLinks}
        <div className="social-media">
          <ul>
            <li>
              <NavLink to="//instagram.com">
                <span className="icon-instagram" />
              </NavLink>
            </li>
            <li>
              <NavLink to="//facebook.com">
                <span className="icon-facebook" />
              </NavLink>
            </li>
            <li>
              <NavLink to="//twitter.com">
                <span className="icon-twitter" />
              </NavLink>
            </li>
            <li>
              <NavLink to="//youtube.com">
                <span className="icon-youtube" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${menuToggle ? 'shadow-active' : 'shadow-passive'} shadow`}
        onClick={handleMenuToggle}
      />
    </>
  );
};

export default Menu;
