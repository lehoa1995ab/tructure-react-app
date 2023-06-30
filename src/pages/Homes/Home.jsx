import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { counterActions } from '@stores/slices/counter.slice'

export default function Home() {
  const counterStore = useSelector(store => store.counterStore)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("counter store", counterStore);
  },[])
  return (
    <div>
      <h1>Home</h1>
      <p>counter: {counterStore.counter}</p>
      <button onClick={() => {
        dispatch(
          counterActions.increment()
        )
      }}>Tang counter</button>
      <button onClick={() => {
        dispatch(
          counterActions.decrement()
        )
      }}>giam counter</button>
      <button onClick={() => {
        dispatch(
          counterActions.resetCounter(
            {
              number:100,
              temp:2
            }
          )
        )
      }}>resetcounter</button>
    </div>
  )
}