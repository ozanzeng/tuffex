import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="human-resource-up-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="human-resource-article">
                <PageTitle title="Hakkımızda" />
                <h1 className="content-h1-title">Gelişmiş İnavasyon</h1>
                <p className="content-p-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium
                  tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie.
                </p>
              </div>
            </div>
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
                <p className="strong-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium
                  tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie.
                </p>
                <p className="normal-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium
                  tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam
                  erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus
                  ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus
                  mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula
                  rhoncus mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam
                  molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  ./down-content */}
    </>
  );
};

export default AboutUsPage;
