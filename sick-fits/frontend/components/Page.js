import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node
};

export default Page;
