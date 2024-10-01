import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Alle } from './pages/Alle';
import { Indland } from './pages/Indland';
import { Udland } from './pages/Udland';
import { Teknologi } from './pages/Teknologi';
import { Sport } from './pages/Sport';
import { Politik } from './pages/Politik';
import { Samfund } from './pages/Samfund';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Alle />}/>
          <Route path='indland' element={<Indland />}/>
          <Route path='udland' element={<Udland />}/>
          <Route path='teknologi' element={<Teknologi />}/>
          <Route path='sport' element={<Sport />}/>
          <Route path='politik' element={<Politik />}/>
          <Route path="samfund" element={<Samfund />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
