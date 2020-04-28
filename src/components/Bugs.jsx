import React, { Component } from 'react';
import { loadBugs, resolveBug } from '../store/bugs';
import { connect } from 'react-redux';

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  handleClick = (event) => {
    this.props.resolveBug(event.target.value);
  };

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            {'  '}
            {!bug.resolved && (
              <button onClick={this.handleClick} value={bug.id}>
                Resolve!
              </button>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
