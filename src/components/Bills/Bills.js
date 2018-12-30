import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let id = 0;

function createData(bill, comment, totalCost, splitCost) {
  id += 1;
  return { id, bill, comment, totalCost, splitCost };
}
const rows = [
  createData('Internet'),
  createData('Electricity'),
  createData('Water'),
  createData('Gas'),
  createData('Waste'),
  createData('Other'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Bill</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>Total Cost</TableCell>
            <TableCell>Split Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.bill}</TableCell>
                <TableCell component="th" scope="row">{row.comment}</TableCell>
                <TableCell component="th" scope="row">{row.totalCost}</TableCell>
                <TableCell component="th" scope="row">{row.splitCost}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    background: '#89e5ff'
  },
  table: {
    minWidth: 400,
  },
  head: {
    background: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%'
  }
});

export default withStyles(styles)(SimpleTable);
