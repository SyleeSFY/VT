import React from 'react';
import '../../styles/contacts.css';

import Geo from '../../components/Iconss/geo.png';
import Mail from '../../components/Iconss/mail.png';
import Mobile from '../../components/Iconss/phone.png';

const Contacts = () => {
  return (
    <div className='home'>
      <div className="Block">
        <div className="FlexCenter">
          <div className="BlockTittleHome">
            <span className='TittleHome'>Контакты для связи!</span>
            <div className="Stip"></div>
          </div>
        </div>
        <div className="BlockContacts">
          <div className="LeftBlockContacts">
            <div className="Left">
              <div className="FirstBlock">
                <div className="ContactsInfo">
                  <img src={Geo} alt="" className='ContactsIMG' />
                  <p className='ContactsContentTittle'>Адрес:</p>
                  <p className='ContactsContent'>214013, г. Смоленск, Энергетический проезд, д. 1</p>
                </div>
              </div>
              <div className="SecondBlock">
                <div className="ContactsInfo">
                  <img src={Mail} alt="" className='ContactsIMG' />
                  <p className='ContactsContentTittle'>Почта:</p>
                  <p className='ContactsContent'>VT@sbmpei.ru</p>
                </div>
              </div>
            </div>
            <div className="Right">
              <div className="FirstBlock">
                <div className="ContactsInfo">
                  <img src={Mobile} alt="" className='ContactsIMG' />
                  <p className='ContactsContentTittle'>Телефон:</p>
                  <p className='ContactsContent'>+7(4812) 39-11-60<br />
                    +7(4812) 39-11-68</p>
                </div>
              </div>
              <div className="SecondBlock">
                <div className="ContactsInfo contact-person">
                  <p className='contact-person-title'><strong>Контактное лицо</strong></p>
                  <p className='ContactsContent contact-person-name'>Ольшевская<br />
                    Ирина Николаевна</p>
                </div>
              </div>
            </div>
          </div>
          <div className="RightBlockContacts">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A248f63b372de498e9051cbf8be2b3ed6f0e20425851ee1dd481c97e2becd51c9&amp;source=constructor" 
              title="Карта расположения"
              className="map-iframe" 
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;