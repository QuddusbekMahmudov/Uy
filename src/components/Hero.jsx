import React from 'react'
import kottarasm from '../img/uyrasmi.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import uyl2 from '../img/uyl2.png'
import fr1 from '../img/fr1.png'
import fr2 from '../img/fr2.png'
import fr3 from '../img/fr3.png'
import strelka from '../img/strelka.png'
import uy1 from '../img/rasm.png'
import uy2 from '../img/Rectangle 14.png'
import uy3 from '../img/Rectangle 23.png'
import uy4 from '../img/Rectangle 24.png'
import uy5 from '../img/Rectangle 25.png'
import uy6 from '../img/Rectangle 16.png'
import yulduz from '../img/yulduz.png'
import stchap from '../img/ctrelchap.png'
import stong from "../img/ctrelo'ng.png"
import matn from '../img/matn.png'
import p from '../img/p.png'
import forma from '../img/forma.png'

const Hero = () => {

  return (
    <div className='w-full max-w-[1665px] mx-auto py-8 px-5'>

      {/* 1-qism matn va rasm */}

      {/* 1-qism matn */}
        <div className=' flex justify-between items-center pb-20'>

          <h1 className='font-medium leading-[100%] text-[60px] w-[830px] '>Строим дома, в которых сбываются мечты</h1>
          <p className='hidden xl:block text-[25px] leading-[150%] w-[653px]'> Мы используем традиционные технологии каркасного домостроения, взятые от скандинавских стран в области строительства каркасных домов</p>
        </div>

        {/* 1-qism rasm */}
           <img className='rounded-lg pb-20' src={kottarasm} alt="uy rasmi" />

           {/* 2-qism  */}
              <div className='w-full max-w-[1665px] mx-auto mt-5 mb-10 px-5 bg-black rounded-[44px]'>
                <div className='py-5 px-5'>
                  <h2 className='text-white leading-[60px] text-[60px] mb-10'>О компании</h2>

                  <div className='flex justify-between items-start mb-20'>

                    <div className=' w-[955px] text-white text-[25px] leading-[37.5px]'>
                      <p className='mb-10'>
                        Наша компания занимается проектированием и строительством загородных домов, коттеджей и бань из профилированного бруса. Для сооружения всех конструкций мы используем профилированный брус — экологически чистый, натуральный строительный материал.
                      </p>
                      <p >
                        Мы располагаем большим арсеналом готовых проектов. С радостью вносим изменения в уже имеющийся проект.  Если Вас не устроит наш вариант, специалисты нашей компании разработают индивидуальный проект<br /> специально для Вас.
                      </p>
                    </div>

                    <div className='text-white'>
                      <span className='text-[60px] leading-[60px] '>более 100</span><br />
                      <span className='text-[25px] leading-[37.5px] inline-block mb-5 mt-2' > проектов за все время</span><br />
                      <span className='text-[60px] leading-[60px] inline-block mb-2 '>более 550</span><br />
                      <span className='text-[25px] leading-[37.5px]'>семей доверили нам<br /> свой дом</span>
                    </div>

                  </div>

                  <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>

                    <li>
                      <img src={img1} alt="logo" />
                    </li>

                    <li >
                      <img src={img2} alt="logo" />
                    </li>
                    <li>
                      <img src={img3} alt="logo" />
                    </li>

                  </ul>

                </div>
              </div>

              {/* 3-qism */}
              <div className="w-full max-w-[1665px] mx-auto  flex items-center mb-20">
                <div className='mr-28'>
                  <h2 className='leading-[60px] text-[60px] mb-10'>Проекты и цены</h2>
                  <img className='rounded-[15px]' src={uyl2} alt="uy rasmi" />
                </div>

                <div className='w-full max-w-[500px] '>
                  <h3 className='leading-[60px] text-[60px] mb-5'>Дом в д. Малая Дубна</h3>
                  <p className='text-[25px] leading-[37.5px] mb-5'>Ленинградская область, Кингисеппский район, массив Тикопись, СНТ<br /> «Фосфорит»</p>
                  <ul className='flex justify-between space-x-4 mb-5'>
                    <li><img src={fr1} alt="rasm" /></li>
                    <li><img src={fr2} alt="rasm" /></li>
                    <li><img src={fr3} alt="rasm" /></li>
                  </ul>
                  <img src={strelka} alt="ctrelka" />
                </div>
              </div>

              {/* 4-qism */}
             <h2 className='w-[625px] leading-[60px] text-[60px] mb-10'>Выбирайте более чем из 100 проектов</h2>
              <ul className='mb-20 grid gap-5 grid-cols-3'>
                          <li>
                            <img src={uy2} alt="uy" />
                          </li>
                          <li>
                            <img src={uy1} alt="uy" />
                          </li>
                          <li>
                            <img src={uy6} alt="uy" />
                          </li>
                          <li>
                            <img src={uy3} alt="uy" />
                          </li>
                          <li>
                            <img src={uy4} alt="uy" />
                          </li>
                          <li>
                            <img src={uy5} alt="uy" />
                          </li>
              </ul>  

              {/* 5-qism */}
              <h2 className='text-center leading-[60px] text-[60px] mb-10'>Что о нас говорят</h2>
              <div className='w-full max-w-[1365px] mx-auto flex justify-between items-center mb-20'>

              <div><img src={stchap} alt="ctrelka" /></div>
              <div className='border-2 text-green-500 py-8 px-8 rounded-lg'>
              <div className='flex space-x-10 mb-10 '>
                  <img src={matn} alt="matn" />
                  <img src={yulduz} alt="yulduz" />
                </div>
                <img src={p} alt="p" />
              </div>
              <div> <img src={stong} alt="ctrelka" /></div>
              </div> 

              {/* 6-qism */}
            <div className='w-full max-w-[1665px] mx-auto bg-black rounded-2xl flex justify-center'>

            <div className='text-white w-full max-w-[943px] text-center py-40'>
              <h2 className='leading-[60px] text-[60px] mb-8'>Устали подбирать варианты?</h2>
              <p className='text-[25px] leading-[37.5px] mb-8'>Оставьте контакты, вам перезвонит наш сотрудник архитектурного бюрои за 15 минут поможет определится с базовым вариантом</p>
              <img className='mb-8' src={forma} alt="forma" />
              <p className='text-[25px] leading-[37.5px]'>Заявки обрабатываются с 10:00 до 19:00, по будням. <br /> Передавая свои данные, вы даете согласие на обработку персональных данных</p>
              </div>
            </div>

    </div>
  )
}

export default Hero
