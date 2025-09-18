import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import ModalForm from './components/ModalForm'


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true)
  }

  const handleSubmit = () => {
    if (modalMode === 'add'){
      console.log("model mode Add")
    } else {
      console.log("model mode edit")
    }
  }


  return (
    <>
      <NavBar onOpen={() => handleOpen('add')}/>
      <TableList handleOpen={handleOpen}/>
      <ModalForm 
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={handleSubmit}
      mode={modalMode}
      />
    </>
  )
}

export default App
