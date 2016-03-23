import React from 'react';
import Task from './Task';
import FilterButtons from './FilterButtons';

class TaskList extends React.Component {
  onChangeBox(value, index) {
    this.props.onChangeBox(value, index)
  }
  deleteTask(index) {
    this.props.deleteTask(index)
  }
  applyFilter(value) {
    this.props.applyFilter(value)
  }
  render() {
    let taskNodes = this.props.data.map((task,index) => {
      if (this.props.filter === task.active || this.props.filter == null) {
        return (
          <Task key={task.id}
                index={index}
                task={task.task}
                checked={task.active}
                boxChange={::this.onChangeBox}
                deleteTask={::this.deleteTask}
          />
        );
      }
    });
    return (
      <div>
        {taskNodes}
        <FilterButtons applyFilter={::this.applyFilter}/>
      </div>
    );
  }
}

export default TaskList;