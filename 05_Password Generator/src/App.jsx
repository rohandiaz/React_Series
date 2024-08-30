import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  // useRef hook for the password input field
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand('copy');
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-5 py-4 my-8 bg-gray-900 text-orange-500">
      <h1 className="text-white text-center my-3 text-xl font-bold">
        Password Generator
      </h1>

      {/* Password input box with copy button */}
      <div className="relative mb-4">
        <div className="flex shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-800 text-white rounded-l-md"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 transition duration-300 rounded-r-md"
          >
            Copy
          </button>
        </div>
        {copied && (
          <span className="absolute top-full mt-1 left-0 bg-green-500 text-white px-2 py-1 text-xs rounded">
            Password copied to clipboard!
          </span>
        )}
      </div>

      {/* Settings for length, numbers, and special characters */}
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center justify-between gap-x-2">
          <label className="flex items-center gap-x-1">
            <span className="text-white">Length:</span>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="ml-2">{length}</span>
          </label>
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <label className="flex items-center gap-x-2 text-white">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-x-2 text-white">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            Include Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
