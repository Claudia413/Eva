import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import QuestionButton from './QuestionButton'
import ChosenOne from './ChosenOne'

export class GroupShow extends PureComponent {
  static propTypes = {
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchStudents()
  }



  render() {
    const urlBatch = window.location.href.split("/").pop();
    const currentGroup = this.props.students.filter(function(student, index, params){
      return (student.batch[0].number === urlBatch);
    }).map(function(student, index){
      return (
      <div>
        <p key={index}>{student.name}</p>
        <img src="{student.picture}"/>
      </div>)
    })
    const batchStudents = this.props.students.filter(function(student, index, params){
      return (student.batch[0].number === urlBatch);
    });

    return(
      <div className="student wrapper">
        <header>
          <h2>Current Group</h2>
        </header>

        <main>
        <QuestionButton batchStudents={batchStudents}/>

        {currentGroup}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, {
  fetchStudents})(GroupShow)
