import React from 'react';
import '../../styles/home.css';
import OurGraduatesInfoIMG from '../../components/Icons/VT.png';

const Contacts = () => {
  return (<div className='home'>
    <div className="FlexStart">
      <div className="BlockTittleHome">
        <span className='VT'>Кафедра вычислительной техники</span>
      </div>
    </div>
    <div className="InfoCafedra">

      <div className="CafedraCards">

        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Кафедра <span style={{ color: '#00471bd8' }}>вычислительной техники </span>- одна из старейших кафедр в Смоленском филиале НИУ "МЭИ".
            <br />Кафедра выпускает высококвалифицированных специалистов в области информационных технологий и вычислительной техники.


          </p>
        </div>
        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Подготовка студентов кафедры вычислительной техники ведется опытным профессорско-преподавательским составом в количестве 23-х человек, из которых 4 доктора наук и 16 кандидатов наук.
          </p>
        </div>
        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Обучение студентов происходит по направлению <span style={{ color: '#00471bd8' }}>09.03.01 - "ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА"</span>.
          </p>
        </div>
      </div>
      <div className="Stip" style={{ marginRight: 0 }}>
      </div>


    </div>
    <div className="DivInfo">
      <div className="FlexEnd">
        <div className="BlockTittleHome">
          <span className='TittleHome'>Наши выпускники работают</span>
          <div className="Stip" style={{ width: "100%" }}></div>
        </div>
      </div>

     


      </div>

    </div>

  )
}
export default Contacts;