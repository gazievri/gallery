import {useState, useEffect} from 'react';
import Picture from '../components/Picture';
import { getPaintings } from '../utils/api';

const Pictures = () => {

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getPaintings()
      .then((res) => {
        setCatalog(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="pictures">
      { catalog.map(item => { return <Picture key={item.id} picture={item} /> }) }
    </div>

  )
}

export default Pictures;
