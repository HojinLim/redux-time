import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shortid from "shortid";

const List = ({isDone}) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>TODOLIST- 미완료</h3>
      {
      todos
        .filter((item) => item.isDone === isDone)
        .map((item) => {
          return (
            <>
              <br />
              <div style={{ border: "1px solid Black", padding: "3px" }}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <p>{item.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_REVIEW",
                      payload: item.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_REVIEW",
                      payload: item,
                    });
                  }}
                >
                  완료
                </button>
                <br />
                <Link to={`/detail/${item.id}`}>상세보기</Link>
                <br />
                <br />
                <br />
              </div>
            </>
          );
        })}


    </div>
  );
};

export default List;
