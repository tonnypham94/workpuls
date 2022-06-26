import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { Grid, Typography, Button } from '@mui/material'
import AddNewTaskForm from '../core/AddNewTaskForm'
import { handleCallTasksApi } from '../../redux/tasksSlice'
import { v4 as uuidv4 } from 'uuid'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import NameAssign from '../core/NameAssign'
import GradeIcon from '@mui/icons-material/Grade'
import { format } from 'date-fns'
import { makeStyles } from '@mui/styles'

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}

export default function Tasks() {
  const useStyles = makeStyles((theme) => ({
    taskHeader: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ebeef0',
      padding: '1rem',
      background: '#fff'
    }
  }))
  const classes = useStyles()
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.items)
  const [columns, setColumns] = useState(tasks)
  const [isOpenAddNewTask, setIsOpenAddNewTask] = useState(false)

  const openAddNewTask = (value) => () => {
    setIsOpenAddNewTask(value)
  }

  const handleSubmit = (value) => () => {
    const newTasks = {
      ...columns,
      toDo: {
        ...columns.toDo,
        items: [...columns.toDo?.items, {...value, id: uuidv4()}]
      }
    }
    dispatch(handleCallTasksApi(newTasks))
    setIsOpenAddNewTask(false)
  }

  useEffect(() => {
    setColumns(tasks)
  }, [tasks])

  return (
    <>
      <div className={classes.taskHeader}>
        <Typography variant="h6" color="secondary" style={{ marginRight: '20px' }}>Tasks</Typography>
        <Button variant="outlined" disableRipple>
          <Typography variant="h6" onClick={openAddNewTask(true)}>Add New Task</Typography>
        </Button>
      </div>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        <Grid
          container
          columnSpacing={1}
          style={{
            border: '1px solid #ebeef0',
            padding: '0.5rem',
            minHeight: '500px',
            width: '100%',
            background: '#fff',
            marginLeft: 0
          }}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                style={{
                  direction: "column",
                }}
                key={columnId}
              >
                <div style={{
                  backgroundColor: '#f3f5f6',
                  borderRadius: '8px',
                  padding: '0.5rem'
                }}>
                  <Typography variant="subtitle1" color="secondary">{column.name}</Typography>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#e6eaec"
                              : "#f3f5f6",
                            width: '100%',
                            minHeight: 500
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        padding: '0.5rem',
                                        borderRadius: '6px',
                                        backgroundColor: snapshot.isDragging
                                          ? '#f5f4fe'
                                          : '#fff',
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography>{item.title}</Typography>
                                        <MoreHorizIcon fontSizeSmall />
                                      </div>
                                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <NameAssign/>
                                        <AccessTimeIcon fontSize='small' style={{ marginLeft: 'auto', marginRight: '0.25rem' }}/>
                                        {format(item.time, 'MM/dd/yyyy')}
                                        <GradeIcon fontSize='small' color={item.priority === 2 ? 'error' : 'warning'}/>
                                      </div>
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                  <Typography variant="subtitle2" align='center' style={{ cursor: 'pointer' }} color="secondary" onClick={openAddNewTask(true)}>+ Add new task</Typography>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </DragDropContext>
      <AddNewTaskForm isOpen={isOpenAddNewTask} handleClose={openAddNewTask(false)} handleSubmit={handleSubmit}/>
    </>
  )
}
