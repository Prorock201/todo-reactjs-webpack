import React from 'react';

class Task extends React.Component {
  changeTaskStatus(e) {
    let value = e.target.checked;
    let index = this.props.index;
    this.props.boxChange(value, index);
  }
  deleteTask() {
    let index = this.props.index;
    this.props.deleteTask(index);
  }
  render() {
    return (
      <div className="col-md-12">
        <input type="checkbox" checked={this.props.checked} onChange={::this.changeTaskStatus} />
        <span style={{textDecoration : (this.props.checked? 'line-through': 'none')}}>{this.props.task}</span>
        <i className="close" onClick={::this.deleteTask}>&times;</i>
      </div>
    );
  }
}

export default Task;