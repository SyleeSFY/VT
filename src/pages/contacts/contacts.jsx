import React from 'react';
import '../../styles/contacts.css';
import OurGraduatesInfoIMG from '../../components/Icons/VT.png';
import Geo from '../../components/Iconss/geo.png'
import Mail from '../../components/Iconss/mail.png'
import Mobile from '../../components/Iconss/phone.png'
import Contact from '../../components/Iconss/people.png'
const Contacts = () => {
  return (
    <div className='home'>

      {/* <div className="FlexEnd" style={{ paddingRight: 60 }}>
        <div className="BlockTittleHome">
          <span className='VT'>Контакты</span>

        </div>
      </div> */}
      <div className="Block">
        <div className="FlexCenter">
          <div className="BlockTittleHome">
            <span className='TittleHome' style={{ width: "80%" }}>Контакты для вашего удобства!</span>
            <div className="Stip" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="BlockContacts">
          <div className="LeftBlockContacts">
            <div className="Left">
              <div className="FirstBlock">
                <div className="ContactsInfo">
                  <img src={Geo} alt="" className='ContactsIMG' />
                  <p>Адрес</p>
                  <p className='ContactsContent TEST'>214013, г. Смоленск, Энергетический проезд, д. 1</p>
                </div>
              </div>
              <div className="SecondBlock">

                <div className="ContactsInfo">
                  <img src={Mail} alt="" className='ContactsIMG' />
                  <p>Почта</p>
                  <p className='ContactsContent TEST'>VT@sbmpei.ru</p>

                </div>
              </div>
            </div>
            <div className="Right">
              <div className="FirstBlock">
                <div className="ContactsInfo">
                  <img src={Mobile} alt="" className='ContactsIMG' />
                  {/* <p>Телефон</p> */}
                  <p className='ContactsContent TEST'>+7(4812) 39-11-60<br/>
                    +7(4812) 39-11-68</p>
                </div>
              </div>
              <div className="SecondBlock">
                <div className="ContactsInfo CenterBlock">
           
                  <p style={{fontSize:28}} className=''>Контакное лицо</p>
                  <p className='ContactsContent' style={{fontSize:34}}>Ольшевская<br/>
                    Ирина Николаевна</p>
                </div>
              </div>
            </div>
          </div>
          <div className="RightBlockContacts">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A248f63b372de498e9051cbf8be2b3ed6f0e20425851ee1dd481c97e2becd51c9&amp;source=constructor" width="690" height="600" frameborder="0"></iframe>
          </div>
        </div>
      </div>


    </div>

  )
}
export default Contacts;