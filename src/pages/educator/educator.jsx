import React, { useState, useEffect } from 'react';
import '../../styles/educator.css';

const EducatorsInformation = [
  { id: 1, name: "Борисов\nВадим\nВладимирович", src: require("../../components/Educators/Borisov_Vadim_Vladimirovich.webp"), AcademicTitle: "Профессор" },
  { id: 2, name: "Федулов\nАлександр\nСергеевич", src: require("../../components/Educators/Fedulov_Aleksandr_Sergeevich.webp"), AcademicTitle: "Профессор" },
  { id: 3, name: "Гаврилов\nАлексей\nИгоревич", src: require("../../components/Educators/Gavrilov_Aleksey_Igorevich.webp"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 4, name: "Федулов\nЯрослав\nАлександрович", src: require("../../components/Educators/Fedulov_YAroslav_Aleksandrovich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 6, name: "Зернов\nМихаил\nМихайлович", src: require("../../components/Educators/Zernov_Mihail_Mihaylovich.webp") , AcademicTitle: "Доцент кафедры ВТ"},
  { id: 7, name: "Полячков\nАлександр\nВладимирович", src: require("../../components/Educators/Polyachkov_Aleksandr_Vladimirovich.webp"), AcademicTitle: "Доцент кафедры ВТ"},
  { id: 8, name: "Гетманцев\nЛеонид\nЮрьевич", src: require("../../components/Educators/Getmantsev_Leonid_YUrevich.webp"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 9, name: "Прокуденков\nНиколай\nПрокофьевич", src: require("../../components/Educators/Prokudenkov_Nikolay_Prokofevich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 10, name: "Свириденков\nКонстантин\nИванович", src: require("../../components/Educators/Sviridenkov_Konstantin_Ivanovich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 11, name: "Свириденкова\nМарина\nАлександровна", src: require("../../components/Educators/Sviridenkova_Marina__Aleksandrovna.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 12, name: "Денисова\nИрина\nАлександровна", src: require("../../components/Educators/Denisova_Irina_Aleksandrovna.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 13, name: "Курылев\nВладимир\nАлексеевич", src: require("../../components/Educators/Kuryilev_Vladimir_Alekseevich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 14, name: "Тихонов\nВладимир\nАлександрович", src: require("../../components/Educators/Tihonov_Vladimir_Aleksandrovich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 15, name: "Фомченков\nВладимир\nПетрович", src: require("../../components/Educators/Fomchenkov_Vladimir_Petrovich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 16, name: "Фомин\nАлександр\nИванович", src: require("../../components/Educators/Fomin_Aleksandr_Ivanovich.webp"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 17, name: "Андреев\nМихаил\nАлексеевич", src: require("../../components/Educators/Andreev_Mihail_Alekseevich.webp"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 18, name: "Федулова\nСветлана\nАлександровна", src: require("../../components/Educators/Fedulova_Svetlana_Aleksandrovna.webp"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 19, name: "Федулова\nАнастасия\nСергеевна", src: require("../../components/Educators/Fedulova_Anastasiya_Sergeevna.webp"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 20, name: "Жарков\nАнтон\nПавлович", src: require("../../components/Educators/Jarkov_Anton_Pavlovich.webp"), AcademicTitle: "Ассистент кафедры ВТ" },
  { id: 21, name: "Попков\nДмитрий\nЮрьевич", src: require("../../components/Educators/Popkov_Dmitriy_YUrevich.webp"), AcademicTitle: "Старший преподаватель" },
  { id: 22, name: "Дубова\nНаталья\nНиколаевна", src: require("../../components/Educators/Dubova_Natalya_Nikolaevna.webp"), AcademicTitle: "Заместитель заведующего лабораторией информатизации" },
  { id: 23, name: "Рыбаков\nВиктор\nАлексеевич", src: require("../../components/Educators/Ryibakov_Viktor_Alekseevich.webp"), AcademicTitle: "Заведующий лабораторией\nкафедры ВТ" },
  { id: 24, name: "Ольшевская\nИрина\nНиколаевна", src: require("../../components/Educators/Olshevskaya_Irina_Nikolaevna.webp"), AcademicTitle: "Инженер 1-й категории кафедры ВТ" }
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
                {educator.AcademicTitle && (
                  <p className='academic-title' >{educator.AcademicTitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}

export default Educator;