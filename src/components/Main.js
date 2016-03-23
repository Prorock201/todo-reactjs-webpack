import React from 'react';
import _ from 'lodash';
import Data from './Data';
import TaskList from './TaskList';

require('bootstrap/dist/css/bootstrap.css');
require('normalize.css');
require('styles/App.css');

class ToDoApp extends React.Component {
	constructor () {
		super();
		this.state = Data;
	}
	onChangeBox(value, index) {
		let task =  this.state.tasks;
		task[index].active = value;
		this.setState({
			task: task
		});
	}
	deleteTask(index) {
		let task = this.state.tasks;
		task.splice(index,1);
		this.setState({
			tasks: task
		});
	}
	applyFilter(value) {
		this.setState({
			filter: value
		})
	}
	addNewTask(e) {
		if ((e.target.value).length > 0) {
			if (e.charCode == 13) {
				this.state.tasks.push({
					id: _.uniqueId(),
					task: e.target.value,
					active: false
				})
				e.target.value = '';
			}
			this.setState({
				tasks: this.state.tasks
			})
		}
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="todolist not-done">
							<h1>Todos</h1>
							<input type="text" className="form-control add-todo" placeholder="Add todo" onKeyPress={::this.addNewTask} />
							<TaskList onChangeBox={::this.onChangeBox}
												deleteTask={::this.deleteTask}
												applyFilter={::this.applyFilter}
												data={this.state.tasks}
												filter={this.state.filter}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDoApp;
