import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CategoryPage = () => {
  const getConfigurableProps = () => ({
    showArrows: false,
    showThumbs: false,
  });

  return (
    <>
      <div className="category-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <PageTitle title="Saklama ve Düzenleme" />
              <Carousel {...getConfigurableProps()}>
                <div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="/kategori-urunleri">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="/kategori-urunleri">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="/kategori-urunleri">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="/kategori-urunleri">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="/kategori-urunleri">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="/kategori-urunleri">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
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

export default CategoryPage;
