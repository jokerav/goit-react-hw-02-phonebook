const Contact = ({ contact, onDelete, id }) => {
  const { name, number } = contact;
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
