import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import "./ChosenOne.css";

export class ChosenOne extends PureComponent {

  render() {
    const chosenOne = false
    return ( <p> {chosenOne} </p>
  )};
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(ChosenOne)
