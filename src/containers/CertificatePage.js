import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import PageTitle from '../components/PageTitle';
import { certificationBreakPoints } from '../utils/functions';

const CertificatePage = () => {
  const myArrow = () => <span />;

  return (
    <div className="certification-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <PageTitle title="Sertifikalar" />
            <div className="certification-slider">
              <Carousel breakPoints={certificationBreakPoints} renderArrow={myArrow}>
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                </div>
                {/* End slider item */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
