import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import App from './App';
import Future from './Future';


function Menu() {
    return(
        
        <Router className='Menu1'>
            <div >
             <nav className='menu1'>
                
                <Link className='Menu1' to='/'>Коты в нашей жизни</Link>
                <Link className='Menu1' to='/future'>Забота о котах</Link>

                </nav>
            </div>
            <Routes className='Menu1'> 
                <Route className='Menu1' path='/' element={<App/>}/>
                <Route path='/future' element={<Future/>}/>

            </Routes>
        </Router>
    )
}

export default Menu