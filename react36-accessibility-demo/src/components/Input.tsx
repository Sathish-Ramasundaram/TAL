function Input() {
    return (

        // Bad Accessible Form Input

        // <input type="text" placeholder="Enter text here">
        // </input>

        // Good Accessible Form Input
        <>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" placeholder="Enter text here" />
        </>

        // why?
        // Screen reader reads: “Username, edit text”
        // Label is connected using htmlFor

    );
}

export default Input;