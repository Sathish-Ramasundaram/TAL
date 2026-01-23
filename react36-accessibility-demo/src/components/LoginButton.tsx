function LoginButton() {
    return (

        // Bad (inaccessible) example
        // <div onClick={()=> alert("Logged in")}>
        //     Login
        // </div>

        // Good (accessible) example
        <button onClick={() => alert("Logged in")}>
            Login
        </button>

        // why?
        //✅ Keyboard works automatically
        // ✅ Screen reader announces “Button: Login”
        // ✅ No extra code needed


    );
}

export default LoginButton;