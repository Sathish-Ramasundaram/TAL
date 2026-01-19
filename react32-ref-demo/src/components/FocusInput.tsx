import React, {useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) { 
            inputRef.current.focus();
        }
    };

    return <div>
        <input ref={inputRef} placeholder="Type here.." />
        <button onClick={handleClick}>Focus Input</button>
    </div>;
};

export default FocusInput;