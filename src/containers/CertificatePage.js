import React from 'react';
import Carousel from 'react-elastic-carousel';
import BigImage from '../components/BigImage';
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
                  <div className="item-bottom">
                    <div className="item-bottom-button">
                      <BigImage img="/images/sertifika.png" />
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-button">
                      <BigImage img="/images/sertifika.png" />
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-button">
                      <BigImage img="/images/sertifika.png" />
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-button">
                      <BigImage img="/images/sertifika.png" />
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-button">
                      <BigImage img="/images/sertifika.png" />
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/sertifika.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-button">
                      <BigImage img="/images/sertifika.png" />
                    </div>
                  </div>
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
