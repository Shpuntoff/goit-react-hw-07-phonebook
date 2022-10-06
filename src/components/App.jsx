import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: '20px',
        width: '700px',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <h1>Phoneboook</h1>
      <ContactForm />
      <Filter />
      <h2 style={{ marginBottom: '0' }}>Contacts</h2>
      {error && <h2>Error...</h2>}
      {isLoading && <h3 style={{ color: 'green' }}>Loading...</h3>}
      <div style={{ color: 'blue', marginTop: '10px' }}></div>
      {contacts.length > 0 ? (
        <>
          <ContactList />
        </>
      ) : (
        <h2>You have not added contacts yet</h2>
      )}
    </div>
  );
}
