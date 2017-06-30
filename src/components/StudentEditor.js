import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import { connect } from 'react-redux'
import toMarkdown from 'to-markdown'
import addStudent from '../actions/students/addStudent'
import './StudentEditor.css'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()
    const urlBatch = window.location.href.split("/").pop();
    const { name, picture, grades, batch } = props

    this.state = {
      name,
      picture,
      grades: [],
      batch: urlBatch,
    }
  }

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: this.refs.picture.value
    })
  }

  updateGrades(text, medium) {
    this.setState({
      grades: []
    })
  }

  saveStudent() {
    const {
      name,
      picture,
      batch,
      grades
    } = this.state

    const student = {
      name,
      picture,
      grades,
      batch
    }

    console.log(student)
    this.props.addStudent(student)
  }

  render() {
    if (!this.props.batchStudents) return null
    const batchStudents = this.props.batchStudents;
    return (
      <div className="editor">
      <p>Add a student to this batch</p>
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />

        <input
          type="text"
          ref="picture"
          className="picture"
          placeholder="PictureURL"
          defaultValue={this.state.picture}
          onChange={this.updatePicture.bind(this)}
          onKeyDown={this.updatePicture.bind(this)} />

        <div className="actions">
          <button className="save-button" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addStudent })(StudentEditor)
