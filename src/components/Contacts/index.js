import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:'mehmet',
      phone_number:'12345'
    },
    {
      fullname:'berke',
      phone_number:'3333'
    }
  ]);
  useEffect(() => {
    console.log(contacts);
  },[contacts])
  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts