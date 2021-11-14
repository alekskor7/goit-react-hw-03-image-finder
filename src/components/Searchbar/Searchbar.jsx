import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import Style from "./Searchbar.module.css";

export class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = this.state.query.trim();
    if (query) {
      this.props.onSubmit(query);
    }
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={Style.Searchbar}>
        <form className={Style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={Style.SearchFormButton} >
            <span className={Style.SearchFormButtonLabel}><BiSearchAlt2 size="25px" /></span>
          </button>

          <input
            className={Style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;