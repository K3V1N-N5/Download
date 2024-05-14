import React, { useEffect, useRef } from "react";

const allowedBrowsers = ["Chrome", "Edg", "Firefox", "Vivaldi"];
const Ads = ({ props }) => {

    const userAgent = navigator.userAgent;
    const isAllowedBrowser = allowedBrowsers.some((browser) =>
      userAgent.includes(browser)
    );

    if (!isAllowedBrowser) {
      window.alert(
        "If download error please use browser: Chrome, Edge, FireFox, Vivaldi"
      );
    }

  return (
    <div>
      <center>
        <div>
          Downloading file... <br />
          If download error please use browser: Chrome, Edge,FireFox, Vivaldi
        </div>
      </center>
    </div>
  );
};

export default Ads;
