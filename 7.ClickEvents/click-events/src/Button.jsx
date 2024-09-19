

function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";

    return(
        <button onClick={(e) => handleClick(e)}>Click Me &#128512;</button>
    );
}
export default Button