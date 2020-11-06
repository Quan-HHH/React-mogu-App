import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes/index'
import { renderRoutes } from 'react-router-config'
import store from './store'
import './assets/font/iconfont.css'


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    { renderRoutes(routes) }
                </HashRouter>
            </Provider>
        </div>
    )
}

export default App;