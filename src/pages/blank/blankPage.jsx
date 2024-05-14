import React from 'react';

const BlankPage = ({ props }) => {
  return (
    <div>
      <div style={{ marginTop: '100px' }}></div>
      <center>
        <h1>{props.blankTitle}</h1>
        <p>{props.blankMessage}</p>
      </center>
    </div>
  );
};

export default BlankPage;
