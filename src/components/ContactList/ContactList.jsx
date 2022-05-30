import Contact from './Contact';
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <Contact contact={contact} />
    ))}
  </ul>
);

export default ContactList;
