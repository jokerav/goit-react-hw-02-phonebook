import { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
export class App extends Component {
  static defaultProps = {
    contacts: [],
  };
  state = {
    contacts: this.props.contacts,
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactsForm />
      </div>
    );
  }
}
