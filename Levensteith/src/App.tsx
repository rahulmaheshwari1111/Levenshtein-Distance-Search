import { useState } from 'react'
import './App.css'
import SearchInput from './components/pages/SearchInput'
import NasaImage from './components/pages/Nasa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchInput/>

    </>
  )
}

export default App
