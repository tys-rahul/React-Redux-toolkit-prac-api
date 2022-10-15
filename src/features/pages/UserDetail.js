import React, { Component, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../counter/userSlice";
import { Link, useParams } from "react-router-dom";

export default function UserDetail() {
    let userID = [];
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);
  const paramsUserId = useParams()
  let userDetail = users.find(
    (p) => p.id == paramsUserId.id
  );
  console.log(userDetail,'rahul');
  if (loading) {
    return <h2 className='text-center'>Loading User's Data Please Wait ...</h2>;
  }
  return (
    <div>
      <h1 className='text-center mt-5 mb-5'>User's Details Section</h1>
      <div className='container'>
        <Table className="tableMain" striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>User id</th>
              <th>Full Name</th>
              <th>Phone No.</th>
              <th>website</th>
              <th>City</th>
              <th>Address</th>
            </tr>
          </thead>
            <tbody >
              <tr>
                <td>{userDetail.id}</td>
                 <td>{userDetail.name}</td>
                 <td>{userDetail.phone}</td>
                 <td>{userDetail.website}</td>
                 <td>{userDetail.address.city}</td>
                 <td>{userDetail.address.suite} , {userDetail.address.street} - {userDetail.address.zipcode} </td>
              </tr>
            </tbody>
     
        </Table>
      </div>
      <div className="text-center">
      <Link to={"/user"}>
      <Button variant="success">Back</Button>
      </Link>
      </div>
    </div>
  );
}
