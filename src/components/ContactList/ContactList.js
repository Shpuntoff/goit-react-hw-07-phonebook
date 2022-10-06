import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  return (
    <ul className={s.list}>
      {contacts
        .filter(contact => {
          return filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true;
        })
        .map(({ id, name, phone }) => {
          return <ContactListItem key={id} name={name} phone={phone} id={id} />;
        })}
    </ul>
  );
}
