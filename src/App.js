import './App.css';
import Details from './Components/Details/Details';
import Exercises from './Components/Exercises/Exercises';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <Exercises></Exercises>
        </div>
        <div className='col-6 col-md-4'>
          <Details></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
