// Posts a new joke to the database
export const postNewJoke = async (joke) => {
    let newJoke = {
        "text": joke,
        "told": false
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJoke)
    }

    const response = await fetch("http://localhost:8088/jokes", postOptions)
}

// Edits an existing joke's told status
export const updateJokeToldStatus = async (allJokes, jokeId) => {
    const joke = allJokes.find(joke => joke.id === jokeId)

    const patchOptions = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            told: !joke.told
        })
    }

    const response = await fetch(`http://localhost:8088/jokes/${joke.id}`, patchOptions)
}

// Deletes an existing joke
export const deleteJoke = async (allJokes, jokeId) => {
    const joke = allJokes.find(joke => joke.id === jokeId)

    const deleteOptions = {
        method: "DELETE",
    }

    const response = await fetch(`http://localhost:8088/jokes/${joke.id}`, deleteOptions)
}