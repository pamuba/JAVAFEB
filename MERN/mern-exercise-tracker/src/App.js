import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component.js";


function App() {
  return (
   <Router>
     <div className="container">
     <Navbar />
     <br />
     <Route path="/" exact component={ExercisesList}></Route>
     <Route path="/edit/:id" component={EditExercise}></Route>
     <Route path="/create" component={CreateExercise}></Route>
     <Route path="/user" component={CreateUser}></Route>
     </div>
   </Router>
  );
}

export default App;
