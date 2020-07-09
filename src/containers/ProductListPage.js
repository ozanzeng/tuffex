import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import SubCategoryName from '../components/SubCategoryName';

const ProductListPage = () => (
  <>
    <div className="product-list-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <PageTitle title="Saklama ve Düzenleme" />
            <SubCategoryName title="Alt Kategori Başlığı" />
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-1.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-2.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-3.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-4.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-5.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-5.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-1.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-2.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-3.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-4.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-5.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="product-list">
              <div className="product-spot-img">
                <Link to="/urun-listesi">
                  <img src="/images/urun-5.png" alt="" />
                </Link>
              </div>
              <span className="product-model">TF 1234</span>
              <span className="product-name">Ürün Adı</span>
            </div>
          </div>
          {/* ProductList Finsh */}
        </div>
      </div>
    </div>
  </>
);

export default ProductListPage;
