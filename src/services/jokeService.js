import { App } from "../App"

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