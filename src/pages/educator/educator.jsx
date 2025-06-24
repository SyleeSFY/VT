import React from 'react';
import '../../styles/educator.css';
const path = "../../components/"
const EducatorsInformation = [
  { id: 1, name: "Борисов\nВадим Владимирович", src: require("../../components/Educators/Borisov_Vadim_Vladimirovich.jpg") },
  { id: 2, name: "Федулов Александр Сергеевич", src: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 3, name: "Гаврилов Алексей Игоревич", scr: require("../../components/Educators/Gavrilov_Aleksey_Igorevich.jpg") },
  { id: 4, name: "Федулов Ярослав Александрович", scr: require("../../components/Educators/Fedulov_YAroslav_Aleksandrovich.jpg") },
  { id: 5, name: "Аверченков Олег Егорович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 6, name: "Зернов Михаил Михайлович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 7, name: "Полячков Александр Владимирович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 8, name: "Гетманцев Леонид Юрьевич", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 9, name: "Прокуденков Николай Прокофьевич", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 10, name: "Пучков Юрий Иванович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 11, name: "Свириденков Константин Иванович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 12, name: "Свириденкова Марина Александровна", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 13, name: "Денисова Ирина Александровна", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 14, name: "Курылев Владимир Алексеевич", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 15, name: "Тихонов Владимир Александрович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 16, name: "Фомченков Владимир Петрович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 17, name: "Фомин Александр Иванович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 18, name: "Андреев Михаил Алексеевич", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 19, name: "Федулова Светлана Александровна", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 20, name: "Федулова Анастасия Сергеевна", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 21, name: "Жарков Антон Павлович", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 22, name: "Попков Дмитрий Юрьевич", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 23, name: "Дубова Наталья Николаевна", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 24, name: "Рыбаков Виктор Алексеевич", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 25, name: "Ольшевская Ирина Николаевна", scr: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") }];
const Educator = () => {



  return (<div className='home'>

    <div className="DivInfo" style={{}}>
      <div className="FlexEnd">
        <div className="BlockTittleHome">
          <span className='TittleHome'>Преподаватели</span>
          <div className="Stip" style={{ width: "100%" }}></div>
        </div>
      </div>
      <div className="EducatorsCards">
        <div className="Line">
          {EducatorsInformation.map(test => (

            <div className="Card">
              <img src={test.src} alt='' />
              <p className='fio'>{test.name}</p>

            </div>
          ))}

          {/* style={{backgroundImage: `url(${require('../../components/Borisov_Vadim_Vladimirovich.jpg')})`}} */}

        </div>

      </div>
    </div>


  </div>

  )
}
export default Educator;