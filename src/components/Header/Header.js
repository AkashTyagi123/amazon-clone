import React from 'react';
import "./Header.css";
import {Link,useHistory} from 'react-router-dom';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../StateProvider/StateProvider';
import {auth} from '../../Firebase/Firebase';
function Header() {
    const history = useHistory();
    const [{user,basket}] = useStateValue();
    const login = ()=>{
        if(user){
        auth.signOut();
        history.push('/login');
        }
    }
 
    return (
        <nav className="header">
            <Link to="/">
            <img alt="logo" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

           {/* <div className="header__search">
           <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
           </div> */}

           <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Hello,</span>
                    <span onClick={login} className="header__optionLineTwo">{user ? 'Sign out':'Sign In'}</span>
                    </div>
                </Link>


                <Link to="/login" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>


                <Link to="/login" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__optionBasketIcon"/>
    <span className="eader__optionLineTwo basket_count">{basket?.length}</span>
                    </div>
                </Link>
           </div>
        </nav>
    )
}

export default Header
