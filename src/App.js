import './App.scss'
import Sidebar from './Component/Sidebar/Sidebar';
import MainDash from './Component/Main/MainDash';
import Right from './Component/Right/Right';
function App() {
  return (
    <div className="App">
     <div className='GlassContainer'>
      <Sidebar/>
      <MainDash />
      <Right/>

     </div>
    </div>
  );
}

export default App;
