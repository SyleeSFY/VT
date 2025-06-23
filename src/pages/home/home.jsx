import React from 'react';
import '../../styles/home.css';
import OurGraduatesInfoIMG from '../../components/Icons/VT.png';
import Tochka from '../../components/Icons/Ellipse 1@2x.png';
const Home = () => {
  return (<div className='home'>

    <div className="InfoCafedra">
      <div className="CafedraCards">
        <div className="CafedraCard">
          <div className="Stick"></div>
          <p>Кафедра <span style={{ color: '#006607' }}>вычислительной техники </span>- одна из старейших кафедр в Смоленском филиале НИУ "МЭИ".
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
          <p>Обучение студентов происходит по направлению <span style={{ color: '#006607' }}>09.03.01 - "ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА"</span>.
          </p>
        </div>
      </div>
      <div className="Stip" style={{ marginRight: 0 }}>
      </div>


    </div>
    <div className="OurGraduates">
      <div className="OurGraduatesFlexEnd">
        <div className="BlockTittleHome">
          <span className='TittleHome'>Наши выпускники работают</span>
          <div className="Stip" style={{ width: "100%" }}></div>
        </div>
      </div>

      <div className="OurGraduatesInfo">
        <img src={OurGraduatesInfoIMG} alt="" className='OurGraduatesInfoIMG' />
        <div className="OurGraduatesInfoText"><ul>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>Департамент Смоленской области по информационным технологиям, связи и обеспечению  предоставления услуг в электронном виде;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>Смоленское областное государственное бюджетное учреждение «Центр информационно-коммуникационных технологий»;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>Филиал ФГУП концерн «Росэнергоатом», Смоленская
              атомная станция, г. Десногорск;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>ОАО «Измеритель», г. Смоленск;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>
              ФГУП «СПО Аналитприбор», г. Смоленск;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>ФАК СБ РФ (ОАО) – Смоленское отделение № 8609;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>ООО НПО «Рубикон-Инновация», г. Смоленск;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>ООО «МТС», г. Смоленск;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>ЗАО «НИИ СТТ»;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>Смоленский филиал АО «Радиозавод»;</p> </li>
          <li><img src={Tochka} className="Tochka SmallTochka" />
            <p>ООО «Этна – информационные технологии», г. Смоленск</p> </li>
        </ul>
        </div>

      </div>
      <div className="Stip" style={{ marginLeft: 0 }}></div>
    </div>
    <div className="HistoryOfCafedra">
      <div className="HistoryOfCafedraFlexStart">
        <div className="BlockTittleHome">
          <span className='TittleHome'>История кафедры</span>
          <div className="Stip" style={{ width: "100%" }}></div>
        </div>
      </div>
      <div className="OurGraduatesInfo">
        <div className="OurGraduatesInfoText"><ul>
          <li><img src={Tochka} className="Tochka TochkaHistory" />
            <p>В 1961 году был осуществлен первый набор студентов
              на специальность "Автоматика и телемеханика".</p> </li>
          <li><img src={Tochka} className="Tochka TochkaHistory" />
            <p>Приказом №144 от 6 июня 1977 года проректора МЭИ
              по Смоленскому филиалу В.Ф.Фёдорова
              была организована кафедра вычислительной техники</p> </li>
          <li><img src={Tochka} className="Tochka TochkaHistory" />
            <p>Кафедра компьютерных технологий и управления
              присоединилась к кафедре
              вычислительной техники в 2002 году. </p> </li>
          <li><img src={Tochka} className="Tochka TochkaHistory" />
            <p>С 2024 года кафедрой руководит
              Борисов Вадим Владимирович.</p> </li>


        </ul>
          <div className="Stick StickInHistory"></div>
        </div>


      </div>
      <div className="Stip" style={{ marginRight: 0 }}></div>
    </div>
    <div className="OurGraduates">
      <div className="OurGraduatesFlexEnd">
        <div className="BlockTittleHome">
          <span className='TittleHome'>Педагогический состав</span>
          <div className="Stip" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Home;