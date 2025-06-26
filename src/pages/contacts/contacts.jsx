import React from 'react';
import '../../styles/contacts.css';
import OurGraduatesInfoIMG from '../../components/Icons/VT.png';

const Contacts = () => {
  return (
    <div className='home'>

      <div className="FlexEnd" style={{ paddingRight: 60 }}>
        <div className="BlockTittleHome">
          <span className='VT'>Контакты</span>

        </div>
      </div>
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
              <div className="FirstBlock">1</div>
              <div className="SecondBlock">2</div>
            </div>
            <div className="Right">
              <div className="FirstBlock">1</div>
              <div className="SecondBlock">2</div>
            </div>
          </div>
          <div className="RightBlockContacts">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15441288ef2d97f04fc48793859714b354c70979f4e67308bb0cdf10ecdaeeb8&amp;source=constructor" width="690" height="500" frameborder="0"></iframe>
          </div>
        </div>
      </div>


    </div>

  )
}
export default Contacts;