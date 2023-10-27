import styles from "../../module.css/produtos/Produto.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Carrousel({ swiperKey, data, condition }) { // Certifique-se de que 'condition' seja uma propriedade
    const containerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0px 30px 0px',
    };

    const imgStyle = {
        width: '80%',
        maxHeight: '250px',
        objectFit: 'contain',
    };

    return (
        <Swiper
            key={swiperKey}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
            {condition === 'produto' ? (
                data.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div style={containerStyle}>
                            <img alt="img" src={image.image_path} style={imgStyle} />
                        </div>
                    </SwiperSlide>
                ))
            ) : (
                
                data.map((sale_item) => (
                    <SwiperSlide key={sale_item.images[0].id}>
                        <div style={containerStyle}>
                            <img 
                                alt="img" 
                                src={
                                    ( sale_item.images[0] ) ? sale_item.images[0].image_path : '/images/img_product.png'
                                } 
                                style={imgStyle} />
                        </div>
                    </SwiperSlide>
                ))
            )
            }
        </Swiper>
    );
}

export default Carrousel;
