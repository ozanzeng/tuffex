import React, { useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import PageTitle from '../components/PageTitle';
import SubCategoryName from '../components/SubCategoryName';
import ArrowUp from '../assets/images/arrow-up.svg';
import ArrowDown from '../assets/images/arrow-down.svg';

const ProductDetailPage = () => {
  const PageTitleName = 'Ürün Adı';
  const [selectedImage, setSelectedImage] = useState('https://picsum.photos/id/10/1024/768');
  const [selectedColor, setSelectedColor] = useState(false);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img src={ArrowUp} alt="" width="20" />
      ) : (
        <img src={ArrowDown} alt="" width="20" />
      );
    return (
      <span className="arrows" onClick={onClick}>
        {pointer}
      </span>
    );
  };

  const imgList = [
    { productImg: 'https://picsum.photos/id/10/1024/768' },
    { productImg: 'https://picsum.photos/id/9/1024/768' },
    { productImg: 'https://picsum.photos/id/1/1024/768' },
    { productImg: 'https://picsum.photos/id/7/1024/768' },
    { productImg: 'https://picsum.photos/id/6/1024/768' },
    { productImg: 'https://picsum.photos/id/5/1024/768' },
  ];

  const colors = [
    { color: '#e9d6da', id: 1 },
    { color: '#b3e1f0', id: 2 },
    { color: '#b3c6f0', id: 3 },
    { color: '#d3b3f0', id: 4 },
    { color: '#ffffff', id: 5 },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 2, verticalMode: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ];

  return (
    <div className="product-detail-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <PageTitle title="Saklama ve Düzenleme" />
            <SubCategoryName title={PageTitleName} />
          </div>
          {/* Detail Start */}
          <div className="col-lg-2 col-md-4 col-sm-4 12">
            <div className="product-small-images">
              <Carousel
                renderArrow={myArrow}
                itemPadding={[5, 0]}
                verticalMode
                breakPoints={breakPoints}
              >
                {imgList.map(item => (
                  <div className="carousel-item" onClick={() => setSelectedImage(item.productImg)}>
                    <img src={item.productImg} alt="" className="img-responsive" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8 col-12">
            <div className="product-big-img">
              <img src={selectedImage} alt="" className="img-responsive" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="info-box">
              <div className="info-box-title">Renk Seçenekleri</div>
              <div className="info-box-colors">
                <ul>
                  {colors.map(item => (
                    <li
                      key={item.id}
                      className={`product-color ${selectedColor === item.id && 'active'}`}
                      onClick={() => setSelectedColor(item.id)}
                      style={{ backgroundColor: item.color }}
                    />
                  ))}
                </ul>
              </div>
              <div className="info-box-title">Ürün Ölçüleri</div>
              <div className="info-box-text">30 x 30 x 26 cm</div>
              <div className="info-box-title">Hacim</div>
              <div className="info-box-text">15 L</div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="info-box">
              <div className="info-box-title">Paketleme</div>
              <div className="info-box-text">Karton Koli</div>
              <div className="info-box-title">Koli İçi Adedi</div>
              <div className="info-box-text">24</div>
              <div className="info-box-title">Koli Ölçüleri</div>
              <div className="info-box-text">336 x 610 x 625 cm</div>
              <div className="info-box-title">
                Koli m<sup>3</sup>
              </div>
              <div className="info-box-text">0,128</div>
              <div className="info-box-title">Koli Brüt Ağırlık</div>
              <div className="info-box-text">12,80 kg</div>
            </div>
          </div>
          {/* Detail End */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
