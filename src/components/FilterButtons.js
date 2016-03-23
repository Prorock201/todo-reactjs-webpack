import React from 'react';

class FilterButtons extends React.Component {
  selectFilter(value) {
    this.props.applyFilter(value);
  }
  render() {
    return (
      <div className="btn-group btn-group-xs col-md-4 col-md-offset-4" role="group" >
        <button type="button" className="btn btn-default" onClick={this.selectFilter.bind(this, null)}>All</button>
        <button type="button" className="btn btn-default" onClick={this.selectFilter.bind(this, false)}>Active</button>
        <button type="button" className="btn btn-default" onClick={this.selectFilter.bind(this, true)}>Completed</button>
      </div>
    );
  }
}

export default FilterButtons;