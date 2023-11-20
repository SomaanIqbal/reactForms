import { useState } from "react"

const Authenticate = ({ token }) => {

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [userName, setUserName] = useState('')

    const handleClick = async () => {

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            const jsonResponse = await response.json();
            console.log(jsonResponse)
            setSuccessMessage(jsonResponse.message) /*jsonResponse.data somewhere here maybe*/

            setUserName(jsonResponse.data.username)

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Authenticate</h2>

            {successMessage && <p>{successMessage}</p>}
            {error && (<p>{error}</p>)} {/*Again, what is this?*/}

            <button onClick={handleClick}>Authenticate Token</button>

            {userName && <h6>User Name:{userName}</h6>}
        </>

    )
}
export default Authenticate