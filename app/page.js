'use client';

import React, { useState } from 'react'
import './globals.css'
import Modal from './modal/appointment'
import Form from './components/Myfrom'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div className="p-10 text-center text-3xl">
        <h1>K Nanda</h1>
      </div>

      <center>
      <button className="bg-blue-500 hover:bg-blue-700 text-white center 
      font-bold py-2 px-4 rounded"
      onClick={() => setShowModal(true)}>
        Add Appointment +
      </button>
      <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
        
        <Form/>
       
      </Modal>

      </center>
    </>
  )
}

export default Home
