import React, { Component } from 'react';
import SwapiService from '../services/SwapiService'
import ErrorButton from '../ErrorButton';


import './PersonDetails.scss';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    };
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person });
      });
  };

  render() {

    const { person } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birth_year, eye_color } = person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"
        />

        <div className="card-body">
          <h4 className="color-text">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender
                <span className='color-text'> -</span></span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year
                <span className='color-text'> -</span></span>
              <span>{birth_year}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color
                <span className='color-text'> -</span></span>
              <span>{eye_color}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  };
};

