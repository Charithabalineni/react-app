import React, {Component} from 'react';
import Header from './header';
import Section from './section';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <Header />
                <Section />
            </div>
        );
    }
}

export default Home;