import { useState, useCallback } from 'react'


function App() {
  const [len, setlen] = useState(8)
  const [number, setnumber] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="[A-Za-z]"

  },[lenght, number, charAllowed, setpassword]) 
  {
    if(number) str+= "[0-9]"
    if(charAllowed) str+="!@#$%^&*"

    for(let i=1 ; i<=len; i++)
    {
      let char= Math.floor(Math.random * str.lenght+1)
      pass = str.charAt(char)
    }

    setpassword(pass)

  }

  return (
    <>
    <div className='w-full max-w-max-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-slate-950'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'value={password} />

      </div>
    </div>
    </>
  )
}

export default App
