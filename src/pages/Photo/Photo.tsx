import React from 'react';



export type WorkItemData = {
  id: string;
  folder: string;
  image_name: string;
  title: string;
  description: string;
  preview_url: string | null;
};



/**
 * Повертає поточну статичну заглушку сторінки фотографій без пропсів і побічних ефектів.
 * Тип WorkItemData зарезервований для майбутнього списку робіт, але компонент його поки не використовує.
 */
const Photo: React.FC = () => {

  return (
    <>
      <h1>Welcome to Our Photography Page</h1>
    </>
  );
};

export default Photo;

