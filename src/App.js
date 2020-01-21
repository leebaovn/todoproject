import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }

  UNSAFE_componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  onOpenForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    data.id = this.generateId();  
    var { tasks } = this.state;
    tasks.push(data);
    console.log(data.status);
    this.setState({
      tasks: tasks,
      isDisplayForm: false
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var idx = this.findIndex(id);
    if (idx !== -1){
      tasks[idx].state = !tasks[idx].state;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var re=-1;
    tasks.forEach((element, idx) => {
      if (element.id === id){
        re = idx;
      }
    });
    return re;
  }
  render() {
    var { tasks, isDisplayForm } = this.state;
    var eleTaskForm = isDisplayForm ? <TaskForm onClose={this.onCloseForm} onSubmit={this.onSubmit} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row">
          {/* Left 4 cols form */}
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {eleTaskForm}
          </div>
          { /* End left form */}
          { /* 8 cols right */}
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            { /* btn Add todoItem */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onOpenForm}
            >
              <i className="fa fa-plus mr-2"></i>Thêm công việc
          </button>

            <Control />
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
