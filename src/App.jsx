import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const initialState = [{
  _id: 1,
  boxSize: 'Small',
  boxOwner: 'Murtadha',
}];

const App = () => {

  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  )
};

export default App;
