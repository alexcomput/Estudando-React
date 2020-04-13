import React, { Component } from 'react';

import TechItem from './Techtem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  // Assim que aparecer na tela
  componentDidMount() {
  }

  //Execulta sempre quando houver uma atualização do componente
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState != this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  //Execulta quando o componente deixa de existir
  componentWillUnmount() {
  }

  handerInputChange = e => {
    this.setState({newTech: e.target.value})
  }

  handleSubmit = e => {

    e.preventDefault();
    this.setState({
      techs: [...this.state.techs,this.state.newTech],
      newTech: ''});
  }

  handleDelete = (tech) => {

    this.setState({ techs: this.state.techs.filter( t => t != tech )})
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {
              this.state.techs.map(tech =>
                <TechItem
                  key={tech}
                  tech={tech}
                  onDelete={() => this.handleDelete(tech)}
                />
              )}
          </ul>
          <input
            type='text'
            onChange={this.handerInputChange}
            value={this.state.newTech}
          />
          <button type="submit" >enviar</button>
        </form>
      </>
    );
  }
}

export default TechList;
