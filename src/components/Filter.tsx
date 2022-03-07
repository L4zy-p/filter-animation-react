import React, { useEffect } from 'react'
import { MovieType } from '../types'

interface FilterProps {
  popular: MovieType[]
  setFiltered: React.Dispatch<React.SetStateAction<any>>
  activeGenre: number
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>
}

const Filter: React.FC<FilterProps> = ({ popular, setFiltered, activeGenre, setActiveGenre }: FilterProps) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }

    const filtered = popular.filter((moive: MovieType) => moive.genre_ids.includes(activeGenre))
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div className='filter-container'>
      <button className={activeGenre === 0 ? 'active' : ''} onClick={() => setActiveGenre(0)}>All</button>
      <button className={activeGenre === 35 ? 'active' : ''} onClick={() => setActiveGenre(35)}>Comedy</button>
      <button className={activeGenre === 28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  )
}

export default Filter