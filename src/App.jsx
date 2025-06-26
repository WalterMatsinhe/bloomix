import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import Home from "./pages/Home"
import Services from "./pages/Services"

function App() {


  return (
    <>
      <Toaster/>
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home/>}/>
            <Route path='/services' element = {<Services/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
