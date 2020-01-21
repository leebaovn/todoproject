import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        name="keyword"
                        className="form-control"
                        placeholder="Nhập từ khóa ở đây..."
                    />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary">
                            <i className="fa fa-search mr-2"></i>Tìm
                  </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;