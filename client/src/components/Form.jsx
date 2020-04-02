import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: null,
        lastName: null,
        email: null,
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            <br />
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  export default Form;