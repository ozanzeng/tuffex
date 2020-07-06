import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-up-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 contact-article">
              <PageTitle title="Contact Us" />
              <h1 className="content-h1-title">Ut pretium tempor</h1>
              <p className="content-p-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
                Ut eget imperdiet neque. In volutpat ante semper diam molestie.
              </p>
              <p className="content-p-title">Merkez Ofis ve Showroom</p>
              <p className="content-p-text">
                İSTOÇ 17. Ada No:14-24 Bağcılar İSTANBUL
                <br />
                <span className="text-pink">T</span> +90 212 659 10 48 (pbx)
                <span className="text-pink">F</span> +90 212 659 68 00
              </p>
              <p className="content-p-title">Fabrika</p>
              <p className="content-p-text">
                Osmangazi Mahallesi 3143. Sokak No:5 Esenyurt İSTANBUL
                <br />
                <span className="text-pink">T</span> +90 212 659 68 30
                <span className="text-pink">F</span> +90 212 659 68 00
                <br />
                <br />
                info@tuffex.com
              </p>
            </div>
            <div className="contact-gmap" />
          </div>
        </div>
      </div>
      {/*  ./up-content */}
      <div className="contact-bottom-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 company-image" />
            <div className="col-md-8 bg-pink">
              <div className="contact-form">
                <div className="row contact-form-header">
                  <div className="col-sm-6">
                    <span className="contact-form-title">{t('Contact Form')}</span>
                  </div>
                  <div className="col-sm-6">
                    <button type="submit" className="btn btn-form">
                      {t('SEND')}
                    </button>
                  </div>
                </div>
                <div className="row contact-form-body">
                  <div className="col-md-4">
                    <div className="contact-form-input">
                      <label htmlFor={t('Full Name')}>{t('Full Name')}</label>
                      <input name={t('Full Name')} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-form-input">
                      <label htmlFor={t('Phone')}>{t('Phone')}</label>
                      <input name={t('Phone')} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-form-input">
                      <label htmlFor={t('E-Mail Adress')}>{t('E-Mail Adress')}</label>
                      <input name={t('E-Mail Adress')} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-form-input">
                      <label htmlFor={t('Message')}>{t('Message')}</label>
                      <textarea rows="4" name={t('Message')} res />
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

export default ContactPage;
