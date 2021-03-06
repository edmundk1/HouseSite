import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {choresList, RotateAssignees, createData} from '../../managers/ChoreManager';
import {Typography} from "@material-ui/core";
import styled from "styled-components";

const PaddedTypography = styled(Typography)`
    padding: 10px 0px;
    color: green;
`;

export default class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rows: [
        createData(
          choresList.KITCHEN,
          'Wipe down all surfaces in the kitchen with the Clorox wipes. Scrub the sink and the dish rack.',
        ),
        createData(
          choresList.VACUUMANDDUST,
          'Vacuum the living room and entire hallway. Dust all blinds and surfaces in the public spaces.',
        ),
        createData(
          choresList.SWEEPANDMOP,
          'Sweep then mop the kitchen and dining room floor.',
        ),
        createData(
          choresList.TRASH,
          'Take out the kitchen recycling, trash, and compost from under the sink. Recycling goes in the ' +
          'blue bin, trash goes in the black bin, and compost goes in the green bin. Also take out a trash bin of ' +
          'each color (blue, green, and black) on Sunday and bring them in on Monday.' ,
        )
        ,
      ],
      assignees: RotateAssignees(),
    }
  }

  render() {
    return (
      <div>
        <PaddedTypography variant="h4">Chores</PaddedTypography>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Chore</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Assignee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">{row.chore}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{this.state.assignees[row.id]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
