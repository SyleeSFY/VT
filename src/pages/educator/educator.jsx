import React, { useState, useEffect } from 'react';
import '../../styles/educator.css';

const EducatorsInformation = [
  { id: 1, name: "Борисов\nВадим Владимирович", src: require("../../components/Educators/Borisov_Vadim_Vladimirovich.jpg") },
  { id: 2, name: "Федулов Александр Сергеевич", src: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.jpg") },
  { id: 3, name: "Гаврилов Алексей Игоревич", src: require("../../components/Educators/Gavrilov_Aleksey_Igorevich.jpg") },
  { id: 4, name: "Федулов Ярослав Александрович", src: require("../../components/Educators/Fedulov_YAroslav_Aleksandrovich.jpg") },
  { id: 5, name: "Аверченков Олег Егорович", src: require("../../components/Educators/Averchenkov_Oleg_Egorovich.jpg") },
  { id: 6, name: "Зернов Михаил Михайлович", src: require("../../components/Educators/Zernov_Mihail_Mihaylovich.jpg") },
  { id: 7, name: "Полячков Александр Владимирович", src: require("../../components/Educators/Polyachkov_Aleksandr_Vladimirovich.jpg") },
  { id: 8, name: "Гетманцев Леонид Юрьевич", src: require("../../components/Educators/Getmantsev_Leonid_YUrevich.jpg") },
  { id: 9, name: "Прокуденков Николай Прокофьевич", src: require("../../components/Educators/Prokudenkov_Nikolay_Prokofevich.jpg") },
  { id: 10, name: "Пучков Юрий Иванович", src: require("../../components/Educators/Puchkov_YUriy_Ivanovich.jpg") },
  { id: 11, name: "Свириденков Константин Иванович", src: require("../../components/Educators/Sviridenkov_Konstantin_Ivanovich.jpg") },
  { id: 12, name: "Свириденкова Марина Александровна", src: require("../../components/Educators/Sviridenkova_Marina__Aleksandrovna.jpg") },
  { id: 13, name: "Денисова Ирина Александровна", src: require("../../components/Educators/Denisova_Irina_Aleksandrovna.jpg") },
  { id: 14, name: "Курылев Владимир Алексеевич", src: require("../../components/Educators/Kuryilev_Vladimir_Alekseevich.jpg") },
  { id: 15, name: "Тихонов Владимир Александрович", src: require("../../components/Educators/Tihonov_Vladimir_Aleksandrovich.jpg") },
  { id: 16, name: "Фомченков Владимир Петрович", src: require("../../components/Educators/Fomchenkov_Vladimir_Petrovich.jpg") },
  { id: 17, name: "Фомин Александр Иванович", src: require("../../components/Educators/Fomin_Aleksandr_Ivanovich.jpg") },
  { id: 18, name: "Андреев Михаил Алексеевич", src: require("../../components/Educators/Andreev_Mihail_Alekseevich.jpg") },
  { id: 19, name: "Федулова Светлана Александровна", src: require("../../components/Educators/Fedulova_Svetlana_Aleksandrovna.jpg") },
  { id: 20, name: "Федулова Анастасия Сергеевна", src: require("../../components/Educators/Fedulova_Anastasiya_Sergeevna.jpg") },
  { id: 21, name: "Жарков Антон Павлович", src: require("../../components/Educators/Jarkov_Anton_Pavlovich.jpg") },
  { id: 22, name: "Попков Дмитрий Юрьевич", src: require("../../components/Educators/Popkov_Dmitriy_YUrevich.jpg") },
  { id: 23, name: "Дубова Наталья Николаевна", src: require("../../components/Educators/Dubova_Natalya_Nikolaevna.jpg") },
  { id: 24, name: "Рыбаков Виктор Алексеевич", src: require("../../components/Educators/Ryibakov_Viktor_Alekseevich.jpg") },
  { id: 25, name: "Ольшевская Ирина Николаевна", src: require("../../components/Educators/Olshevskaya_Irina_Nikolaevna.jpg") }
];

const Educator = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='home'>

        <div className="FlexEnd" style={{ paddingRight: 60 }}>
          <div className="BlockTittleHome">
            <span className='VT'>Преподаватели и сотрудники</span>

          </div>
        </div>
        
        <div className={`EducatorsCards ${loaded ? 'loaded' : ''}`}>
          {EducatorsInformation.map(educator => (
            <div 
              className={`Card Cursor ${loaded ? 'visible' : ''}`} 
              key={educator.id}
              style={{ transitionDelay: `${educator.id * 0.08}s` }}
            >
              <img 
                src={educator.src} 
                alt={`Фото ${educator.name}`} 
                className='EducatorPhoto'
              />
              <div className="EducatorOverlay">
                <p className='fio'>{educator.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}

export default Educator;