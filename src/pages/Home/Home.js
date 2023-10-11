import React, { useEffect, useState } from 'react';
import Banner from "../Board/Banner/Banner";
import Slider from "../Board/Slider/Slider";
import Compilation from "../../components/ProductCompilation/Compilation";
import TradeSteps from "../Buying/TradeSteps/TradeSteps";
import TopShops from "./Shops/TopShops/TopShops";
import Vend from "./Charity/Vend/Vend";
import BasePopup from '../../components/BasePopup/BasePopup';

const Home = () => {
    const [overlay, setOverlay] = useState(false);
    useEffect(() => {
        setOverlay(JSON.parse(localStorage.getItem('order')))
    }, []);


    return (
        <div className={'home'}>
            <Banner />
            <Slider />
            <Compilation />
            <TopShops />

            {overlay === true ?
                <BasePopup callback={() => setOverlay(localStorage.setItem('order', false))}>
                    <h2 className="formalize__popup-title">Ваш заказ оформлен! <br />
                        Наш менеджер скоро <br />
                        свяжется с вамиw
                    </h2>
                </BasePopup>
                : ''
            }
            <TradeSteps shadow={'shadow-box'} />
            <Vend />
        </div>
    );
};

export default Home;