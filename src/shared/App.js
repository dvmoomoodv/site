import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Career } from 'pages';
import Menu from '../comonents/Menu';
import Footer from '../comonents/Footer';
import Contact from '../comonents/Contact';
class App extends Component {
    render() {
        return (
            <>
                <Menu></Menu>
                <div class='container'>
                    <Route exact path="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    <Route path="/career" component={Career}/>
                    <Route path="/posts" component={Posts}/>
                </div>
                <Contact></Contact>
                <Footer></Footer>
            </>
        );
    }
}

export default App;