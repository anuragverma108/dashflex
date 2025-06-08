import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: {
    'todo': {
      id: 'todo',
      title: 'To Do',
      taskIds: [],
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      taskIds: [],
    },
    'done': {
      id: 'done',
      title: 'Done',
      taskIds: [],
    },
  },
  tasks: {},
  columnOrder: ['todo', 'in-progress', 'done'],
};

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { id, content, columnId } = action.payload;
      state.tasks[id] = { id, content };
      state.columns[columnId].taskIds.push(id);
    },
    moveTask: (state, action) => {
      const { source, destination, taskId } = action.payload;
      
      // Remove from source
      const sourceTaskIds = state.columns[source.droppableId].taskIds;
      sourceTaskIds.splice(source.index, 1);
      
      // Add to destination
      const destTaskIds = state.columns[destination.droppableId].taskIds;
      destTaskIds.splice(destination.index, 0, taskId);
    },
    updateTask: (state, action) => {
      const { id, content } = action.payload;
      state.tasks[id].content = content;
    },
    deleteTask: (state, action) => {
      const { id, columnId } = action.payload;
      const column = state.columns[columnId];
      column.taskIds = column.taskIds.filter(taskId => taskId !== id);
      delete state.tasks[id];
    },
  },
});

export const { addTask, moveTask, updateTask, deleteTask } = kanbanSlice.actions;
export default kanbanSlice.reducer; 