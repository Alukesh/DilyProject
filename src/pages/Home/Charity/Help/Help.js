import React from 'react';
import image from './1.png'
import image2 from './2.png'
import image3 from './3.png'


const Help = () => {
    return (
        <div className="help">
           <div className="container">
               <h2 className="help__title">Кому мы помогаем</h2>
               <div className="help__content">
                   <div className="help__card">
                       <img src={image} alt=""/>
                       <p className="help__text">Нуждающимся людям</p>
                   </div>
                   <div className="help__card">
                       <img src={image2} alt=""/>
                       <p className="help__text">Детским домам</p>
                   </div>
                   <div className="help__card">
                       <img src={image3} alt=""/>
                       <p className="help__text">
                           Детям <br/>
                           с ограниченными <br/>
                           возможностями
                       </p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Help;