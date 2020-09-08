import React, { useState } from 'react';

const BigImage = img => {
  const [image, setImage] = useState('');
  const [menuToggle, setMenuToggle] = useState(false);

  const handleBigImage = () => {
    setMenuToggle(!menuToggle);
    setImage(img);
  };

  return (
    <>
      <button className="btn btn-outline" onClick={handleBigImage}>
        DETAYLAR
      </button>
      <div className={`${menuToggle ? 'image-active' : 'image-passive'} big-image`}>
        <img src={image.img} alt="" />
      </div>
      <div
        className={`${menuToggle ? 'shadow-active' : 'shadow-passive'} shadow`}
        onClick={handleBigImage}
      />
    </>
  );
};

export default BigImage;
