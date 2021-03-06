// src/components/Navigation.js
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import signOut from "../actions/user/sign-out";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  };

  goHome = () => {
    this.props.push("/");
  };

  signIn = () => {
    this.props.push("/sign-in")
  };

  render() {
    const { signedIn, signOut } = this.props;
    return (
      <AppBar
        title="Eva"
        iconElementLeft={<IconButton onClick={this.goHome}>Eva</IconButton>}
        iconElementRight={
          signedIn
            ? <FlatButton label="Sign out" onClick={signOut} />
            : <FlatButton label="Sign in" onClick={this.signIn} />
        }
      />
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser.user && !!currentUser.user._id
});

export default connect(mapStateToProps, { push, signOut })(Navigation);
