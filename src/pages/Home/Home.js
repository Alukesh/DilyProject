import React, {useEffect, useState} from 'react';
import Banner from "../Board/Banner/Banner";
import Slider from "../Board/Slider/Slider";
import Compilation from "./Compilation/Compilation";
import TradeSteps from "../Buying/TradeSteps/TradeSteps";
import TopShops from "./Shops/TopShops/TopShops";

const Home = () => {
    const [overlay, setOverlay] = useState(false);
    useEffect(() => {
     // localStorage.getItem('order')
        setOverlay(JSON.parse(localStorage.getItem('order')))
    }, []);


    return (
        <div>
            <Banner/>
            <Slider/>
            <Compilation/>
            <TopShops/>

            {overlay === true ?
            <>
                <div className={'formalize__overlay'} onClick={() =>
                    setOverlay(localStorage.setItem('order', false))                    }>
                }> </div>
                <div className="formalize__popup">
                    <div className={'formalize__popup-close'} onClick={() =>
                        setOverlay(localStorage.setItem('order', false))                    }>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6838 12.5735C15.2491 13.179 15.2491 14.1608 14.6838 14.7663L14.3168 15.1593C13.7515 15.7648 12.8348 15.7648 12.2694 15.1593L8.00019 10.5868L3.73094 15.1593C3.16557 15.7648 2.24893 15.7648 1.68357 15.1593L1.31662 14.7663C0.75125 14.1608 0.751249 13.179 1.31662 12.5735L5.58587 8.00105L1.3166 3.4286C0.751236 2.82308 0.751237 1.84134 1.3166 1.23582L1.68355 0.842811C2.24892 0.237293 3.16556 0.237292 3.73093 0.84281L8.00019 5.41527L12.2695 0.84281C12.8348 0.237292 13.7515 0.237293 14.3168 0.842811L14.6838 1.23582C15.2492 1.84134 15.2492 2.82308 14.6838 3.4286L10.4145 8.00105L14.6838 12.5735Z" fill="#00C65E"/>
                        </svg>

                    </div>
                    <h2 className="formalize__popup-title">Ваш заказ оформлен! <br/>
                        Наш менеджер скоро <br/>
                        свяжется с вами</h2>
                </div>
            </>
                : ''

            }
            <TradeSteps shadow={'shadow-box'}/>
        </div>
    );
};

export default Home;