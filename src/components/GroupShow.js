import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import GroupShow from './GroupShow'
import fetchStudents from '../actions/students/fetch'
// import CreateRecipeButton from './CreateRecipeButton'

export class GroupShow extends PureComponent {
  static propTypes = {
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchStudents()
  }

  // filterGroup() {
  //   this.props.students.filter(function(student, index){
  //     return <p key={index}>{student.batch[0].number == 8}</p>;
  //   })
  // }

  // renderGroup(student, index) {
  //   return <p key={index}>{student.batch[0].number}</p>
  // }

  render() {
    const urlBatch = window.location.href.split("/").pop();
    const currentGroup = this.props.students.filter(function(student, index, params){
      return (student.batch[0].number === urlBatch);
    }).map(function(student, index){
      return <p key={index}>{student.name}</p>
    })

    return(
      <div className="student wrapper">
        <header>
          <h2>Current Group</h2>
        </header>

        <main>
        {currentGroup}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, {
  fetchStudents})(GroupShow)
