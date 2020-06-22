import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';

const HumanResourcePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="human-resource-up-content">
        <PageTitle title="Human Resource" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 human-resource-article">
              <h1 className="content-h1-title">Hemen Başvur</h1>
              <p className="content-p-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
                Ut eget imperdiet neque. In volutpat ante semper diam molestie.
              </p>
              <div className="float-right">
                <button type="button" className="btn btn-outline-pink">
                  {t('SEND CV')}
                </button>
              </div>
            </div>
            <div className="col-md-8">a</div>
          </div>
        </div>
      </div>
      {/*  ./up-content */}
      <div className="human-resource-bottom-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-pink">
              <div className="human-resource-form">
                <div className="row human-resource-form-header">
                  <div className="col-sm-6">
                    <span className="human-resource-form-title">Açık Pozisyonlar</span>
                  </div>
                </div>
                <div className="row human-resource-form-body">
                  <div className="col-md-12">
                    <table>
                      <tr>
                        <td>asdasd</td>
                      </tr>
                    </table>
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
