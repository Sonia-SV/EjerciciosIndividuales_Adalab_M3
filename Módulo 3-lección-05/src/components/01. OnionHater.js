import React from 'react';

const textAreaListener = (ev) => {
  if (ev.target.value.includes('cebolla')) {
    alert('ODIO LA CEBOLLA');
  }
};

class OnionHater extends React.Component {
  render() {
    return (
      <div>
        <textarea onChange={textAreaListener} />
      </div>
    );
  }
}
export default OnionHater;
