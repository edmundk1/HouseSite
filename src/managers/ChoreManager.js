import React from 'react';

export const choresList = {
  KITCHEN: "Kitchen",
  VACUUMANDDUST: "Vacuum & Dust ",
  SWEEPANDMOP: "Sweep & Mop",
  TRASHBINS: "Trash Bins",
  TRASH: "Trash",
};

const assignees = ['Kitty', 'Amy', 'Dayan', 'Wei', 'Edmund'];
let id = -1;
export let rotatedAssignees = assignees;

export function createData(chore, description) {
  id++;
  return {id, chore, description};
}

function shuffle(a) {

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let now = new Date();
let day = now.getDay();
let mondayIndex = 1;

export function RotateAssignees() {
  let newAssigneeArr = assignees;
  if (day ===  mondayIndex) {
    let newAssigneeArr = shuffle(assignees);
    while (newAssigneeArr[0] === 'Wei' || newAssigneeArr[2] === 'Wei') {
      newAssigneeArr = shuffle(assignees);
    }
  }
  rotatedAssignees = newAssigneeArr;
}
