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

    function percentageNum(min, max) {
      return Math.random() * (max - min) + min;
    }

    function shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }

    const chosenGroup = function() {
      let pool = []

      if (redStudents.length>0) {
        let i = 0
        while (i<50)
        pool.push("r")
        i++
      }
      if (yellowStudents.length>0) {
        let i = 0
        while (i<33)
        pool.push("y")
        i++
      }
      if (greenStudents.length>0) {
        let i = 0
        while (i<17)
        pool.push("g")
        i++
      }
       return pool[percentageNum(0, (pool.length-1))]
    }

    function chooseOneStudent(chosenGroup) {
      switch(chosenGroup) {

      case "r":
        redStudents.shuffle
        window.alert(redStudents[0].name)
        break;
      case "y":
        yellowStudents.shuffle
        window.alert(yellowStudents[0].name)
        break;
      case "g":
        greenStudents.shuffle
        window.alert(greenStudents[0].name)
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
