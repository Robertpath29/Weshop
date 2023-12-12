import React from "react";
import { AdminPanelStyle, ContainerAdminPanelStyle } from "./adminPanel.style";
import Header from "../../components/Header/Header";
import InfoUserAdminPanel from "../../components/InfoUserAdminPanel/InfoUserAdminPanel";
import { useGetUsersQuery } from "../../redux/store/usersAdminPanel/usersAdminPanel.api";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";
import Loading from "../../components/Loading/Loading";

const AdminPanel = () => {
    const current_user = useSelector((state: reducersType) => state.user);
    const { data, isLoading } = useGetUsersQuery(current_user.email);
    return (
        <AdminPanelStyle>
            <Header />
            <ContainerAdminPanelStyle>
                <h1>Oll Users:</h1>
                {isLoading ? <Loading /> : <InfoUserAdminPanel data={data} />}
            </ContainerAdminPanelStyle>
        </AdminPanelStyle>
    );
};

export default AdminPanel;
