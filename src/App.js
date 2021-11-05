import React, { Component } from 'react';
import './App.css';
import Mpm from "./component/mpm";
import Staking from "./component/announcement";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 0
        }
        this.tz = this.tz.bind(this)
    }
    tz() {
        var { route } = this.state
        this.setState({ route: 1 })
    }
    onStaking() {
        console.log("staking clicked");
        this.setState({ route: 2 });
    }

    render() {

        var login = (
            <div className='login' >
                <div>
                    <img src={require('./img/LOGO.png')} />
                </div>
                <div className='login_div' onClick={this.tz}>
                    <img style={{ maxWidth: '70%', maxHeight: '40%' }} src={require('./img/mining.png')} />
                </div>
                <div className='login_div'>
                    <img style={{ maxWidth: '50%', maxHeight: '30%' }} src={require('./img/dao.png')} />
                </div>
                <div className='login_div' onClick={() => this.onStaking()}>
                    <img style={{ maxWidth: '70%', maxHeight: '40%' }} src={require('./img/staking.png')} />
                </div>
            </div>
        )
        var index = <Mpm />
        let staking = <Staking />
        let show = () => {
            if (this.state.route === 0) {
                return login;
            } else if (this.state.route === 1) {
                return index;
            } else if (this.state.route === 2) {
                return staking;
            }
        }
        return (
            <div style={{ mixHeight: document.documentElement.clientHeight }} >
                {show()}
            </div>
        );
    }
}

export default App;
