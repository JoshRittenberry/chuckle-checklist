import { useEffect, useState } from "react"
import { postNewJoke } from "./services/jokeService"
import "./App.css"
import stevePic from "./assets/steve.png"
import { getAllJokes } from "./services/getJokes"

export const App = () => {

  const [newOneLiner, setNewOneLiner] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

  useEffect(() => {
    // sets allJokes
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)

      // sets untoldJokes
      const noJokes = jokesArray.filter(joke => joke.told === false)
      setUntoldJokes(noJokes)

      // sets toldJokes
      const yesJokes = jokesArray.filter(joke => joke.told === true)
      setToldJokes(yesJokes)
    })
  }, [])

  return <div className="app-container">
      <header className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </header>
      <h2>Add Joke</h2>
      <section className="joke-add-form">
        <input 
          className="joke-input"
          type="text"
          placeholder="New One Liner"
          value= {newOneLiner}
          onChange={(event) => {
            const updatedOneLiner = event.target.value
            setNewOneLiner(updatedOneLiner)
            console.log(updatedOneLiner)
          }}
        />
      <button className="joke-input-submit" onClick={() => {postNewJoke(newOneLiner); setNewOneLiner("")}}>Add</button>
      </section>
      <section className="joke-lists-container">
        {/* UNTOLD JOKES CONTAINER */}
        <div className="joke-list-container">
          <h2>Hello
            <span className="untold-count">
              {untoldJokes.length}
            </span>
          </h2>
          {/* UNTOLD JOKES LIST */}
          {untoldJokes.map(joke => {
            return (
              <li kep={joke.id} className="joke-list-item">
                {joke.text}
              </li>
            )
          })}
        </div>

        {/* TOLD JOKES CONTAINER */}
        <div className="joke-list-container">
          <h2>Hello
            <span className="told-count">
              {toldJokes.length}
            </span>
          </h2>
          {/* TOLD JOKES LIST */}
          {toldJokes.map(joke => {
            return (
              <li kep={joke.id} className="joke-list-item">
                {joke.text}
              </li>
            )
          })}
        </div>
      </section>
    </div>
}