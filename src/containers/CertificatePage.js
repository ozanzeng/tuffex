import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PageTitle from '../components/PageTitle';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CertificatePage = () => {
  return (
    <>
      <Carousel Carousel breakPoints={breakPoints}>
        <div className="carousel-item">1</div>
        <div className="carousel-item">2</div>
        <div className="carousel-item">3</div>
        <div className="carousel-item">4</div>
        <div className="carousel-item">5</div>
        <div className="carousel-item">6</div>
      </Carousel>
      {/* <div className="certification-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <PageTitle title="Sertifikalar" />
              {/* <Carousel {...getConfigurableProps()}>
                <div maxWidth="25%">
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
      </div> */}
    </>
  );
};

export default CertificatePage;
