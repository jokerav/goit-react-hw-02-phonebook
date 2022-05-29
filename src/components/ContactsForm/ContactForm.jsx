import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
  };
  onChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
