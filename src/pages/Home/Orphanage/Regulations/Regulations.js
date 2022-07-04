import React from 'react';

const Regulations = () => {
    return (
        <div className="regulations">
            <div className="container shadow-box" style={{background: "#FFB762"}}>
                <h2 className="regulations__title">Правила передачи вещей</h2>
                <ul className="regulations__list">
                    <li className="regulations__item"><span className="regulations__number">1.</span>Мы принимаем вещи в хорошем состоянии. На вещах не должно быть дырок, пятен, сломанных молний.</li>
                    <li className="regulations__item"><span className="regulations__number">2.</span>Вещи должны быть чистые.</li>
                    <li className="regulations__item"><span className="regulations__number">3.</span>Мы не принимаем б/у нижнее белье, носки и колготки по гигиеническим причинам.</li>
                    <li className="regulations__item" style={{paddingBottom: "40px"}}><span className="regulations__number">4.</span>Если на вашей одежде есть дефекты (катышки, неотстирыемые пятна, дырки) или вещи морально <br/>
                    устарели, вы все равно можете их сдавать. Такие вещи будут переработаны в новые материалы.</li>
                </ul>
            </div>
        </div>
    );
};

export default Regulations;