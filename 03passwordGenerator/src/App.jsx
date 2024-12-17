import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  /*
  Variables to store and set the length, numbers, chars. 
  Password and setPassword is used because we need a defult value in password field on window load.
  */
  const [length, setlength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  /*
  Used useRef hook to take the refence of password for copy button.
  useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  */
  const passwordRef = useRef(null);

  /*
  Password generator function with useCallback hook.
  useCallback is a React Hook that lets you cache a function definition between re-renders.
  */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"; //Special Charcters

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  /*
  Created a function to copy the password to clipboard.
  */
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  /*
  Used useEffect hook to call the passwordGenerator function as cannot directly call it with all the dependencies.
  useEffect is a React Hook that lets you synchronize a component with an external system.
  */

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 font-semibold">
          TMWEBDEV Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />

            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="characterInput">Special character</label>
          </div>
        </div>
        <ul className="list-disc p-4">
          <li>
            Choose password length from 5 to 100.
          </li>
          <li>
            Allowed special Characters: ! @ # $ % ^ & * - _ + = [ ] { } ~ ` 
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
