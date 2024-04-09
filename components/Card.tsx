import React from 'react';

// Card component
const Card: React.FC<{ title: string; description: string; image?: string }> = ({ title, description, image }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="max-w-sm rounded overflow-hidden  ">
        {image && (
          <img className="w-2/6 m-auto mt-6" src={image} alt="Card image" />
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
          <p className="text-gray-700 text-base text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
