function Image() {
    return (
        <>
        {/* Bad
            <img src="https://picsum.photos/300/200"/> */}

        {/* Good */}
        <img src="https://picsum.photos/300/200" alt="Random placeholder from Picsum Photos"/>

        {/* why?
        Screen readers read the alt text
If image is decorative → use alt=""
            */}
        </>
    );
}

export default Image;