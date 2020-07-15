import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { certificationBreakPoints } from '../utils/functions';

const CategoryPage = () => {
  const myArrow = () => <span />;

  return (
    <div className="category-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <PageTitle title="Dinamik Kategori İsmi" />
            <h1 className="content-h1-title">Alt Kategori Adı</h1>
            <div className="category-slider">
              <Carousel breakPoints={certificationBreakPoints} renderArrow={myArrow}>
                <div className="carousel-item">
                  <img src="/images/kategori.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-text">12 Adet</div>
                    <div className="item-bottom-button">
                      <Link to="/" className="btn btn-outline">
                        DETAYLAR
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/kategori.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-text">12 Adet</div>
                    <div className="item-bottom-button">
                      <Link to="/" className="btn btn-outline">
                        DETAYLAR
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/kategori.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-text">12 Adet</div>
                    <div className="item-bottom-button">
                      <Link to="/" className="btn btn-outline">
                        DETAYLAR
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/kategori.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-text">12 Adet</div>
                    <div className="item-bottom-button">
                      <Link to="/" className="btn btn-outline">
                        DETAYLAR
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/kategori.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-text">12 Adet</div>
                    <div className="item-bottom-button">
                      <Link to="/" className="btn btn-outline">
                        DETAYLAR
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End slider item */}
                <div className="carousel-item">
                  <img src="/images/kategori.png" alt="" />
                  <div className="item-bottom">
                    <div className="item-bottom-text">12 Adet</div>
                    <div className="item-bottom-button">
                      <Link to="/" className="btn btn-outline">
                        DETAYLAR
                      </Link>
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

export default CategoryPage;
