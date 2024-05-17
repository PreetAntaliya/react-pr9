import { useState } from 'react'
import Logo from './assets/download2.png'
import './App.css'
import {ADD_NOTE, DELETE_NOTE} from './redux/action/crudAction'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    let all = {
      id: Math.floor(Math.random() * 100),
      title,
      note
    }
    dispatch(ADD_NOTE(all))
    setTitle("")
    setNote("")
  }

  return (
    <div>
      <header>
        <Container>
          <Row>
            <div className="d-flex align-items-center">
              <img src={Logo} alt="logo" width={100} />
              <h3 className='mb-0 ms-4'>SaMsAppLe Throw Away</h3>
            </div>
          </Row>
        </Container>
      </header>
      <div className='note_main d-flex justify-content-center mt-5 pt-5'>
        <form onSubmit={handleSubmit} className='w-100'>
          <div className='note_card'>
            <div className='input-group'>
              <input type="text" id='title' className='form-control' onChange={(e) => setTitle(e.target.value)} placeholder='title' value={title} required />
            </div>
            <div className='input-group mt-3'>
              <textarea type="text" id='note' className='form-control' rows={7} onChange={(e) => setNote(e.target.value)} placeholder='Enter Content Here' value={note} required>
              </textarea>
            </div>
          </div>
            <div className='text-end mt-3'>
              <button type='submit' className='btn btn-info text-white'><b>+</b></button>
            </div>
        </form>
      </div>
      <Container>
        <Row className='flex-wrap'>
          {
            notes.map((note) => {
              return (
                <div key={note.id} className='col-3 py-2 text-center mx-auto'>
                  <div className='view_card'>
                    <h5 className='mb-0'><b>{note.title}</b></h5>
                    <p className='mb-0'>{note.note}</p>
                    <button className='btn btn-danger mt-3' onClick={() => dispatch(DELETE_NOTE(note.id))}>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default App
