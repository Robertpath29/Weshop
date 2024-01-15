import React, { FC } from "react";
import { ContainerCarouselRelatedItemsStyle } from "./carouselRelatedItems.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { responseType } from "../../types/response.types";

import RelatedItems from "./RelatedItems/RelatedItems";
import RelatedItemsBtnPrev from "./RelatedItemsBtnPrev";
import RelatedItemsBtnNext from "./RelatedItemsBtnNext";

const CarouselRelatedItems: FC<{
    dataProducts: responseType | undefined;
    dataOneProduct: responseType | undefined;
}> = ({ dataProducts, dataOneProduct }) => {
    console.log(dataProducts?.products);

    return (
        <ContainerCarouselRelatedItemsStyle>
            <h1>Related items</h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                speed={2000}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                simulateTouch={false}
            >
                {dataProducts?.products &&
                    dataProducts?.products.map((product) => {
                        if (product.product.id === dataOneProduct?.product?.id)
                            return;
                        return (
                            <SwiperSlide key={product.product.id}>
                                <RelatedItems product={product} />
                            </SwiperSlide>
                        );
                    })}
                {dataProducts?.products &&
                    dataProducts?.products?.length > 5 && (
                        <>
                            <RelatedItemsBtnPrev />
                            <RelatedItemsBtnNext />
                        </>
                    )}
            </Swiper>
        </ContainerCarouselRelatedItemsStyle>
    );
};

export default CarouselRelatedItems;
