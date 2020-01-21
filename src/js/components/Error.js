import React from "react";
import { connect } from "react-redux";

const errors = state => {
  console.log('state!', state.error)
  return { error: state.error};
};

const ConnectedError = ({error}, ...rest) => (
  <h1>
    {error}
  </h1>
);

const List = connect(errors)(ConnectedError);

export default List;