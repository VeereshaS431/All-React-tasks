
import './App.css';
import CustomCard from './bootsrap/cards';
import DarkVariantExample from './bootsrap/carousel';
import BasicExample from './bootsrap/navbar';

function App() {
  return (
   <>
   <BasicExample/>
   <DarkVariantExample/>
   <div className='cards'>
   <CustomCard/>
   <CustomCard/>
   <CustomCard/>
   </div>
   
   </>
  );
}

export default App;
