import done  from "./images/Done.svg";
import todo  from "./images/To-do.svg";
import backlog  from "./images/Backlog.svg";
import cancelled  from "./images/Cancelled.svg";
import inProgress  from "./images/in-progress.svg";


import highPriority  from "./images/high-priority.svg";
import lowPriority  from "./images/low-priority.svg";
import mediumPriority  from "./images/medium-priority.svg";
import noPriority  from "./images/No-priority.svg";
import urgentPriority  from "./images/urgent-priority-grey.svg";

export const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

export const statusLabels = [
  "Not Assigned",
  "Todo",
  "In progress",
  "Backlog",
  "Cancelled",
];


export const statusIcons = [backlog, todo, inProgress, done, cancelled];

export const labelToIcons = statusLabels.reduce((acc, label, index) => {
  acc[label] = statusIcons[index];
  return acc;
}, {});

export const priorityIcons = [noPriority, lowPriority, mediumPriority, highPriority, urgentPriority];

export const getRandomColor = () => {
  const colors = ['orange', '#2baa2b', '#3890f4'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getRandomStatusColor = () => {
  const colors = ['red', 'green', 'yellow',' grey'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
