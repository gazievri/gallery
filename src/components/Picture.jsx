import { BASE_URL } from "../utils/config";

const Picture = ({picture}) => {
  const {imageUrl, name} = picture;

  return(
    <div className="pictures__picture">
      <img className="pictures__picture-image" alt={name} src={`${BASE_URL}${imageUrl}`} />
      <div className="pictures__pictures-title-block">
        <h2 className="pictures__picture-title">{name}</h2>
      </div>
    </div>
  )
}

export default Picture;
