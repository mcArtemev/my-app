import * as React from 'react';
import {
  SkillProvider,
} from 'beautiful-skill-tree';
import './index.css';
import SkillTreeModule from './SkillTreeModule.tsx';
import rob from './Rob-pardo.png'
import jeff from './jeff.png'
import chris from './chris.jpg'
import tom from './tom.jpg'

const App = () => {
  return (
    <>
    <div className="App">
      <SkillProvider>
        <SkillTreeModule></SkillTreeModule>
      </SkillProvider>
      </div>
      <div className='Text'>
        <h1>История Создания игры World of Warcraft</h1>
        <p>Игра World of Warcraft (WoW) была разработана и выпущена студией 
  Blizzard Entertainment. Она является четвертой игрой в серии Warcraft, 
  которая началась в 1994 году с выхода Warcraft: Orcs & Humans. 
        </p>
        <p>Вот краткая 
  история создания WoW:
  </p>
         <p>
          <b>Предпосылки: </b> 
         Для понимания создания WoW важно отметить, что 
    серия игр Warcraft уже имела огромную популярность к моменту анонса 
    проекта MMORPG под названием World of Warcraft. Предыдущие игры серии 
    получили большой успех благодаря захватывающему игровому процессу и 
    захватывающей истории. </p> 
    <p>
    <b>Анонс и разработка: </b> 
    World of Warcraft была анонсирована компанией 
Blizzard Entertainment на выставке ECTS в Лондоне в 2001 году, а 
официально выпущена в конце 2004 года. Разработка игры заняла около 5 лет 
и содержала множество амбициозных и сложных технологических и 
творческих решений.
    </p>
    <p>
    <b>Игровой процесс и добавление контента: </b>World of Warcraft 
предложила игрокам возможность погрузиться в огромный онлайн-мир, где 
они могли взаимодействовать друг с другом, сражаться в PvP (игрок против 
игрока), выполнять квесты и исследовать мир Azeroth. С течением времени 
Blizzard регулярно выпускала новое дополнительное контент, значительно 
расширяя игровой мир и добавляя новые квесты, подземелья, рейды и 
механики.
    </p>
    <p>
    <b>Глобальное влияние: </b>WoW сделала значительный вклад в 
формирование и становление жанра MMORPG (массовая 
многопользовательская онлайн-ролевая игра) и оказала огромное влияние на 
индустрию видеоигр в целом. Она стала одной из самых успешных и 
долгоживущих онлайн-игр в истории.
    </p>
    </div>
    <div className='Developer'>
      <p style={{margin: "0 20px"}}>Команда разработчиков</p>
      <ul>
        <li>Роб Пардо (Rob Pardo) 
          <img
              style={{ width: "300px", backgroundSize: "cover", height: "200px" }}
              src={rob}
              alt="wow logo."
            />
        </li>
        <li>Джонатан Морхейм (Jeff Kaplan)
          <img
              style={{ width: "300px", height: "200px", backgroundSize: "cover" }}
              src={jeff}
              alt="wow logo."
            />
        </li>
        <li>Крис Метзен (Chris Metzen)
          <img
              style={{ width: "300px", height: "200px", backgroundSize: "cover" }}
              src={chris}
              alt="wow logo."
            />
        </li>
        <li>Том Чилтон (Tom Chilton)
          <img
              style={{ width: "300px", height: "200px", backgroundSize: "cover" }}
              src={tom}
              alt="wow logo."
            />
        </li>
      </ul>
    </div>
    </>
  );
};

export default App;
