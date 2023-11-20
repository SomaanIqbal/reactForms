import { useState } from "react"

const SignUpForm = ({ setToken }) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validationError, setValidationError] = useState(false)
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            setValidationError(false)
            if (userName.length < 8) {
                setValidationError(true)
                return
            }

            // console.log('short message');

            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"

                    },
                    body: JSON.stringify({
                        username: userName,
                        password: password
                    })
                })

            const jsonResponse = await response.json()
            // console.log(jsonResponse);

            setToken(jsonResponse.token);


        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <>
            <h2>Sign Up</h2>

            {error && <p>{error}</p>} {/*what is this &&*/}

            {validationError && <p>Make sure your username is at least 8 characters</p>}

            <form onSubmit={handleSubmit}>
                <label> Username: <input value={userName} onChange={(event) => setUsername(event.target.value)} /></label>

                <label> Password: <input value={password} onChange={(event) => setPassword(event.target.value)} /></label>

                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm