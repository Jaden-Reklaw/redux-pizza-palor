import React, { Component } from 'react';

//Connect to the redux store
import {connect} from 'react-redux';

//Import styles to be used on Header
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="main-nav">
                        <li><h1>Prime Pizza</h1></li>
                        <li className="push">Total: <span>{this.props.reduxStore.cart.total}</span></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});



export default connect(mapStateToProps)(Header);