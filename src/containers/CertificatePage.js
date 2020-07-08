import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PageTitle from '../components/PageTitle';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CertificatePage = () => {
  const getConfigurableProps = () => ({
    showArrows: false,
    showThumbs: false,
  });

  return (
    <>
      <div className="certification-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <PageTitle title="Sertifikalar" />
              <Carousel {...getConfigurableProps()}>
                <div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="certificate">
                        <img src="/images/sertifika.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="certificate">
                        <img src="/images/sertifika.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="certificate">
                        <img src="/images/sertifika.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="certificate">
                        <img src="/images/sertifika.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="certificate">
                        <img src="/images/sertifika.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="certificate">
                        <img src="/images/sertifika.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
