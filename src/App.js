
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React,{useEffect} from 'react';
import { fetchTodos } from './redux/slice/todo';


// // first way:
// function App() {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   console.log(" state ", state);

//   if (state.todo.isLoading) {
//     return <h1>Loading..</h1>
//   }
//   return (

//     <div className="App">
//       <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
//       {
//         state.todo.data && state.todo.data.map((e) => 
//         // {console.log("status",e.completed)}
//         <div style={{ height: 200, width: 300, backgroundColor: "gray",color:"black", margin: 10 }}>
//           <h3>ID :{e.id} </h3>
//           <h3>UserID: {e.userId}</h3>
//           <h3>Title: {e.title}</h3>
//           <h3>completed: {e.completed == "true" ? "true" :"false"}</h3>

//         </div>
//         )
//       }
//     </div>
//   );
// }
// export default App;



//Second way
function App() {
  const todos = useSelector((state) => state);
  console.log(" Data", todos);

  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchTodoData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log("response", response)
      const T = await response.json();

      console.log(T);
      dispatch(fetchTodos(T));
    };
    fetchTodoData();

  }, []);



  return (
    <div>
{/* <button onClick={fetchTodoData()}>Fetch Todo</button> */}
      
    </div>
  );
}

export default App;
