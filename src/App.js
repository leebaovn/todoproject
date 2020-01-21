import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isDisplayForm: false,
      editingTask: null
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
    if(this.state.isDisplayForm && this.state.editingTask !== null){
      this.setState({
        isDisplayForm: true,
        editingTask:null
      });
    }else{
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        editingTask:null
      });
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    
    var { tasks } = this.state;
    if(data.id ===''){
      data.id = this.generateId();
      tasks.push(data);
    }else{
      var idx = this.findIndex(data.id);
      tasks[idx] = data;
    }
    this.setState({
      tasks: tasks,
      isDisplayForm: false,
      editingTask: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var idx = this.findIndex(id);
    if (idx !== -1) {
      tasks[idx].status = !tasks[idx].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var re = -1;
    tasks.forEach((element, idx) => {
      if (element.id === id) {
        re = idx;
      }
    });
    return re;
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var idx = this.findIndex(id);
    if (idx !== -1) {
      tasks.splice(idx,1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }
  onUpdate = (id) => {
    var { tasks } = this.state;
    var idx = this.findIndex(id);
    var taskEdit = tasks[idx];
    this.setState({
      editingTask: taskEdit
    });
    this.onShowForm();

  }
  render() {
    var { tasks, isDisplayForm, editingTask } = this.state;
    var eleTaskForm = isDisplayForm ? <TaskForm 
    onClose={this.onCloseForm}
    onSubmit={this.onSubmit} 
    task={editingTask}
     /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {eleTaskForm}
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
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
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
