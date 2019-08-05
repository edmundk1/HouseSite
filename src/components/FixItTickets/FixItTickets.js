import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import styled from "styled-components";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: 'right'
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const PaddedTypography = styled(Typography)`
  padding: 10px 5px;
  color: green;
`;

class OutlinedTextFields extends React.Component {
  state = {
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <PaddedTypography variant="h4">Maintenance Requests</PaddedTypography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            label="Fix-it Ticket"
            multiline
            rows="5"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </form>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Send
          </Button>
        </label>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
