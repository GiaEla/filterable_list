import React from 'react';

const List = ({ items, filterBy }) => {
  return (
    <div>
      <ul>
        {
          items
            .filter(item => item.indexOf(filterBy) > -1)
            .map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>
    </div>
  );
};

export default List;
