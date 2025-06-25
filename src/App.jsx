import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import Home from "./pages/Home"

function App() {


  return (
    <>
      <Toaster/>
        <BrowserRouter>
          <Routes>
            <Route index element ={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
