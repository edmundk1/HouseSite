import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import dustIcon from '../images/dust.png';
import vacuumIcon from'../images/vacuum.png';
import sweepAndMopIcon from '../images/mopandsweep.png';
import wipeIcon from '../images/wipe.png';
import trashIcon from '../images/trash.png';


let id = 0;

function createData(icon, chore, assignee) {
  id += 1;
  return { id, icon, chore, assignee };
}
const rows = [
  createData(dustIcon, 'Dust', 'Kitty'),
  createData(vacuumIcon, 'Vacuum', 'Edmund'),
  createData(sweepAndMopIcon, 'Sweep and Mop', 'Tuscany'),
  createData(wipeIcon, 'Wipe Surfaces', 'Dayan'),
  createData(trashIcon, 'Trash', 'Amy'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Chore</TableCell>
            <TableCell>Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>
                  <img src={ row.icon } />
                </TableCell>
                <TableCell component="th" scope="row">{row.chore}</TableCell>
                <TableCell>{row.assignee}</TableCell>
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
    fontWeight: 'bold'
  }
});

export default withStyles(styles)(SimpleTable);
