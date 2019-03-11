import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header/Header';
import NotFound from './components/notfount/NotFound';
import Detail from './components/details/Details';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './index.css';
import List from './components/list/list';


const App=()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={List} exact />
                <Route path="/currency/:id" component={Detail} exact />
                <Route component={NotFound} exact />

            </Switch>
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)