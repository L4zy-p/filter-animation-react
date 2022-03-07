import React from 'react'
import { motion } from 'framer-motion'

import { MovieType } from '../types'

interface MovieProps {
  moive: MovieType
}

const Movie: React.FC<MovieProps> = ({ moive }: MovieProps) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }} // ค่อยๆ หายไปเมื่อไม่มีอยู่ใน genre
      transition={{ duration: 0.5 }}
      layout>
      <h2>{moive.title}</h2>
      <img src={`http://image.tmdb.org/t/p/w500${moive.backdrop_path}`} alt='movie poster' />
    </motion.div>
  )
}

export default Movie