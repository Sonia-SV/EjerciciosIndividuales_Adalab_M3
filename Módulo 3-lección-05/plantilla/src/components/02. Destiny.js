import React from 'react';

const optionListener = (ev) => {
  const city = ev.target.value;
  if (city !== defaultSentence) {
    alert(`Tu destino es viajar a ${city}`);
  }
};

const defaultSentence = 'Selecciona un destino';

class Destiny extends React.Component {
  render() {
    return (
      <select onChange={optionListener}>
        <option>{defaultSentence}</option>
        <option>Buenos Aires</option>
        <option>Sydney</option>
        <option>Praga</option>
        <option>Boston</option>
        <option>Tokio</option>
      </select>
    );
  }
}
export default Destiny;
