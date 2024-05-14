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
          <div style={{ marginTop: "100px" }}>ADS</div>
          Downloading file... <br />
          If download error please use browser: Chrome, Edge,FireFox, Vivaldi <br />
          If you don't get the download file, please chat to the discord server or comment on YouTube @dimz_craft
        </div>
      </center>
    </div>
  );
};

export default Ads;
