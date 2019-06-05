import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {choresList, RotateAssignees, createData, rotatedAssignees} from '../../managers/ChoreManager';

let id = 0;
let weekLengthMS = 1000;//604800000;

function createData(chore, description, assignee) {
  id += 1;
  return { id, chore, description, assignee };
}

// this.props.assignees = ['Kitty', 'Amy', 'Dayan', 'Wei', 'Edmund'];

// setInterval(RotateAssignees(), weekLengthMS);

let assignees = RotateAssignees();

const rows = [
  createData(
    choresList.KITCHEN,
    'Wipe down all surfaces in the kitchen with the Clorox wipes. Scrub the sink and the dish rack.',
    'Kitty'
  ),
  createData(
    choresList.VACUUMANDDUST,
    'Vacuum the living room and entire hallway. Dust all blinds and surfaces in the public spaces.',
    'Edmund'
  ),
  createData(
    choresList.SWEEPANDMOP,
    'Sweep then mop the kitchen and dining room floor.',
    'Wei'
  ),
  createData(
    choresList.TRASHBINS,
    'Take out a trash bin of each color (blue, green, and black) on Sunday and bring them in on Monday.',
    'Dayan'
  ),
  createData(
    choresList.TRASH,
    'Take out the kitchen recycling, trash, and compost from under the sink. Recycling goes in the blue bin,' +
    'trash goes in the black bin, and compost goes in the green bin.',
    'Amy'),
];

function SimpleTable(props) {
  const { classes } = props;

  console.log(rotatedAssigneeArr);

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
