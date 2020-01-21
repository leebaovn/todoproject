import React, { Component } from 'react';
class Sort extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <select
                    className="form-control"
                    name="filterSt"
                >
                    <option value={true}>Tăng dần</option>
                    <option value={false}>Giảm dần</option>
                </select>
            </div>
        );
    }
}

export default Sort;