import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import bg from './assets/bg.jpg'
import Footer from "./components/Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [ShowFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const toggleFinished = (params) => {
    setshowFinished(!ShowFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((items) => {
      return items.id != id;
    });

    setTodos(newTodos);
    saveToLS();
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((items) => {
      return items.id != id;
    });

    setTodos(newTodos);
    saveToLS();
  };
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
    saveToLS();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    console.log(e, e.target);
    let id = e.target.name;
    console.log("the id is ${id}");
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar />
    <div className="w-full min-h-screen bg-cover py-10 bg-[#fff1e6]" > 
    
      <div className="max-w-xl mx-auto p-10 bg-[#f4f3ee] border-2 border-[#F9DCC4] min-h-[70vh] rounded-md  " >
        <h1 className="font-semibold text-2xl text-center custom-font ">Manifest <br/> Manage your wishlist at one place</h1>
        <div className="py-2">
          <label className=" font-medium mt-2 custom-font">Add a wish </label>
          <div className="flex justify-center items-center gap-2">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Type here"
              className="input w-full active:outline-[#FEC89A] outline-2 "
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <=3}
              className="btn bg-[#FEC89A] "
          
             
            >
              Save
            </button>
          </div>
        </div>
        <input
          className=""
          onChange={toggleFinished}
          type="checkbox"
          checked={ShowFinished}
        />{" "} 
        <span className="custom-font">

        Show Finished
        </span>
        <h2 className="custom-font my-2">Your Wishes</h2>
        <div className="todos flex flex-col gap-4 max-h-[50vh] overflow-scroll p-4 ">
          
          {todos.map((item) => {
            return (
              (ShowFinished || !item.isCompleted) && (
                <div key={item.id} className=" shadow-xl flex items-center justify-between py-6 px-8 text-bold bg-[#F9DCC4] border-[#FEC89A] border-[2px] rounded-md custom-font">
                
                    
                    <div className={item.isCompleted ? "line-through" : ""} >
                      {item.todo}
                   
                  </div>
                  <div className="' flex items-center justify-center gap-2">
                  <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      id=""
                    />
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className=""
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className=""
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
}

export default App;
