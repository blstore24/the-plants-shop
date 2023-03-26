import React from 'react';
import style from './Header.module.scss'
import { Link } from "react-router-dom";
import {HOME_ROUTE, PRODUCTS_ROUTE} from "../../utils/consts";

const Header = () => {
    return (
        <div className='container'>
            <header className={style.header}>
                <nav className={style.navbar}>
                    <div className={style.logo}>
                        <Link to={HOME_ROUTE} className={style.logoLink}>
                            THE<br />
                            PLANTS
                        </Link>
                    </div>
                    <ul className={[style.list, style.pageLinks].join(' ')}>
                        <li className={style.item}>
                            <Link className={style.linkToPage} to={PRODUCTS_ROUTE}>Растения</Link>
                        </li>
                        <li className={style.item}>
                            <a href="/">Уход</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">Горшки</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">Блог</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">О Нас</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">Доставка и Оплата</a>
                        </li>
                    </ul>
                    <ul className={[style.list, style.icons].join(' ')}>
                        <li className={style.item}>
                            <button className={[style.searchBtn, style.btn].join(' ')}>se</button>
                        </li>
                        <li className={style.item}>
                            <button className={[style.searchBtn, style.btn].join(' ')}>ca</button>
                        </li>
                        <li className={style.item}>
                            <button className={[style.searchBtn, style.btn].join(' ')}>ac</button>
                        </li>
                        <li className={style.item}>
                            <button className={[style.searchBtn, style.btn].join(' ')}>ca</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;