import { Component } from "react";
import {Link, Typography} from '@material-ui/core';


class Copyright extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

}

export default Copyright;