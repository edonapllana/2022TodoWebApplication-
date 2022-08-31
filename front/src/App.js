import { useEffect, useState } from "react";
import { readTodos } from "./functions";
import Preloader from "./components/Preloader";
import { createTodo } from "./functions";


function App() {
  const [todo, setTodo] = useState({title: '', content: ''});
  const [todos, setTodos] = useState(null);
  const [currentId, setCurrentId] = useState(0);
  
  useEffect(() => {
    let currentTodo = currentId!=0?todos.find(todo=>todo._id===currentId):{title: '', content: ''}
    setTodo(currentTodo)
  }, [currentId])

  useEffect(() =>{
    const fetchData = async ()=> {
      const result = await readTodos();
      setTodos(result);
    }
    fetchData;
  }, [])

  const clear = ()=> {
    setCurrentId(0);
    setTodo({title: '', content: ''});
    
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const result = await createTodo(todo);

    console.log(result);
  }
  return (
		<div className="container">
			<div className="row">
				<form className="col s12" onSubmit={onSubmitHandler}>
					<div className="row">
						<div className="input-field col s6">
							<i className="material-icons prefix">title</i>
							<input
								id="icon_prefix"
								type="text"
								className="validate"
                value ={todo.title}
								onChange={(e) => setTodo({ ...todo, title: e.target.value })}
							/>
							<label htmlFor="icon_prefix">Title</label>
						</div>
						<div className="input-field col s6">
							<i className="material-icons prefix">description</i>
							<input
								id="description"
								type="tel"
								className="validate"
                value={todo.content}
								onChange={(e) => setTodo({ ...todo, content: e.target.value })}
							/>
							<label htmlFor="icon_telephone">content</label>
						</div>
					</div>
					<div className="row right-align">
						<button className="waves-effect waves-light">Save</button>
					</div>
				</form>
				{!todos ? (
					<Preloader />
				) : todos.length > 0 ? (
					<ul className="collection">
						{todos.map((todo) => (
							<li key = {todo._id} 
              onClick={() => setCurrentId(todo._id)}
              className="collection-item">
								<div>
									<h5>{todo.title}</h5>
									<p>
										{todo.content}
										<a href="#!" className="secondary-content">
											<i className="material-icons">send</i>
										</a>
									</p>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div>
						<h5>Nothing to load :c!</h5>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
