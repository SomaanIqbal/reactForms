import { useState } from "react"

const Authenticate = ({ token }) => {

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

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
            setSuccessMessage(jsonResponse.message)
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
        </>

    )
}
export default Authenticate