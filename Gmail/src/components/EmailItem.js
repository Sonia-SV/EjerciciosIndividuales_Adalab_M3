import React from 'react';

class EmailItem extends React.Component {
  render() {
    return (
      <tr className="cursor-pointer">
        <td>
          <a href="www.adalab.es" className="text--decoration--none">
            Front Fest
          </a>
        </td>
        <td>
          <a href="www.adalab.es" className="text--decoration--none">
            Entradas ya a la venta
          </a>
        </td>
        <td>
          <a href="www.adalab.es" className="text--decoration--none">
            15:27
          </a>
        </td>
        <td className="text-align-right">
          <button className="form__btn fas fa-trash"></button>
        </td>
      </tr>
    );
  }
}

export default EmailItem;
