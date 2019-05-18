import React from 'react';
import Header from '../../blocks/Header/Header';
import CardWrapper from '../../components/CardWrapper/CardWrapper';

function MainPage() {
  return (
    <div className="main-page">
      <Header/>
      <CardWrapper cards = {[{
        title: 'Заголовок',
        description: 'Описание',
        img: 'https://lh3.googleusercontent.com/HHHovTBWcdYnXqP_wIzDgRpBrgW2ZxE8RyyyYraBkKP3glCluRhUlp93_87FSRnHvgim_0-5XzQtX3kexXX_9qOA4aMnpZO9couCyFugvgt87BT9GtLSG4lqNBOZhTtrYlQjrn6a5wME5l_m1E4AJYY5TsfU7SwYfSi5UQhp6VN29BSy_6hYLu-_HH1htAF1mPZBciBb6wYPJJgQs7ogmca-eK_MeiKocaOo5ewBVkRHc2Tr0dqaFoZm_RsfThiLO7pL9x4bhypPdWHlTiGOZuBWy6jOXbRtm_WSD4PO6ekZZFVllpRitQcXGi7j1dV8xPtNEjv9Bn1jnvOEsI2sMkOvfyjTI-g-kHxizsO8BAIGsz5xyULYVJhH_tJKcbDR6voKeEVmhiqrsn8p9UqDn6Jr7Q7VdoOTDZTvex9yZEmuiyPVw1Drob4gbdMAxZlODs5wZ5cBB3gpVcIula3oJbn74uiPkSxyCf-khHvE4Tas0c6ALTEeJIyGgpxF762L4tyMUcwj-hF18yl0x7rtv8fxE1kFYy6j-xC22f0E54UcoQFbWOo3kbFMBqEXeyL9ljppmJScwg0Oz6qAcx0fg0pSWD444LVx0-wiTknSP2JD6GON-ZKnMLSkhi92gIiTHunRqnPyrGSoHqSQpWp51WBYBE229E3t=w308-h231-no',
        date: '19 мая 2019 в 12:00',
        place: 'Екатеринбург, ул. Пушкина, дом 3',
        author: {
          name: 'Игорь',
          avatar: 'https://cs8.pikabu.ru/avatars/1784/v1784930-1708360418.png',
        }
      }]}/>
    </div>
  );
}

export default MainPage;
