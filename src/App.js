import logo from './logo.svg';
import './App.css';

// import Test1 from "./components/1-componentClass";
// import Test2 from "./components/2-componentFunctional";


// function App() {
//   return(
//     <div>
//       <Test1/>
//       <Test2/>
//     </div>
//   );
// }

import QuizComponent from "./components/quiz-component";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
   <QuizComponent/>
 );
}

export default App;
