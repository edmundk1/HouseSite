import React from 'react';

export const choresList = {
  KITCHEN: "Kitchen",
  VACUUMANDDUST: "Vacuum & Dust ",
  SWEEPANDMOP: "Sweep & Mop",
  TRASHBINS: "Trash Bins",
  TRASH: "Trash",
};

const assignees = ['Kitty', 'Amy', 'Dayan', 'Wei', 'Edmund'];

export function RotateAssignees() {
  let newAssigneeArr = assignees.sort(function() {return 0.5 - Math.random() });
  // while (newAssigneeArr[0] === 'Wei') {
  //   console.log('new list: ', newAssigneeArr);
  //   newAssigneeArr = assignees.sort(function() {return 0.5 - Math.random() });
  // }
  return newAssigneeArr;
}

let currentDate = new Date();

let currentDay = currentDate.getDay();

let currentHour = currentDate.getHours();

export default class ChoreManager extends React.Component {
  constructor(props) {
    super(props);

  }

  shuffleArray(array) {

  }

  rotateAssignee(assignee) {
    let newAssigneeArr = assignee.sort(function() {return 0.5 - Math.random() });
    return newAssigneeArr;
  }
}
