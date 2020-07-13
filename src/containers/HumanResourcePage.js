import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const HumanResourcePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="human-resource-up-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="human-resource-article">
                <PageTitle title="Human Resource" />
                <h1 className="content-h1-title">Hemen Başvur</h1>
                <p className="content-p-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium
                  tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie.
                </p>
                <div className="float-right">
                  <button type="button" className="btn btn-outline-pink">
                    {t('SEND CV')}
                  </button>
                </div>
              </div>
              <div className="human-resource-bg" />
            </div>
          </div>
        </div>
      </div>
      {/*  ./up-content */}
      <div className="human-resource-bottom-content bg-pink">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="human-resource-form">
                <div className="human-resource-form-header">
                  <span className="human-resource-form-title">Açık Pozisyonlar</span>
                </div>
                <div className="human-resource-form-body">
                  <div className="column-wrapper">
                    <div className="column-title">İlan Tarihi</div>
                    <div className="column-content">30 Aralık 2019</div>
                    <div className="column-content">30 Aralık 2019</div>
                    <div className="column-content">30 Aralık 2019</div>
                    <div className="column-content">30 Aralık 2019</div>
                  </div>
                  <div className="column-wrapper">
                    <div className="column-title">Referans No</div>
                    <div className="column-content">TF-12345</div>
                    <div className="column-content">TF-12345</div>
                    <div className="column-content">TF-12345</div>
                    <div className="column-content">TF-12345</div>
                  </div>
                  <div className="column-wrapper">
                    <div className="column-title">Pozisyon</div>
                    <div className="column-content">Pretium Tempor Imperdiet</div>
                    <div className="column-content">Pretium Tempor Imperdiet</div>
                    <div className="column-content">Pretium Tempor Imperdiet</div>
                    <div className="column-content">Pretium Tempor Imperdiet</div>
                  </div>
                  <div className="column-wrapper">
                    <div className="column-title">Şehir</div>
                    <div className="column-content">İstanbul</div>
                    <div className="column-content">İstanbul</div>
                    <div className="column-content">İstanbul</div>
                    <div className="column-content">İstanbul</div>
                  </div>
                  <div className="column-wrapper">
                    <div className="column-title"> </div>
                    <div className="column-content">
                      <Link to="/">></Link>
                    </div>
                    <div className="column-content">
                      <Link to="/">></Link>
                    </div>
                    <div className="column-content">
                      <Link to="/">></Link>
                    </div>
                    <div className="column-content">
                      <Link to="/">></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  ./down-content */}
    </>
  );
};

export default HumanResourcePage;
