import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

class Nav extends PureComponent {
    render() {
        return (
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/sell">
                    <a>Sell</a>
                </Link>
            </div>
        );
    }
}

Nav.propTypes = {};

export default Nav;
