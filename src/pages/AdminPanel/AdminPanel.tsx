import React, { useState } from "react";
import { AdminPanelStyle, ContainerAdminPanelStyle } from "./adminPanel.style";
import Header from "../../components/Header/Header";
import InfoUserAdminPanel from "../../components/InfoUserAdminPanel/InfoUserAdminPanel";
import { useGetUsersQuery } from "../../redux/store/usersAdminPanel/usersAdminPanel.api";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import Loading from "../../components/Loading/Loading";
import { useGetHeroBannerImgQuery } from "../../redux/store/heroBannerImg/heroBannerImg.api";
import InfoHeroBannerAdminPanel from "../../components/InfoHeroBannerAdminPanel/InfoHeroBannerAdminPanel";

const AdminPanel = () => {
    const current_user = useSelector((state: reducersType) => state.user);
    const { data: dataUsers, isLoading: isLoadingUsers } = useGetUsersQuery(
        current_user.email
    );
    const [getHeroBanner, setGetHeroBanner] = useState(0);

    const { data: dataHeroBanner, isLoading: isLoadingHeroBanner } =
        useGetHeroBannerImgQuery(getHeroBanner);
    return (
        <AdminPanelStyle>
            <Header />
            <ContainerAdminPanelStyle>
                <h1>Oll Users:</h1>
                {isLoadingUsers ? (
                    <Loading />
                ) : (
                    <InfoUserAdminPanel data={dataUsers} />
                )}
                <hr />
                <h1>Images (hero banner):</h1>
                {isLoadingHeroBanner ? (
                    <Loading />
                ) : (
                    <InfoHeroBannerAdminPanel
                        data={dataHeroBanner}
                        getHeroBanner={getHeroBanner}
                        setGetHeroBanner={setGetHeroBanner}
                    />
                )}
                <hr />
            </ContainerAdminPanelStyle>
        </AdminPanelStyle>
    );
};

export default AdminPanel;
