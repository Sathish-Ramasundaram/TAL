Accessibility is process to make everyoone use the website. 
who use 
screen reader
vision and motor impairment. 
navigate with keyboard only. 

Motor impairment means difficulty or inability to control body movements the way most people can.

rmdir /s /q node_modules

del package-lock.json

npm install -g yarn

yarn -v        // To check the version

yarn install

yarn start

## Rule #1 of accessibility:
Use the correct HTML element.

Bad (inaccessible) example
<div onClick={()=> alert("Logged in")}>
Login
</div>

Good (accessible) example
        <button onClick={() => alert("Logged in")}>
            Login
        </button>

why?
✅ Keyboard works automatically
✅ Screen reader announces “Button: Login”
✅ No extra code needed

### Example: 2
Bad Accessible Form Input

<input type="text" placeholder="Enter text here">
</input>

Good Accessible Form Input
        <>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" placeholder="Enter text here" />
        </>

why?
Screen reader reads: “Username, edit text”
Label is connected using htmlFor

### Example 3: Keyboard Accessibility
Bad
<div onClick={OpenMenu}>Open Menu</div>

Good
        <button onClick={openMenu}>Open Menu   </button>

or if you use <div> 

        <div
            role="button"
            tabIndex={0}
            onClick={openMenu}
            onKeyDown={(e) => e.key === 'Enter' && openMenu()}
            >
            Open Menu - keyPress
        </div>

But 👉 prefer <button> always.

### Example 4: Accessible Image

Bad
            <img src="https://picsum.photos/300/200"/> 

Good
        <img src="https://picsum.photos/300/200" alt="Random placeholder from Picsum Photos"/>

why?
Screen readers read the alt text
If image is decorative → use alt=""
            
### Example 5: ARIA (use only when needed)
ARIA stands for Accessible Rich Internet Applications.

        <button aria-label="Close dialog">
            X
        </button>

Visually → user sees ❌ and understands
Screen reader → ❌ means nothing
aria-label="Close dialog" → tells screen reader what this button does
So a screen reader announces:
“Close dialog, button”

### Key Accessibility Rules (easy to remember)

✅ Use semantic HTML (button, nav, main, footer)
✅ Everything should work with keyboard
✅ Use <label> for inputs
✅ Provide alt text for images
✅ Don’t rely only on color (red ≠ error for everyone)