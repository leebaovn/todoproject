import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lý công việc</h1>
      </div>
      <div className="row">
        {/* Left 4 cols form */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="card">
            <div className="card-header bg-warning">
              <h3 className="card-title">
                <span class="fa fa-times-circle mr-3"></span>
                Thêm công việc
              </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Tên: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                  />
                </div>
                <label>Trạng thái: </label>
                <select
                  className="form-control"
                  name="status"
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
                    type="submit"
                    className="btn btn-danger ml-3"
                  >
                    <i className="fa fa-close mr-2"></i>Hủy bỏ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        { /* End left form */}
        { /* 8 cols right */}
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          { /* btn Add todoItem */}
          <button
            type="button"
            className="btn btn-primary"
          >
            <i className="fa fa-plus mr-2"></i>Thêm công việc
          </button>

          {/* Search box & Sorted option */}
          <div className="row mt-2">
            { /* Search 6 col */}
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
            {/* End search*/}
            {/* Sort */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Sắp xếp
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <button type="button" className="sort_selected">
                      <span className="fa fa-sort-alpha-asc pr-2">
                        Tên A-Z
                      </span>
                    </button>
                  </li>

                  <li>
                    <button type="button" >
                      <span className="fa fa-sort-alpha-desc pr-2">
                        Tên Z-A
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng thái</th>
                    <th className="text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="filterName"
                      />
                    </td>
                    <td>
                      <select
                        className="form-control"
                        name="filterStatus"
                      >
                        <option value={-1}>Tất cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>kích hoạt</option>
                      </select>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Học lập trình</td>
                    <td className="text-center">
                      <span className="label label-danger">Kích hoạt</span>
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-warning mr-2">
                        <i className="fa fa-pencil mr-2"></i>Sửa
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="fa fa-trash mr-2"></i>Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
