import React from "react";
import "./top.css";
import TopContent from "./topcontent.js";
class Top_portion extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <div className="top">
    <div className="title"> My Weather </div>
    <TopContent {...this.props} />
   </div>
  );
 }
}

export default Top_portion;
