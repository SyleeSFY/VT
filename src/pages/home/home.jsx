import React from 'react';
import '../../styles/home.css';
import OurGraduatesInfoIMG from '../../components/Icons/VT.png';

const Home = () => {
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

      <div className="OurGraduatesInfo">
        <img src={OurGraduatesInfoIMG} alt="" className='OurGraduatesInfoIMG' />
        <div className="OurGraduatesInfoText"><ul>
          <li><div className="Tochka SmallTochka"></div>
            <p>Департамент Смоленской области по информационным технологиям, связи и обеспечению  предоставления услуг в электронном виде;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>Смоленское областное государственное бюджетное учреждение «Центр информационно-коммуникационных технологий»;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>Филиал ФГУП концерн «Росэнергоатом», Смоленская
              атомная станция, г. Десногорск;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>ОАО «Измеритель», г. Смоленск;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>
              ФГУП «СПО Аналитприбор», г. Смоленск;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>ФАК СБ РФ (ОАО) – Смоленское отделение № 8609;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>ООО НПО «Рубикон-Инновация», г. Смоленск;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>ООО «МТС», г. Смоленск;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>ЗАО «НИИ СТТ»;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>Смоленский филиал АО «Радиозавод»;</p> </li>
          <li><div className="Tochka SmallTochka"></div>
            <p>ООО «Этна – информационные технологии», г. Смоленск</p> </li>
        </ul>
        </div>

      </div>
      <div className="Stip" style={{ marginLeft: 0 }}></div>
    </div>
    <div className="HistoryOfCafedra">
      <div className="FlexStart">
        <div className="BlockTittleHome">
          <span className='TittleHome'>История кафедры</span>
          <div className="Stip" style={{ width: "100%" }}></div>
        </div>
      </div>

      <div className="OurGraduatesInfo">
        <div className="OurGraduatesInfoText"><ul>
          <li><div className="Tochka TochkaHistory"></div>
            <p>В 1961 году был осуществлен первый набор студентов
              на специальность "Автоматика и телемеханика".</p> </li>
          <li><div className="Tochka TochkaHistory"></div>
            <p>Приказом №144 от 6 июня 1977 года проректора МЭИ
              по Смоленскому филиалу В.Ф.Фёдорова
              была организована кафедра вычислительной техники</p> </li>
          <li><div className="Tochka TochkaHistory"></div>
            <p>Кафедра компьютерных технологий и управления
              присоединилась к кафедре
              вычислительной техники в 2002 году. </p> </li>
          <li><div className="Tochka TochkaHistory"></div>
            <p>С 2024 года кафедрой руководит
              Борисов Вадим Владимирович.</p> </li>


        </ul>
          <div className="Stick StickInHistory"></div>
        </div>


      </div>

    </div>
  </div>
  )
}
export default Home;