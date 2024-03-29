import React from 'react';
import {findUser} from "../../../redux/reducers/user";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const CompilationCardRowType = ({title, img, price, city, sell, id, rowType}) => {
    const user = useSelector(s => s.user.user);
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const addFav = () => {
        localStorage.setItem('user', JSON.stringify({
            ...user, favourites:
                user.favourites.findIndex(el => el.id === id) >= 0 ?
                    user.favourites.filter((el) => el.id !== id) :
                    [...user.favourites, {
                        image: img,
                        id,
                        title,
                        price,
                    }]
        }));

        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };

    const addCart = () => {
        localStorage.setItem('user', JSON.stringify({...user, cart:
                user.cart.findIndex(el => el.id === id) >= 0 ?
                    user.cart.map((el) => {
                        if ( el.id === id){
                            return {...el, count: +el.count + 1}
                        } return el
                    }) :
                    [...user.cart, {
                        image: img,
                        count: 1 ,
                        id,
                        title,
                        price,
                    }]
        } ));
        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };

    return (


        <div className={ `compilation__cardFav`}>
                         <span className="compilation__card-like" onClick={() => {addFav()}}>
                             {
                                 // console.log(user)
                                 user?.favourites?.filter(el => el.id === id ).length ?
                                     <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M8.03 3.09733L8.66451 4.10748L9.29987 3.09786C9.8688 2.19379 10.5294 1.69113 11.1634 1.46275C11.7973 1.23439 12.4552 1.26123 13.0617 1.50137C14.2792 1.98342 15.3308 3.35645 15.3308 5.29086C15.3308 5.90049 15.0098 6.70073 14.3879 7.63753C13.7801 8.55309 12.9499 9.50359 12.0788 10.3932C11.2107 11.2796 10.3195 12.0879 9.6002 12.7209C9.34182 12.9483 9.10813 13.1508 8.90427 13.3275C8.82359 13.3975 8.74758 13.4634 8.67656 13.5251C8.67057 13.5303 8.6646 13.5355 8.65864 13.5407C8.64895 13.5326 8.63923 13.5244 8.62948 13.5163C8.52575 13.4293 8.41384 13.3361 8.29316 13.2357C8.10561 13.0795 7.89688 12.9057 7.66481 12.7103C6.91217 12.0764 5.97713 11.2675 5.06524 10.3803C4.15002 9.48994 3.27704 8.53888 2.6378 7.62307C1.98227 6.68394 1.64941 5.88913 1.64941 5.29086C1.64941 3.36814 2.76258 1.98439 4.0806 1.49436C5.35678 1.01988 6.92862 1.34392 8.03 3.09733Z" fill="#00C65E" stroke="#00C65E" strokeWidth="1.5"/>
                                     </svg> :

                                     <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.95639 2.37161L8.29009 2.87804L8.62422 2.3719C9.87742 0.473542 11.6294 0.0948946 13.0509 0.63139C14.4953 1.17655 15.6696 2.69254 15.6696 4.74398C15.6696 5.45358 15.2853 6.32286 14.6209 7.27687C13.9651 8.21854 13.0763 9.18711 12.1545 10.0844C11.2345 10.98 10.2917 11.795 9.53402 12.4306C9.26185 12.6589 9.01493 12.863 8.80078 13.0399C8.71643 13.1096 8.63716 13.1751 8.56344 13.2362C8.46272 13.3197 8.36974 13.3972 8.28792 13.4666C8.20168 13.3955 8.10344 13.3165 7.99731 13.2317C7.89077 13.1465 7.77408 13.0539 7.64771 12.9536C7.44979 12.7965 7.22814 12.6206 6.98469 12.4251C6.19238 11.7891 5.20356 10.9737 4.23745 10.0777C3.26943 9.17999 2.33491 8.21105 1.64523 7.26916C0.945605 6.31368 0.544043 5.44728 0.544043 4.74398C0.544043 2.69125 1.79598 1.16897 3.34062 0.621516C4.86843 0.0800294 6.71146 0.482269 7.95639 2.37161Z" stroke="#00C65E" strokeWidth="0.8"/></svg>

                             }
                        </span>


            <Link to={`/product/${id}`} onClick={() => window.scrollTo('pageYOffset', 0)} style={{display: "flex", justifyContent: "center"}}
                  className={'compilation__card-link'}>
                <img className={'compilation__card-image'} src={img} alt="phone"/>
            </Link>


            <div  style={{textAlign:'center'}}>
                    {/*<p className={'compilation__card-category'}>Ноутбук</p>*/}
                <div className={'compilation__card-title'}>{title}</div>


                <div>
                    <div  style={{alignSelf:'center'}} className={'compilation__card-bot'}>
                        <div className={'compilation__card-rated'}>
                            <span className={`compilation__card-price  ${rowType === false ? 'compilation__cardFav-price' : ''}`}>{price}₽</span>
                        </div>
                        {
                            !sell ?
                                <span className={'compilation__card-city'}>{city}</span>
                                :
                                <button className={'compilation__card-btn shadow-box'} onClick={() => {
                                    toast('Добавлено', {
                                        position: "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        // theme: "colored",
                                        draggable: true,
                                        progress: undefined,
                                    });
                                    addCart();
                                }}>Купить
                                    <span>
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.425391 0.298828C0.204477 0.298828 0.0253906 0.477914 0.0253906 0.698828C0.0253906 0.919742 0.204477 1.09883 0.425391 1.09883H0.937738C1.65562 1.09883 2.28563 1.57698 2.47875 2.26839L4.72098 10.2959C4.72563 10.3125 4.73127 10.3286 4.73782 10.3442L4.98883 11.27C5.15423 11.8801 5.70794 12.3037 6.34006 12.3037H14.005C14.6371 12.3037 15.1908 11.8801 15.3562 11.27L16.9438 5.41395C17.1852 4.52383 16.5149 3.64762 15.5926 3.64762H3.69462L3.24926 2.05318C2.95957 1.01605 2.01456 0.298828 0.937738 0.298828H0.425391ZM5.76096 11.0607L3.96809 4.44762H15.5926C15.9879 4.44762 16.2751 4.82314 16.1717 5.20461L14.5841 11.0607C14.5132 11.3222 14.2759 11.5037 14.005 11.5037H6.34006C6.06915 11.5037 5.83185 11.3222 5.76096 11.0607Z"
                                              fill="#363A45"/>
                                        <path d="M8.70193 15.4507C8.70193 16.2366 8.06411 16.8744 7.27655 16.8744C6.48899 16.8744 5.85117 16.2366 5.85117 15.4507C5.85117 14.6647 6.48899 14.027 7.27655 14.027C8.06411 14.027 8.70193 14.6647 8.70193 15.4507Z" stroke="#363A45" strokeWidth="0.8"/>
                                        <path d="M14.4944 15.4507C14.4944 16.2366 13.8566 16.8744 13.069 16.8744C12.2815 16.8744 11.6437 16.2366 11.6437 15.4507C11.6437 14.6647 12.2815 14.027 13.069 14.027C13.8566 14.027 14.4944 14.6647 14.4944 15.4507Z" stroke="#363A45" strokeWidth="0.8"/>
                                        </svg>
                                    </span>
                                </button>
                        }
                    </div>
                </div>
                <ToastContainer
                    position="bottom-left"
                    closeOnClick={true}
                />
            </div>
        </div>
    );
};

export default CompilationCardRowType;