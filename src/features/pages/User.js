import React, { Component, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../counter/userSlice";
import { Link } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (loading) {
    return <h2 className='text-center'>Loading User's Data Please Wait ...</h2>;
  }
  // console.log(users, "rahul");
  return (
    <div>
      <h1 className='text-center mt-5 mb-5'>User's Dynamic Data Table</h1>
      <div className='container'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>User id</th>
              <th>Full Name</th>
              <th>Username</th>
              <th>E-mail</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <div className="text-center">
      <Link to={"/"}>
      <Button variant="success">Back</Button>
      </Link>
      </div>
    </div>
  );
}
