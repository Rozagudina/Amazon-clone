    import React from "react";
    import SearchIcon from "@material-ui/icons/Search";
    import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
    import "./Header.css";
    const Header = () => {
        return (
            <div className="header">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                    className="header__logo"
                />

                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                </div>
                <SearchIcon className="header__searchIcon" />
                <div className="header__nav">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Signin</span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">&Order</span>
                    </div>

                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </div>
            </div>
        );
    };

    export default Header;
