import React, { useEffect, useState } from "react";
import {
    ContainerFooterStyle,
    ContainerLinksStyle,
    ContainerMethodPay,
    ContainerPhotosStyle,
    CopyrightsStyle,
    DutiesFooterStyle,
    FooterStyle,
    InfoFooterStyle,
    InstagramFeedFooterStyle,
    LinksGroupStyle,
    SupportFooterStyle,
} from "./footer.style";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/store/products/products.api";
import Loading from "../Loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
    const { data, isLoading } = useGetProductsQuery({
        category: "",
        color: "",
        current_page: 1,
        dataSizes: "",
        keyword: "",
        max_price: 10000,
        min_price: 0,
        per_page: 10,
        sort_by: "data",
    });

    return (
        <FooterStyle>
            <ContainerFooterStyle>
                <InfoFooterStyle>
                    <h1>weshop</h1>
                    <p>
                        USA most-loved online fashion store featuring new deals.
                    </p>
                    <p>
                        When it comes to trend, we all love being in it —
                        Seeping every bit of it in WESHOP.com{" "}
                    </p>
                </InfoFooterStyle>
                <SupportFooterStyle>
                    <h1>support</h1>
                    <Link to={"/"}>Howe to Order?</Link>
                    <Link to={"/"}>Payments</Link>
                    <Link to={"/"}>Assistance</Link>
                    <Link to={"/"}>Delivery</Link>
                </SupportFooterStyle>
                <DutiesFooterStyle>
                    <h1>duties</h1>
                    <Link to={"/"}>Terms and Conditions</Link>
                    <Link to={"/"}>Shop Policy</Link>
                    <Link to={"/"}>Contact Us</Link>
                </DutiesFooterStyle>
                <InstagramFeedFooterStyle>
                    <h1>instagram feed</h1>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <ContainerPhotosStyle>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={4}
                                    loop={true}
                                    speed={2000}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    simulateTouch={false}
                                >
                                    {data?.products &&
                                        data.products.map((product) => (
                                            <SwiperSlide
                                                key={product.product.id}
                                            >
                                                <img
                                                    className="instagram-feed-img"
                                                    src={
                                                        product.path_img[3].url
                                                    }
                                                    alt="images footer"
                                                />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </a>
                        </ContainerPhotosStyle>
                    )}
                    <hr />
                    <ContainerMethodPay>
                        <RiVisaFill />
                        <FaCcPaypal />
                        <FaCcMastercard />
                        <FaCcApplePay />
                        <FaGooglePay />
                    </ContainerMethodPay>
                    <hr />
                </InstagramFeedFooterStyle>
            </ContainerFooterStyle>
            <ContainerLinksStyle>
                <LinksGroupStyle>
                    <a
                        href="https://www.facebook.com/?locale=uk_UA"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/?lang=uk" target="_blank">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <TfiYoutube />
                    </a>
                    <a href="https://www.google.com/" target="_blank">
                        <FaGooglePlusG />
                    </a>
                </LinksGroupStyle>
                <hr />
            </ContainerLinksStyle>
            <CopyrightsStyle>
                <span>
                    &copy; Copyrights MOHAMMAD SHOAHG. All rights researved{" "}
                    {new Date().getFullYear()}
                </span>
            </CopyrightsStyle>
        </FooterStyle>
    );
};

export default Footer;
