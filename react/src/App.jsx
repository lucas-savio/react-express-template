import { useState, useEffect } from 'react'
import BreedCard from './components/card';
import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */
  const [breeds, setBreeds] = useState([])
  const [skip, setSkip] = useState(0)

  const fetchBreeds = async (s) => {
    const res = await fetch(`http://localhost:4000/breeds?skip=${s}`);
    const data = await res.json();

    console.log(data)

    setBreeds(data);
  }

  useEffect(() => {
    fetchBreeds(skip);
  }, [skip])

  return (
    <>
      <div>
        <h1>Breeds</h1>
      </div>
      <div>
        { breeds.length > 0 && (
          breeds.map((v) => (
            <BreedCard 
              key={v.id}
              breed={v}
            />
          ))
        )}
      </div>
      <div>
        <button onClick={() => {setSkip(skip - 5)}}>
          Prev page
        </button>
        <button onClick={() => {setSkip(skip + 5)}}>
          Next page
        </button>
      </div>
    </>
  )
}

export default App
