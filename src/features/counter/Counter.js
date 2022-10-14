import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import {getPosts} from './postSlice'
import styles from './Counter.module.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "../../logo.svg";


export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const {posts,loading} = useSelector((state) => state.post);

  const incrementValue = Number(incrementAmount) || 0;
  useEffect(() => {
    dispatch(getPosts());
  }, []);
// console.log(posts,'rahul');
if(loading) {
  return <h2>Loading...</h2>
}
  return (
    <div>

    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>

      <Row xs={1} md={4} className="g-4 ms-5 me-5">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
      {posts.slice(0, 50).map((item) => (
        <Col key={item.id}>
          <Card >
            <Card.Img  variant="top" src={item.url} width={50} height={250} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
               {item.id}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      {/* ))} */}
      {/* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
