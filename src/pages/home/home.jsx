import React from 'react';
import '../../styles/home.css';
import OurGraduatesInfoIMG from '../../components/Icons/VT.png';
const Home = () => {
  return (<div className='home'>

    <div className="InfoCafedra">
      <div className="CafedraCards">
        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Кафедра <span style={{ color: '#006607' }}>вычислительной техники </span>- одна из старейших кафедр в Смоленском филиале НИУ "МЭИ".
            <br />Кафедра <span style={{ color: '#00ff0d' }}>выпускает высококвалифицированных специалистов</span> в области информационных технологий и вычислительной техники.


          </p>
        </div>
        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Подготовка студентов кафедры вычислительной техники ведется опытным профессорско-преподавательским составом в количестве 23-х человек, из которых 4 доктора наук и 16 кандидатов наук.
          </p>
        </div>
        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Обучение студентов происходит по направлению <span style={{ color: '#006607' }}>09.03.01 - "ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА"</span>.
          </p>
        </div>
      </div>
      <div className="Stip" style={{ marginRight: 0 }}>
      </div>


    </div>
    <div className="OurGraduates">
      <div className="OurGraduatesFlexEnd">
      <div className="BlockTittleOurGraduates">
        <span className='TittleOurGraduates'>Выпускники работают</span>
        <div className="Stip" style={{width: "100%"}}></div>
      </div>
      </div>

      <div className="OurGraduatesInfo">
        <img src={OurGraduatesInfoIMG} alt="" className='OurGraduatesInfoIMG'/>
        <div className=""></div>
      </div>
    </div>

  </div>)
}
export default Home;