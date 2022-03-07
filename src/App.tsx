import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

import './App.css';
import { Movie, Filter } from './components'
import { MovieType } from './types'

const App: React.FC = () => {
  const [popular, setPoppular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0570ee5b4017b2920d6c0e852de90cc2&language=en-US&page=1')
    const moives = await data.json()

    setPoppular(moives.results)
    setFiltered(moives.results)
  }

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre} />
      <motion.div
        className="popular-movies"
        layout>
        <AnimatePresence> {/** ใช้กับตัว exist เอาไว้ทำ animte เมื่อ child หายไป*/}
          {filtered.map((movie: MovieType) => (
            <Movie key={movie.id} moive={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
