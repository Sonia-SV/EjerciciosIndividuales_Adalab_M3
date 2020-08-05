import React from 'react';
//import { fetchApiShows } from '../services/fetchApiShows';
import Header from './Header';
import ShowList from './ShowList';
import '../stylesheets/App.scss';

const placeImg = 'https://via.placeholder.com/210x295.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: [],
      isChecked: false,
      filterText: '',
    };

    this.searchText = this.searchText.bind(this);
    this.searchChecked = this.searchChecked.bind(this);
    //this.fetchShows = this.fetchShows.bind(this);
  }
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=break')
      .then((result) => result.json())
      .then((data) => {
        data.map((shows) => {
          const myObj = {
            id: shows.show.id,
            name: shows.show.name,
            status: shows.show.status,
            rating: shows.show.rating.average !== null ? shows.show.rating.average : 'No info',
            img: shows.show.image !== null ? shows.show.image.medium : placeImg,
          };
          this.setState((prevState) => {
            return {
              showList: [...prevState.showList, myObj],
            };
          });
        });
      });
  }

  searchChecked(ev) {
    this.setState({ isChecked: ev.currentTarget.checked });
  }

  searchText(text) {
    this.setState({
      filterText: text,
    });
  }

  render() {
    console.log(this.state.showList);
    const filteredShows = this.state.showList
      .filter((nameShow) => {
        return nameShow.name.toLowerCase().includes(this.state.filterText.toLowerCase());
      })
      .filter((runningShow) => {
        return this.state.isChecked === false ? true : runningShow.status === 'Running';
      });
    return (
      <div>
        <Header
          searchText={this.searchText}
          searchChecked={this.searchChecked}
          filterText={this.state.filterText}
          checkValue={this.state.isChecked}
        />
        <ShowList shows={filteredShows} />
      </div>
    );
  }
}

export default App;
