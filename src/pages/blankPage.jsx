import React from 'react';

// link
const blankLink = [
  // default 
  {
    id: "*",
    blankTitle: "🤥",
    blankMessage: "The page you entered doesn't exist :( <br /> If this page is a download link, please report it to the discord or YouTube server @Dimz_craft",
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
