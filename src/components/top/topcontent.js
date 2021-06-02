import React from "react";
import "./topcontent.css";
import sun from "../../staticfiles/sun.png";
class TopContent extends React.Component {
 constructor() {
  super();
  this.state = {
   dis: "none",
   slocation: "",
  };
  this.func = this.func.bind(this);
  this.func2 = this.func2.bind(this);
  this.handleChange = this.handleChange.bind(this);
 }
 func() {
  this.setState({ dis: "block" });
 }
 func2() {
  this.setState({ dis: "none" });
 }
 handleChange(event) {
  const { name, value } = event.target;
  this.setState({ [name]: value });
 }
 render() {
  const { name, temperature, isDay, desc, iconurl, handleSubmit, disp } =
   this.props;

  return (
   <div className="contenttop">
    <div>{name}</div>
    <div className="mid">
     <div className="top-icon">
      {" "}
      <img src={iconurl} />{" "}
     </div>{" "}
     <div>{temperature}°C</div>
    </div>
    <div>{desc}</div>
    <button type="button" className="btn_location" onClick={this.func}>
     select location
    </button>
    <div id="sL" style={{ display: this.state.dis }}>
     <input
      type="text"
      name="slocation"
      placeholder="Type Location "
      onChange={this.handleChange}
     />
     <button
      onClick={() => {
       handleSubmit(this.state.slocation);
       this.func2();
      }}
     >
      {" "}
      Generate{" "}
     </button>
    </div>
    <script></script>
   </div>
  );
 }
}
export default TopContent;
