import React from 'react';
import EmailItem from './EmailItem';

class EmailList extends React.Component {
  render() {
    return (
      <table className="table">
        <tbody>
          <EmailItem />
          <EmailItem />
          <EmailItem />
        </tbody>
      </table>
    );
  }
}

export default EmailList;
