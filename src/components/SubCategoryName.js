import React from 'react';
import { useTranslation } from 'react-i18next';

const PageTitle = title => {
  const { t } = useTranslation();
  const searchRegExp = /"/g;
  const pageTitleText = t(JSON.stringify(title[Object.keys(title)[0]]).replace(searchRegExp, ''));
  return (
    <div className="row">
      <div className="col-xs-12">
        <h2 className="sub-page-title">{pageTitleText}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
