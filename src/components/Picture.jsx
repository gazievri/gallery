import React, { useState, useEffect } from "react";

import { BASE_URL } from "../utils/config";

const Picture = ({ picture, locations, authors }) => {
  const { imageUrl, name, created, location, author } = picture;
  const [isTitleBlockHovered, setIsTitleBlockHovered] = useState('none');

  return (
    <div className="pictures__picture">
      <img
        className="pictures__picture-image"
        alt={name}
        src={`${BASE_URL}${imageUrl}`}
      />
      <div
        className="pictures__pictures-title-block"
        onMouseOver={() => setIsTitleBlockHovered('block')}
        onMouseLeave={() => setIsTitleBlockHovered('none')}
      >
        <h2 className="pictures__picture-title">{name}</h2>
        <p
          className="pictures__picture-subtitle"
          style={{ display: `${isTitleBlockHovered}` }}
        >
          Author: {author}
        </p>
        <p
          className="pictures__picture-subtitle"
          style={{ display: `${isTitleBlockHovered}` }}
        >
          Created: {created}
        </p>
        <p
          className="pictures__picture-subtitle"
          style={{ display: `${isTitleBlockHovered}` }}
        >
          Location: {location}
        </p>
      </div>
    </div>
  );
};

export default Picture;
