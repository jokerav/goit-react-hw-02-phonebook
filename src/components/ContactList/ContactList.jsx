import Contact from '../Contact/Contact';
const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDelete={onDelete}
        id={contact.id}
      />
    ))}
  </ul>
);
export default ContactList;
