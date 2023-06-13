import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



import HomePage from "./screens/HomePage/HomePage"
import FindJob from "./screens/FindJobs/FindJob";


function App() {
  return (
    <Router>
      <Header />
      <Navigation/>
      <main>
        <div>
          <Routes>
            <Route path='/' element={<HomePage/>} exact />
            <Route path='/findjobs' element={<FindJob/>} exact />
            <Route/>
            <Route/>
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App;
