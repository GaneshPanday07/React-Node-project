import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddBook from './AddBook'
import AddMobile from './AddMobile'

createRoot(document.getElementById('root')).render(
  //<AddBook></AddBook>
  <AddMobile></AddMobile>
)
