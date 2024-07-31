import React from 'react'
import telegram from '../img/telegram.png'
import logofoter from '../img/logofoter.png'

const Foter = () => {
  return (
    <div className='w-full max-w-[1665px] mx-auto py-5 px-5'>

      <div className="flex justify-between items-center mb-8">
        <img src={logofoter} alt="logofoter" />
        <ul className='w-[448px] flex justify-between items-center space-x-5'>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Проекты</a>
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
        <span>+7(999) 000-00-00</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <span>2024</span>
          <p className='ml-11'>Политика конфиденциальности</p>
        </div>
        <img src={telegram} alt="telegram rasmi" />
      </div>
    </div>
  )
}

export default Foter
