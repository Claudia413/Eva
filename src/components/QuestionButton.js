// src/components/LikeButton.js
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import fetchStudents from "../actions/students/fetch";
import "./QuestionButton.css";
import ChosenOne from "./ChosenOne";

export class QuestionButton extends PureComponent {
  /* import students from current batch, are they in state already?*/

  render() {
    const batchStudents = this.props.batchStudents;

    // function checkRed(student) {
    //   return student.props.grades[-1] === 1
    // };

    const redStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 1;
    });
    const yellowStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 2;
    });
    const greenStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 3;
    });

    // console.log(redStudents.map(function(student) { return student.grades})
    // console.log(yellowStudents.map(function(student) { return student.name})

    return (
      <div>
        <button>
          Choose a random student!
        </button>

        <ChosenOne />
      </div>
    );
  }
}

const mapStateToProps = ({ currentGroup }) => ({ currentGroup });

export default connect(mapStateToProps)(QuestionButton);
