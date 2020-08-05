const placeImg = 'https://via.placeholder.com/126x177.png';

const fetchApiShows = () => {
  fetch('http://api.tvmaze.com/search/shows?q=girls')
    .then((result) => result.json())
    .then((data) => {
      data.map((shows) => {
        return {
          id: shows.show.id,
          name: shows.show.name,
          status: shows.show.status,
          rating: shows.show.rating.average !== null ? shows.show.rating.average : 'No info',
          img: shows.show.image !== null ? shows.show.image.medium : placeImg,
        };
        // this.setState((prevState) => {
        //   return {
        //     showList: [...prevState.showList, myObj],
        //   };
        // });
      });
    });
};

fetchApiShows();
console.log(fetchApiShows);

export default fetchApiShows;
