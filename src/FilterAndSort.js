import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setSort } from './actions';

function FilterAndSort({ filter, sortBy, setFilter, setSort }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <select value={sortBy} onChange={e => setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  filter: state.filter,
  sortBy: state.sortBy
});

const mapDispatchToProps = {
  setFilter,
  setSort
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAndSort);
