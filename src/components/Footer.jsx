import React from 'react'

function Footer({setForm,form,filter,setActiveFilter}) {

  function clearCompleted(){
	const cleaned_todos = [...form];

	const new_todos = cleaned_todos.filter((todo)=>!todo.completed)
	setForm(new_todos)
  }

  return (
    <div>
        <footer className="footer">
		<span className="todo-count">
			<strong>{form.length}</strong>
			item{form.length > 1 && 's'} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" onClick={()=>setActiveFilter("all")} className={filter === "all" ? "selected" : ""}>All</a>
			</li>
			<li>
				<a href="#/" onClick={()=>setActiveFilter("active")} className={filter === "active" ? "selected" : ""}>Active</a>
			</li>
			<li>
				<a href="#/" onClick={()=>setActiveFilter("completed")} className={filter === "completed" ? "selected" : ""}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
    </div>
  )
}

export default Footer