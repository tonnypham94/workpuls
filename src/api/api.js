import { v4 as uuidv4 } from 'uuid'

let nextDate = new Date()
nextDate.setDate(nextDate.getDate() + 1)

export const apiTaskData = {
  toDo: {
    name: "To do",
    items: [
      { id: uuidv4(), title: "First task", time: nextDate, priority: 1, assignee: 'Bob'},
      { id: uuidv4(), title: "Second task", time: nextDate, priority: 1, assignee: 'Bob' },
      { id: uuidv4(), title: "Third task", time: nextDate, priority: 2, assignee: 'Bob' },
      { id: uuidv4(), title: "Fourth task", time: nextDate, priority: 2, assignee: 'Bob' },
      { id: uuidv4(), title: "Fifth task", time: nextDate, priority: 1, assignee: 'Bob' }
    ]
  },
  onHold: {
    name: "On Hold",
    items: []
  },
  inProgress: {
    name: "In Progress",
    items: [
      { id: uuidv4(), title: "Sixth task", time: nextDate, priority: 2, assignee: 'Bob' }
    ]
  },
  done: {
    name: "Done",
    items: [
      { id: uuidv4(), title: "Seventh task", time: nextDate, priority: 1, assignee: 'Bob' }
    ]
  }
}
