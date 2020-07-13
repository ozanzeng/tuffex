import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const CategoryPage = () => {
  return (
    <>
      <div className="category-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <PageTitle title="Saklama ve Düzenleme" />
              {/* <Carousel {...getConfigurableProps()}>
                <div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="./urun-listesi">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="./urun-listesi">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="./urun-listesi">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="./urun-listesi">
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
                        <Link to="./urun-listesi">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="category">
                        <Link to="./urun-listesi">
                          <img src="/images/kategori.png" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
