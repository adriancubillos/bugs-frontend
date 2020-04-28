import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, getUnresolvedBugs, resolveBug } from '../store/bugs';

const BugsList = () => {
  const dispatch = useDispatch();
  // useSelector(state => state.entities.bugs.list)
  // OR use a selector from our bugs store
  const unresolvedBugs = useSelector(getUnresolvedBugs);

  const handleClick = (event) => {
    dispatch(resolveBug(event.target.value));
  };

  useEffect(() => {
    // dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {unresolvedBugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          {'  '}
          <button onClick={handleClick} value={bug.id}>
            Resolve.
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
