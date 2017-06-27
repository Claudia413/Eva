// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import GroupShow from './GroupShow'
import fetchGroups from '../actions/groups/fetch'
// import CreateRecipeButton from './CreateRecipeButton'

export class GroupsContainer extends PureComponent {
  static propTypes = {
    groups: PropTypes.array.isRequired,
    fetchGroups: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGroups()
  }

  renderGroup(group, index) {
    return <p key={index}>{group.groupNumber}</p>
  }

  render() {
    return(
      <div className="groups wrapper">
        <header>
          <h2>All Groups</h2>
        </header>

        <main>
          { this.props.groups.map(this.renderGroup) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ groups }) => ({ groups })

export default connect(mapStateToProps, {
  fetchGroups})(GroupsContainer)
