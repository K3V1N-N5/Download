import React from 'react';

// link
const blankLink = [
  // default 
  {
    id: "*",
    blankTitle: "🗿",
    blankMessage: "daijobu",
  },
];

export default blankLink;

// page
const BlankPage = ({ props }) => {

  return (
    <div>
      <div style={{ marginTop: '100px' }}></div>
      <center>
        <h1>{props.blankTitle}</h1>
        <div>{props.blankMessage}</div>
      </center>
    </div>
  );
};

export default BlankPage;
