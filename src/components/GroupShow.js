import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fetchStudents from "../actions/students/fetch";
import QuestionButton from "./QuestionButton";
import GradeBar from "./GradeBar";
import "./GroupShow.css"


export class GroupShow extends PureComponent {
  static propTypes = {
    fetchStudents: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchStudents();
  }

  render() {
    if (!this.props.students) return null

    const classes = {
      1: "red panel",
      2: "yellow panel",
      3: "green panel"
    };

    const urlBatch = window.location.href.split("/").pop();
    const currentGroup = this.props.students
      .filter(function(student, index, params) {
        return student.batch[0].number.toString() === urlBatch;
      })
      .map(function(student, index) {
        return (
          <div className={classes[student.grades[student.grades.length -1]]}>
            <p key={index}>{student.name}</p>
            <img src={student.picture} />
          </div>
        );
      });
    const batchStudents = this.props.students.filter(function(
      student,
      index,
      params
    ) {
      return student.batch[0].number === urlBatch;
    });

    return (
      <div className="student wrapper">
        <header>
          <h2>Current Group</h2>
        </header>

        <main>
          console.log(batchStudents)
          <QuestionButton batchStudents={batchStudents} />
          <GradeBar batchStudents={batchStudents} />
          <div className="container">
            <div className="flexwrap">
              {currentGroup}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ students }) => ({ students });

export default connect(mapStateToProps, {
  fetchStudents
})(GroupShow);
