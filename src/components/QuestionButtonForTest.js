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

    const redStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 1;
    });
    const yellowStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 2;
    });
    const greenStudents = batchStudents.filter(function(student) {
      return student.grades[student.grades.length -1] === 3;
    });

    function percentageNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function chooseOneStudent() {

      let pool = []

      if (redStudents.length>0) {
        let i = 0
        while (i<50) {
        pool.push("r")
        i++
      }
      }
      if (yellowStudents.length>0) {
        let i = 0
        while (i<33) {
        pool.push("y")
        i++
      }
      }
      if (greenStudents.length>0) {
        let i = 0
        while (i<17) {
        pool.push("g")
        i++
      }
      }
      let maxNum = pool.length-1
      let indexOfChoice = percentageNum(0, maxNum)
       const test = pool[indexOfChoice]
      switch(test) {

      case "r":
        <p>(redStudents[percentageNum(0, (redStudents.length-1))].name)</p>
        break;
      case "y":
        <p>(yellowStudents[percentageNum(0, (yellowStudents.length-1))].name)</p>
        break;
      case "g":
        <p>(greenStudents[percentageNum(0, (greenStudents.length-1))].name)</p>
        break;
      }
    }

    return (
      <div>
        <button onClick={ chooseOneStudent }>
          Choose a random student!
        </button>

        <ChosenOne />
      </div>
    );
  }
}

const mapStateToProps = ({ currentGroup }) => ({ currentGroup });

export default connect(mapStateToProps)(QuestionButton);
