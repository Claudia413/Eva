import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import { connect } from 'react-redux'
import toMarkdown from 'to-markdown'
import addStudent from '../actions/students/addStudent'
import './StudentEditor.css'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, picture, grades, batch } = props

    this.state = {
      name,
      picture,
      grades,
      batch,
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

  updateBatch(text, medium) {
    const urlBatch = window.location.href.split("/").pop();
    this.setState({
      batch: urlBatch
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
      batch,
      grades
    }

    console.log(student)
    this.props.addStudent(student)
  }

  render() {
    return (
      <div className="editor">
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
