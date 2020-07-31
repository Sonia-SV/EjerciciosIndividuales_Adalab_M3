import React from 'react';

class OnionHaterRed extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleOnion = this.handleOnion.bind(this);
  }
  handleOnion(ev) {
    const input = ev.target.value.toLowerCase();
    const background = document.querySelector('.onion_hater');

    if (input.includes('cebolla')) {
      this.isHating = true;
      background.classList.add('onion_red');
    } else {
      this.isHating = false;
      background.classList.remove('onion_red');
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div className="onion_hater">
        <textarea className="onion_hater_text" onChange={this.handleOnion} />
      </div>
    );
  }
}
export default OnionHaterRed;
