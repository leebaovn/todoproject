import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }
    onCloseForm = () => {
        this.props.onClose();
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header bg-warning">
                    <h3 className="card-title">
                        <span
                            className="fa fa-times-circle mr-3 target"
                            onClick={this.onCloseForm}
                        ></span>
                        Thêm công việc
                    </h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onHandleChange}
                            />
                        </div>
                        <label>Trạng thái: </label>
                        <select
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onHandleChange}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning"
                            >
                                <i className="fa fa-plus mr-2"></i>Lưu lại
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger ml-3"
                                onClick={this.onCloseForm}
                            >
                                <i className="fa fa-close mr-2"
                                ></i>Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
