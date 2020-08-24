import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel';
import Menu from './Menu';

const Header = ({ paths, homeHeader }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 765, itemsToShow: 2 },
    { width: 850, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const createLinks = (
    <Carousel breakPoints={breakPoints}>
      <div className="menuLink">Kategori 1</div>
      <div className="menuLink">Kategori 2</div>
      <div className="menuLink">Kategori 3</div>
      <div className="menuLink">Kategori 4</div>
      <div className="menuLink">Kategori 5</div>
      <div className="menuLink">Kategori 6</div>
      <div className="menuLink">Kategori 7</div>
      <div className="menuLink">Kategori 8</div>
      <div className="menuLink">Kategori 9</div>
      <div className="menuLink">Kategori 10</div>
    </Carousel>
  );

  const detectLanguage = 'TR';

  return (
    <header className={`header container-fluid ${homeHeader === true && 'home-header'}`}>
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
