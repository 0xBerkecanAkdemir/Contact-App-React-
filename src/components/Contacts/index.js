import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css'
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:'mehmet',
      phone_number:'12345'
    },
    {
      fullname:'berke',
      phone_number:'3333'
    },
    {
      fullname:'hasan',
      phone_number:'8888'
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  },[contacts])
  return (
    <div id='container'>
      <div><h3>Contacts</h3></div>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts