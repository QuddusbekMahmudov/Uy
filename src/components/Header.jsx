import React from 'react'
import logo from '../img/logo.png'
import oqlogo from '../img/oqlogo.png'
import telf from '../img/tel.png'
import menu from '../img/menu.png'


const Header = () => {
    return (
        <header className='w-full max-w-[1665px] mx-auto py-8 px-5 '>
            <div className="container flex justify-between md:items-center sm:items-start">
                <div className='md:hidden'></div>
                <ul className='hidden xl:flex justify-between items-center space-x-5'>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Проекты</a>
                    </li>
                    <li>
                        <a href="#">Наши работы</a>
                    </li>
                    <li>
                        <a href="#">Заказчику</a>
                    </li>
                    <li>
                        <a href="#">Отзывыя</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <img className='hidden md:block' src={logo} alt="logo" />
                <img className='md:hidden' src={oqlogo} alt="oqlogo" />
                <img className='md:hidden' src={menu} alt="menu" />

                <div className="hidden md:flex">
                    <img className='mr-3' src={telf} alt="telefon rasm" />
                    <span>+7(999) 000-00-00</span>
                </div>

                <button className='hidden md:block py-4 px-7 bg-[#60B064] rounded-md text-white '>Рассчитать стоимость</button>
            </div>
        </header>
    )
}

export default Header
