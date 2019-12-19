import React from 'react';
import Item from './Item';

const renderList = props => {
  return props.clubs.map((club, index) => {
    return <Item key={index} club={club} />;
  });
};

const List = props => {
  return <ul>{renderList(props)}</ul>;
};

export default List;
