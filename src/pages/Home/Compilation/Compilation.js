import React from 'react';
import phone1 from './phone1.png'
import phone2 from './phone2.png'
import face1 from './face.png'
import CompilationRow from "./CompilationRow/CompilationRow";

const Compilation = ({title, reducer}) => {
    return (
        <section className={'compilation'}>
            <div className="container">
                <div className={'compilation__chapter'}>
                    <h2>Подборка для вас</h2>
                    <span className={'compilation__show_all'}>Смотреть все</span>
                </div>
                <CompilationRow/>
            </div>
        </section>
    );
};

export default Compilation;