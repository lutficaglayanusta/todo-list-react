import React, { useState } from 'react'

function Header({form,addForm}) {

  const [input,setInput]=useState("");

  function handleSubmit(e){
    e.preventDefault();
    addForm(prev => [...prev,{text:input,completed:false}])
    setInput("")
  }
  function changeInput(e){
    setInput(e.target.value)
  }
  return (
    <div>
        <header className="header">
		<h1>todos</h1>
		<form onSubmit={handleSubmit}>
			<input value={input}  onChange={changeInput}  className="new-todo" placeholder="What needs to be done?" autoFocus />
		</form>
	    </header>
    </div>
  )
}

export default Header