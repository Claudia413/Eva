import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router'
// import GroupShow from "./GroupShow";
import fetchStudents from "../actions/students/fetch";
// import CreateRecipeButton from './CreateRecipeButton'

export class GroupsContainer extends PureComponent {
  static propTypes = {
    fetchStudents: PropTypes.func.isRequired
  };

  // .from(new Set());
  // }).map(function(batchNumber) {
  //   return <p key={index}>Batch number {batchNumber}</p>
  // })

  componentWillMount() {
    this.props.fetchStudents();
  }

  renderGroups(batch, index) {
    return <p key={index}>Batch number {batch}</p>;
  }

  render() {
    const studentBatches = this.props.students.map(function(student, index) {
      return student.batch[0].number;
    });
    const batches = new Set(studentBatches);
    const differentGroups = [ ...batches ].map(function(batchNumber, index){
      return <Link to={`/batch/${batchNumber}`}><p key={ index }>Batch number: { batchNumber }</p></Link>
    })

    return (
      <div className="groups wrapper">
        <header>
          <h2>All Groups</h2>
        </header>

        <main>
          {differentGroups}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ students }) => ({ students });

export default connect(mapStateToProps, {
  fetchStudents
})(GroupsContainer);
