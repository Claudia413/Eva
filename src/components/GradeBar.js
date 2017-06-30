// src/components/LikeButton.js
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import fetchStudents from "../actions/students/fetch";
import "./GradeBar.css"


export class GradeBar extends PureComponent {
  /* import students from current batch, are they in state already?*/
  render() {
    if (!this.props.batchStudents) return null
    const batchStudents = this.props.batchStudents;
    const redStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 1;
    });
    const yellowStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 2;
    });
    const greenStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 3;
    });

    const redBar = redStudents.length/batchStudents.length*100
    const yellowBar = yellowStudents.length/batchStudents.length*100
    const greenBar = greenStudents.length/batchStudents.length*100

    return (
      <div className="barcontainer">
        <div className="red bar" style={{width: `${redBar}%`}} > {redBar.toFixed(2)}% </div>
        <div className="yellow bar" style={{width: `${yellowBar}%`}} > {yellowBar.toFixed(2)}% </div>
        <div className="green bar" style={{width: `${greenBar}%`}} > {greenBar.toFixed(2)}% </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentGroup }) => ({ currentGroup });

export default connect(mapStateToProps)(GradeBar);
