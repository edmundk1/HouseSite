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

function createData(chore, description, assignee) {
  id += 1;
  return { id, chore, description, assignee };
}
const rows = [
  createData(
    'Kitchen',
    'Wipe down all surfaces in the kitchen with the Clorox wipes. Scrub the sink and the dish rack.',
    'Kitty'
  ),
  createData(
    'Vacuum & Dust',
    'Vacuum the living room and entire hallway. Dust all blinds and surfaces in the public spaces.',
    'Edmund'
  ),
  createData(
    'Sweep and Mop',
    'Sweep then mop the kitchen and dining room floor.',
    'Wei'
  ),
  createData(
    'Trash Bins',
    'Take out a trash bin of each color (blue, green, and black) on Sunday and bring them in on Monday.',
    'Dayan'
  ),
  createData(
    'Trash',
    'Take out the kitchen recycling, trash, and compost from under the sink. Recycling goes in the blue bin,' +
    'trash goes in the black bin, and compost goes in the green bin.',
    'Amy'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Chore</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.chore}</TableCell>
                <TableCell>{row.description}</TableCell>
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
  },
  table: {
    minWidth: 400,
  },
  head: {
    background: '#bababa',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default withStyles(styles)(SimpleTable);
