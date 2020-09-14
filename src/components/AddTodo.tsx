import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from '../enums/action';

let AddTodo = ({ dispatch }: any) => {
  const [content, setContent] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value);
  const handleClick = () => {
    dispatch({ type: Action.ADD_TODO, content });
    setContent('');
  };

  return (
    <div className="container input-group mb-3">
      <input type="text" className="form-control" aria-describedby="button" value={content} onChange={handleChange}></input>
      <div className="input-group-append">
        <button className="btn btn-outline-primary" type="button" id="button" onClick={handleClick}>
          Add a todo
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTodo);
