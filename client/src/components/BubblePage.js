import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  axiosWithAuth()
    // this has the headers attached with it from axioswithauth
    .get("http://localhost:5000/api/colors")
    .then(response => {
      console.log("get colors response", response);
      setColorList(response.data);
      // this.setState({
      //   getFriends: response.data
      // });
    })
    .catch(err => console.log("colors list error: ", err.response));

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
