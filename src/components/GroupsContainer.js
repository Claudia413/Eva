// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import GroupShow from './GroupShow'
import fetchStudents from '../actions/students/fetch'
// import CreateRecipeButton from './CreateRecipeButton'

export class GroupsContainer extends PureComponent {
  static propTypes = {
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchStudents()
  }

  renderGroup(student, index) {
    return <p key={index}>{student.name}</p>
  }

  render() {
    return(
      <div className="groups wrapper">
        <header>
          <h2>All Groups</h2>
        </header>

        <main>
          { this.props.students.map(this.renderGroup) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, {
  fetchStudents})(GroupsContainer)
