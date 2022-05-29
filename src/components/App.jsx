import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactsForm/ContactForm';
export class App extends Component {
  static defaultProps = {
    contacts: [],
  };
  state = {
    contacts: this.props.contacts,
  };

  addContact = contact => {
    contact.id = nanoid();
    this.setState(prevState => prevState.contacts.push(contact));
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onSubmit={this.addContact} />
      </div>
    );
  }
}
