import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from './Menu';

const Header = ({ paths }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const createLinks = (
    <ul>
      <li>Kategori 1</li>
      <li>Kategori 2</li>
    </ul>
  );

  const detectLanguage = 'TR';

  return (
    <header className="header container-fluid home-header">
      <div className="mainLogo">
        <a href="/" className="logo-text">
          TUFFEX
        </a>
      </div>
      <div className="mainMenu">{createLinks}</div>
      <div className="headerUtil">
        <span className="headerLanguage" onClick={() => changeLanguage(detectLanguage)}>
          {t('choose language')}
        </span>
        <span className="headerSearch" />
        <Menu paths={paths} />
      </div>
    </header>
  );
};

export default Header;
