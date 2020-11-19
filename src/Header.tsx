import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Link to="/">
            <div className='header'>
                <img
                    className='header__logo'
                    src='https://amazon-press.jp/.imaging/AMZ_detail_asset_png/dam/c104a672-d691-42cd-aebc-cab83f8c3b12.png' />   
                
                <div className="header__search">
                    <input className="header__searchInput" type="text"/>
                    <SearchIcon className="header__searchIcon" />
                </div>

                <div className="header__nav">
                    <div className="header__option">
                        <div className="header__optionLineOne">Hello Guest</div>
                        <div className="header__optionLineTwo">Sign In</div>
                    </div>
                    <div className="header__option">
                        <div className="header__optionLineOne">Returns</div>
                        <div className="header__optionLineTwo">& Orders</div>
                    </div>
                    <div className="header__option">
                        <div className="header__optionLineOne">Your</div>
                        <div className="header__optionLineTwo">Prime</div>                    
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon className="" />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>                      
                </div>
            </div>
        </Link>
    )
}

export default Header
