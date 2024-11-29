import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'

function App() {

  return (
    <div className='mx-4'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  )
}

export default App
