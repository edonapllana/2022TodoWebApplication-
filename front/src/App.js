import { useEffect, useState } from "react";
import { readTodos } from "../functions";
import Preloader from "../components/Preloader";
import { createTodo } from "../functions";


function App() {
  const [todo, setTodo] = useState({title: '', content: ''});

  useEffect(() =>{
    const fetchData = async ()=> {
      const result = await readTodos();
      console.log(result);
    }
    fetchData;
  }, [])

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
							<input id="icon_prefix" type="text" className="validate" />
							<label htmlFor="icon_prefix">Title</label>
						</div>
						<div className="input-field col s6">
							<i className="material-icons prefix">description</i>
							<input id="description" type="tel" className="validate" />
							<label htmlFor="icon_telephone">content</label>
						</div>
					</div>
          <div className="row right-align">
            <button className="waves-effect waves-light">Save</button>
          </div>
				</form>
				<Preloader />
				<div class="collection">
					<a href="#!" class="collection-item">
						Alvin
					</a>
					<a href="#!" class="collection-item active">
						Alvin
					</a>
					<a href="#!" class="collection-item">
						Alvin
					</a>
					<a href="#!" class="collection-item">
						Alvin
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
