import { Component } from 'react';
import ContactForm from './ContactsForm/ContactForm';
export class App extends Component {
  static defaultProps = {
    contacts: [],
  };
  state = {
    contacts: this.props.contacts,
  };

  // addContact = e => {
  //   e.preventDefault();
  //   console.log(e);
  // };

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
        <ContactForm />
      </div>
    );
  }
}
