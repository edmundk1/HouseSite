import moment from 'moment';

export const choresList = {
  KITCHEN: "Kitchen",
  VACUUMANDDUST: "Vacuum & Dust ",
  SWEEPANDMOP: "Sweep & Mop",
  TRASH: "Trash & Trash Bins",
};

const assignees = ['Kitty', 'Amy', 'Wei', 'Edmund'];
let id = -1;

export function createData(chore, description) {
  id++;
  return {id, chore, description};
}

function shuffle(array, shift) {
  let newOrder = {};
  let newArr = [];
  let arrLength = array.length;
  let index;
  for (let i = 0; i < arrLength; i++) {
    index = (i+shift)%arrLength;
    newOrder[index] = array[i];
  }
  for (let i = 0; i < arrLength; i++) {
    newArr.push(newOrder[i]);
  }
  return newArr;
}
let week = moment().week();

export function RotateAssignees() {
  let shift = week%assignees.length;
  let newAssigneeArr = shuffle(assignees, shift);

  return newAssigneeArr;
}
