import React, { useState, useEffect } from 'react';
import '../../styles/dicipline.css';

const bachelorDisciplines = [
  { id: 1, name: "Иностранный язык", course: 1, as: "+", vm: "+", po: "+" },
  { id: 2, name: "История России", course: 1, as: "+", vm: "+", po: "+" },
  { id: 3, name: "Физика", course: 1, as: "+", vm: "+", po: "+" },
  { id: 4, name: "Информационные технологии", course: 1, as: "+", vm: "+", po: "+" },
  { id: 5, name: "Инженерная и компьютерная графика", course: 1, as: "+", vm: "+", po: "+" },
  { id: 6, name: "Высшая математика", course: 1, as: "+", vm: "+", po: "+" },
  { id: 7, name: "Физическая культура и спорт", course: 1, as: "+", vm: "+", po: "+" },
  { id: 8, name: "Программирование", course: 1, as: "+", vm: "+", po: "+" },
  { id: 9, name: "Элективные курсы по физической культуре и спорту", course: 1, as: "+", vm: "+", po: "+" },
  { id: 10, name: "ОЗНАКОМИТЕЛЬНАЯ ПРАКТИКА (Расср.)", course: 1, as: "+", vm: "+", po: "+" },
  { id: 11, name: "Философия", course: 2, as: "+", vm: "+", po: "+" },
  { id: 12, name: "Высшая математика", course: 2, as: "+", vm: "+", po: "+" },
  { id: 13, name: "Вычислительная математика", course: 2, as: "+", vm: "+", po: "+" },
  { id: 14, name: "Теоретические основы электротехники", course: 2, as: "+", vm: "+", po: "+" },
  { id: 15, name: "Операционные системы", course: 2, as: "+", vm: "+", po: "+" },
  { id: 16, name: "Правоведение", course: 2, as: "+", vm: "+", po: "+" },
  { id: 17, name: "Дискретная математика", course: 2, as: "+", vm: "+", po: "+" },
  { id: 18, name: "Математическая логика и теория алгоритмов", course: 2, as: "+", vm: "+", po: "+" },
  { id: 19, name: "Архитектура вычислительных систем", course: 2, as: "+", vm: "+", po: "+" },
  { id: 20, name: "Локальные вычислительные сети", course: 2, as: "+", vm: "+", po: "+" },
  { id: 21, name: "Технология программирования", course: 2, as: "+", vm: "+", po: "+" },
  { id: 22, name: "Электроника", course: 2, as: "+", vm: "+", po: "+" },
  { id: 23, name: "Элективные курсы по физической культуре и спорту", course: 2, as: "+", vm: "+", po: "+" },
  { id: 24, name: "Теория автоматов", course: 3, as: "+", vm: "+", po: "+" },
  { id: 25, name: "Безопасность жизнедеятельности", course: 3, as: "+", vm: "+", po: "+" },
  { id: 26, name: "Экономика", course: 3, as: "+", vm: "+", po: "+" },
  { id: 27, name: "Программирование компьютерной графики", course: 3, as: "+", vm: "+", po: "+" },
  { id: 28, name: "Базы данных", course: 3, as: "+", vm: "+", po: "+" },
  { id: 29, name: "Схемотехника", course: 3, as: "+", vm: "+", po: "+" },
  { id: 30, name: "Микропроцессорные системы", course: 3, as: "+", vm: "+", po: "+" },
  { id: 31, name: "Сетевые технологии", course: 3, as: "+", vm: "+", po: "+" },
  { id: 32, name: "Теория автоматического управления", course: 3, as: "+", vm: "", po: "" },
  { id: 33, name: "Теория принятия решений", course: 3, as: "+", vm: "", po: "" },
  { id: 34, name: "Инженерное проектирование и САПР", course: 3, as: "", vm: "+", po: "" },
  { id: 35, name: "Основы теории управления", course: 3, as: "", vm: "+", po: "+" },
  { id: 36, name: "Сопровождение программного обеспечения", course: 3, as: "", vm: "+", po: "+" },
  { id: 37, name: "Технологии объектного программирования", course: 3, as: "", vm: "", po: "+" },
  { id: 38, name: "Элективные курсы по физической культуре и спорту", course: 3, as: "+", vm: "+", po: "+" },
  { id: 39, name: "Методы анализа данных", course: 3, as: "+", vm: "+", po: "+" },
  { id: 40, name: "Теория передачи информации", course: 4, as: "+", vm: "+", po: "+" },
  { id: 41, name: "Введение в цифровую обработку сигналов", course: 4, as: "+", vm: "+", po: "+" },
  { id: 42, name: "Моделирование", course: 4, as: "+", vm: "+", po: "+" },
  { id: 43, name: "Защита информации", course: 4, as: "+", vm: "+", po: "+" },
  { id: 44, name: "Модели и методы искусственного интеллекта", course: 4, as: "+", vm: "+", po: "+" },
  { id: 45, name: "Аппаратная реализация алгоритмов", course: 4, as: "+", vm: "+", po: "+" },
  { id: 46, name: "Проектирование АСОИУ", course: 4, as: "+", vm: "", po: "" },
  { id: 47, name: "Преобразователи первичной информации", course: 4, as: "+", vm: "", po: "" },
  { id: 48, name: "Основы теории надежности", course: 4, as: "+", vm: "+", po: "" },
  { id: 49, name: "Конструирование средств вычислительной техники", course: 4, as: "", vm: "+", po: "" },
  { id: 50, name: "Проектирование Web-приложений", course: 4, as: "", vm: "+", po: "+" },
  { id: 51, name: "Тестирование программного обеспечения", course: 4, as: "", vm: "+", po: "" },
  { id: 52, name: "Трансляторы программных языков", course: 4, as: "", vm: "", po: "+" }
];

const magistracyDisciplines = [
  { id: 1, name: "Интеллектуальные системы", course: 1 },
  { id: 2, name: "Вычислительные системы", course: 1 },
  { id: 3, name: "Основы педагогики в высшей школе", course: 1 },
  { id: 4, name: "Программное обеспечение автоматизированных систем", course: 1 },
  { id: 5, name: "Математические методы анализа сложных систем", course: 1 },
  { id: 6, name: "Моделирование автоматизированных систем", course: 1 },
  { id: 7, name: "Методы оптимизации", course: 1 },
  { id: 8, name: "Нечеткий анализ и моделирование", course: 1 },
  { id: 9, name: "Современные технологии информационных сетей", course: 1 },
  { id: 10, name: "Деловой иностранный язык", course: 2 },
  { id: 11, name: "Основы проведения научных исследований", course: 2 },
  { id: 12, name: "Проектное управление в информационной сфере", course: 2 },
  { id: 13, name: "Цифровая обработка сигналов", course: 2 },
  { id: 14, name: "Планирование научного эксперимента", course: 2 }
];

const Educator = () => {
  
  // eslint-disable-next-line no-unused-vars
  const [loaded, setLoaded] = useState(false);
  const [activeTable, setActiveTable] = useState('bachelor');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Функция для определения, нужно ли добавить жирную границу
  const getRowClassName = (currentDiscipline, index, disciplines) => {
    const nextDiscipline = disciplines[index + 1];
    const isLastInCourse = nextDiscipline && currentDiscipline.course !== nextDiscipline.course;
    
    if (isLastInCourse) {
      return 'course-divider';
    }
    return '';
  };

  return (
    <div className='home'>
      <div className="FlexEnd" style={{ paddingRight: 60 }}>
        <div className="BlockTittleHome">
          <span className='VT'>Преподаваемые дисциплины</span>
        </div>
      </div>
      
      <div className="block gap">
        <div className="center">
          <button 
            style={{marginRight:40}} 
            className={`button_with_under_stick ${activeTable === 'bachelor' ? 'active' : ''}`}
            onClick={() => setActiveTable('bachelor')}>
            Бакалавриат
          </button>
          <button 
            className={`button_with_under_stick ${activeTable === 'magistracy' ? 'active' : ''}`}
            onClick={() => setActiveTable('magistracy')}>
            Магистратура
          </button>
        </div>
      </div>

      {/* Таблица для бакалавриата */}
      {activeTable === 'bachelor' && (
        <div className="table-container">
          <table className="disciplines-table">
            <thead>
              <tr className='table_tr'>
                <th>№<br/>п/п</th>
                <th>Наименование дисциплины</th>
                <th>Курс</th>
                <th>АС</th>
                <th>ВМ</th>
                <th>ПО</th>
              </tr>
            </thead>
            <tbody>
              {bachelorDisciplines.map((discipline, index) => (
                <tr 
                  key={discipline.id} 
                  className={getRowClassName(discipline, index, bachelorDisciplines)}
                  style={ (discipline.course === 1 || discipline.course === 3) ? {background:'none'} : {background:'none'}}
                >
                  <td>{discipline.id}</td>
                  <td style={{textAlign:'left'}}>{discipline.name}</td>
                  <td>{discipline.course}</td>
                  <td>{discipline.as}</td>
                  <td>{discipline.vm}</td>
                  <td>{discipline.po}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Таблица для магистратуры */}
      {activeTable === 'magistracy' && (
        <div className="table-container">
          <table className="disciplines-table">
            <thead>
              <tr className='table_tr'>
                <th>№ <br/>п/п</th>
                <th>Наименование дисциплины</th>
                <th>Курс</th>
              </tr>
            </thead>
            <tbody>
              {magistracyDisciplines.map((discipline, index) => (
                <tr 
                  key={discipline.id} 
                  className={getRowClassName(discipline, index, magistracyDisciplines)}
                  style={ (discipline.course === 1) ? {background:'none'} : {background:'none'}}
                >
                  <td>{discipline.id}</td>
                  <td style={{textAlign:'left'}}>{discipline.name}</td>
                  <td>{discipline.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Educator;