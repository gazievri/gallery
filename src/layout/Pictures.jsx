import Picture from '../components/Picture';

const Pictures = ({ pictures }) => {

  return (
    <div className="pictures">
      { pictures.map(item => { return <Picture key={item.id} picture={item} /> }) }
    </div>
  )
}

export default Pictures;
