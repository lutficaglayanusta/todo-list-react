import React from 'react'

function Main({form,setForm}) {
	function onChange(text){
		const cloned_form = [...form]
		const ItemIndex = cloned_form.findIndex(item => item.text === text)
		const item = form[ItemIndex]
		item.completed=!item.completed
		setForm(cloned_form)
	}
	function deleteItem(text){
		const cloned_form = [...form]
		const ItemIndex = cloned_form.findIndex(item => item.text === text)
		cloned_form.splice(ItemIndex,1)
		setForm(cloned_form)
	}

  return (
    <div>
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			{
				form.map((item,index)=>(
					<li key={index} className={item.completed ? 'completed':''}>
						<div className="view">
							<input className="toggle" type="checkbox" checked={item.completed} onChange={()=>onChange(item.text)} />
							<label >{item.text} </label>
							<button onClick={()=>deleteItem(item.text)} className="destroy"></button>
						</div>
					</li>
				))
			}
			
			
			
		</ul>
	</section>
    </div>
  )
}

export default Main