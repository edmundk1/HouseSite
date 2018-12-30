import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import dustIcon from '../images/dust.png'

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

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
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
        <img src= { dustIcon } className={classes.dense}/>
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
