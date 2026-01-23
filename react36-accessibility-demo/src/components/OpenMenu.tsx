function OpenMenu() {

    const openMenu = () => {
        alert("Menu opened!");
    };
    return(

        // Bad
        //     <div onClick={OpenMenu}>Open Menu</div>

        // Good
        <>
        <button onClick={openMenu}>Open Menu   </button>

        {/* // or if you use <div> */}

        <div
            role="button"
            tabIndex={0}
            onClick={openMenu}
            onKeyDown={(e) => e.key === 'Enter' && openMenu()}
            >
            Open Menu - keyPress
        </div>


        </>
       




        
    );
}

export default OpenMenu;