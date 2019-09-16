import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProgressBar from "../presentational/ProgressBar.jsx";
import Button from "../presentational/Button.jsx";
import SelectMenuOptions from "../presentational/SelectMenuOptions.jsx";
class ProgressBarContainer extends Component {
  constructor() {
    super();
    this.state = {
      progressBarDetails: {
        "buttons": [],
        "bars": [],
        "limit": 0
      }
    };
    this.barSelected = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }
  componentDidMount() {
        fetch('http://pb-api.herokuapp.com/bars')
        .then(res => res.json())
        .then((data) => {
          this.setState({ progressBarDetails: data })
        })
        .catch(console.log)
    }

  handleChange(bar) {
  }
  handleSelectChange(e) {
   this.barSelected=e.currentTarget.value;
  }
  handleButtonChange(event) {
  var targetVal = event.target.value;
  var changedVal = parseInt(this.state.progressBarDetails.bars[this.barSelected]+parseInt(targetVal));
  changedVal = parseInt(changedVal)>0?changedVal:0;
  this.state.progressBarDetails.bars[this.barSelected]=changedVal;
  this.setState({ progressBarDetails: { ...this.state.progressBarDetails, bars: this.state.progressBarDetails.bars } });
  this.handleChange(this.barSelected);
  }
  render() {
    var ProgressBars=this.state.progressBarDetails.bars;
    var ProgressButtons=this.state.progressBarDetails.buttons;
    var progressBarChange=this.handleChange;
    var buttonChange=this.handleButtonChange;
    var progressSelect= ProgressBars.map((entry,index) => {
              return  <SelectMenuOptions
                value={index}
                name={'ProgressBar_'+index}
               />
           }); 
        return [
        <div className="row">
        <div className="col-lg-12">
         {   ProgressBars.map((entry,index) => {
            var widthVal=Math.round((entry/this.state.progressBarDetails.limit)*100);
              return  <ProgressBar
                text="Prohressbar"
                label="Progressbar"
                type="text"
                className={widthVal>100?'redProgressBar':'blueProgressBar'}
                id={'ProgressBar_'+index}
                value={entry}
                width={widthVal}
                handleChange={progressBarChange}
               />
           }) 
        }</div>
           ,
            <div className="col-lg-2">
           <select className="selectMenu" onChange={(event) => this.handleSelectChange(event)} > 
             {progressSelect}
           </select> 
           </div>,
          <div className="col-lg-9">
          {
           ProgressButtons.map((entry,index) => {
              return  <Button
                text="ButtonText"
                label="Button"
                type="Button"
                id={'Button_'+index}
                value={entry}
                handleButtonChange={buttonChange}
               />
           })
           }
           </div>
          </div>
           ]
  }
}
export default ProgressBarContainer;
const wrapper = document.getElementById("progress-bar");
wrapper ? ReactDOM.render(<ProgressBarContainer />, wrapper) : false;