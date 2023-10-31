import { useState, useCallback ,useEffect, useRef} from 'react'


function App() {
  const [len, setlen] = useState(0)
  const [number, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [len, number, charAllowed, setPassword])

  const copypassword= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()}, [len, number, charAllowed , passwordGenerator]
  )



  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-10 py-8 my-4 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
              type='text' 
              value={password} 
              className="outline-none w-full py-1 px-3" 
              placeholder='Passowrd'
              readOnly
              ref={passwordRef}
            />
            <button onClick={copypassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy </button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type='range'
              min={0}
              max={100}
              value={len}
              className='cursor-pointer'
              onChange={(e)=> {setlen(e.target.value)}}
              />
              <label>Lenght :{len}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={number}
                  id="numberInput"
                  onChange={() => {
                      setNumberAllowed((prev) => !prev);
                  }}
                />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Special Characters</label>
            </div>
          </div>      
        </div>
    </>
  )
}

export default App
