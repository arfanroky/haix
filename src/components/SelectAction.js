import React from 'react';

const SelectAction = ({ selectData }) => {
  return <option value="System Default">{selectData.title}</option>;
};

export default SelectAction;
