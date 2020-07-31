import React from 'react';
import ComponenteMadre from './ComponenteMadre';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      languaje: '',
      file: '',
    };
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChosen = this.handleFileChosen.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
    let fileReader;
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].readAsDataURL}`);
  }

  handleFileRead(ev) {
    const content = fileReader.result;
    console.log(content);
  }

  handleFileChosen(file) {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  // previweFile() {
  //   const reader = new FileReader();

  //   reader.onloadend = function () {
  //     preview.src = reader.result;
  //   }
  // }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={this.state.description} onChange={this.handleChange} />
          <select name="languaje" id="languaje" value={this.state.languaje} onChange={this.handleChange}>
            <option value="Spanish ">Spanish</option>
            <option value="English">English</option>
            <option value="Portugues">Portugues</option>
          </select>
        </form>
        <form>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>

        <div>
          <h4>Título: {this.state.name}</h4>
          <p>Descripción: {this.state.description}</p>
          <p>Selected languaje: {this.state.languaje}</p>
          <img src={this.state.file} height="200" alt="preview" />
        </div>
      </div>
    );
  }
}

export default App;
