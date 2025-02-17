import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tr>
          <td>Good: </td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral: </td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad: </td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total: </td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average: </td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Positive: </td>
          <td>{positive} %</td>
        </tr>
      </table>
    </div >
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App