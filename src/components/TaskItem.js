import React, { Component } from 'react';
import './item.css'

class TaskItem extends Component {

    onStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDeleteItem = (id) => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = (id) => {
        this.props.onUpdate(this.props.task.id);
    }
    render() {
        var {task, idx} = this.props;
        return (
            <tr>
                <td>{idx + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
        <span 
            className={task.status === true? 'label label-danger': 'label label-success'}
            onClick={this.onStatus}
            >
                {task.status === true? 'Kích hoạt': 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning mr-2"
                        onClick={this.onUpdate}
                    >
                        <i className="fa fa-pencil mr-2"></i>Sửa
                      </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteItem}
                    >
                        <i className="fa fa-trash mr-2"></i>Xóa
                      </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;