import { useState, useEffect } from 'react';
import Header from './layout/Header';
import Filters from './layout/Filters';
import Pictures from './layout/Pictures';
import { getPaintings, getAuthors, getLocations } from './utils/api';

function App() {

  const [pictures, setPictures] = useState([]);
  const [locations, setLocations] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState('');

  pictures.map(pic => {
    locations.map(item => {
      if (item.id === pic.locationId) {pic.location = item.location};
      return pic.location;
    })

    authors.map(item => {
      if (item.id === pic.authorId) {pic.author = item.name};
      return pic.author;
    })
    return pic;
  })

  const handleSearchByName = (value) => {
    setName(value)
  }

  useEffect(() => {
    getPaintings(name)
      .then((res) => {
        setPictures(res)
      })
      .catch((err) => console.log(err))
  }, [name])

  useEffect(() => {
    getLocations()
      .then((res) => {
        setLocations(res)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    getAuthors(name)
      .then((res) => {
        setAuthors(res)
      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <>
      <Header />
      <Filters handleSearchByName={handleSearchByName} />
      <Pictures pictures={pictures} />
    </>
  );
}

export default App;
