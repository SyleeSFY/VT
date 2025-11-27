import React, { useState, useEffect } from 'react';
import '../../styles/educator.css';

const EducatorsInformation = [
  { id: 1, name: "Борисов\nВадим\nВладимирович", src: require("../../components/Optimized/Borisov_Vadim_Vladimirovich.jpg"), AcademicTitle: "Профессор" },
  { id: 2, name: "Федулов\nАлександр\nСергеевич", src: require("../../components/Optimized/Fedulov_Aleksandr_Sergeevich.jpg"), AcademicTitle: "Профессор" },
  { id: 3, name: "Гаврилов\nАлексей\nИгоревич", src: require("../../components/Optimized/Gavrilov_Aleksey_Igorevich.jpg"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 4, name: "Федулов\nЯрослав\nАлександрович", src: require("../../components/Optimized/Fedulov_YAroslav_Aleksandrovich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 6, name: "Зернов\nМихаил\nМихайлович", src: require("../../components/Optimized/Zernov_Mihail_Mihaylovich.jpg") , AcademicTitle: "Доцент кафедры ВТ"},
  { id: 7, name: "Полячков\nАлександр\nВладимирович", src: require("../../components/Optimized/Polyachkov_Aleksandr_Vladimirovich.jpg"), AcademicTitle: "Доцент кафедры ВТ"},
  { id: 8, name: "Гетманцев\nЛеонид\nЮрьевич", src: require("../../components/Optimized/Getmantsev_Leonid_YUrevich.jpg"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 9, name: "Прокуденков\nНиколай\nПрокофьевич", src: require("../../components/Optimized/Prokudenkov_Nikolay_Prokofevich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 10, name: "Свириденков\nКонстантин\nИванович", src: require("../../components/Optimized/Sviridenkov_Konstantin_Ivanovich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 11, name: "Свириденкова\nМарина\nАлександровна", src: require("../../components/Optimized/Sviridenkova_Marina__Aleksandrovna.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 12, name: "Денисова\nИрина\nАлександровна", src: require("../../components/Optimized/Denisova_Irina_Aleksandrovna.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 13, name: "Курылев\nВладимир\nАлексеевич", src: require("../../components/Optimized/Kuryilev_Vladimir_Alekseevich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 14, name: "Тихонов\nВладимир\nАлександрович", src: require("../../components/Optimized/Tihonov_Vladimir_Aleksandrovich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 15, name: "Фомченков\nВладимир\nПетрович", src: require("../../components/Optimized/Fomchenkov_Vladimir_Petrovich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 16, name: "Фомин\nАлександр\nИванович", src: require("../../components/Optimized/Fomin_Aleksandr_Ivanovich.jpg"), AcademicTitle: "Доцент кафедры ВТ" },
  { id: 17, name: "Андреев\nМихаил\nАлексеевич", src: require("../../components/Optimized/Andreev_Mihail_Alekseevich.jpg"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 18, name: "Федулова\nСветлана\nАлександровна", src: require("../../components/Optimized/Fedulova_Svetlana_Aleksandrovna.jpg"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 19, name: "Федулова\nАнастасия\nСергеевна", src: require("../../components/Optimized/Fedulova_Anastasiya_Sergeevna.jpg"), AcademicTitle: "Старший преподаватель кафедры ВТ" },
  { id: 20, name: "Жарков\nАнтон\nПавлович", src: require("../../components/Optimized/Jarkov_Anton_Pavlovich.jpg"), AcademicTitle: "Ассистент кафедры ВТ" },
  { id: 21, name: "Попков\nДмитрий\nЮрьевич", src: require("../../components/Optimized/Popkov_Dmitriy_YUrevich.jpg"), AcademicTitle: "Старший преподаватель" },
  { id: 22, name: "Дубова\nНаталья\nНиколаевна", src: require("../../components/Optimized/Dubova_Natalya_Nikolaevna.jpg"), AcademicTitle: "Заместитель заведующего лабораторией информатизации" },
  { id: 23, name: "Рыбаков\nВиктор\nАлексеевич", src: require("../../components/Optimized/Ryibakov_Viktor_Alekseevich.jpg"), AcademicTitle: "Заведующий лабораторией\nкафедры ВТ" },
  { id: 24, name: "Ольшевская\nИрина\nНиколаевна", src: require("../../components/Optimized/Olshevskaya_Irina_Nikolaevna.jpg"), AcademicTitle: "Инженер 1-й категории кафедры ВТ" }
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