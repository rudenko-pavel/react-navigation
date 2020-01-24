import React from 'react';
import './App.scss'; 
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import { BrowserRouter, Route,} from 'react-router-dom';

const App = () =>{
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <HeaderMenu />
                    <Route path="/" exact component={FirstPage} />
                    <Route path="/second" component={SecondPage} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;