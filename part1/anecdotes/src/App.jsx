import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const incrementVotes = () => {
    const votesCopy = [ ...votes ]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes[selected]}
      <br />
      Has {votes[selected]} votes
      < br/>
      <button onClick={handleRandom}>Next Anecdote</button>
      <button onClick={incrementVotes}>Vote</button>
      <br />
      Anecdote with most votes:
      <br />
      {anecdotes[mostVoted]}
      <br />
      Has {votes[mostVoted]} votes
    </div>
  )
}

export default App