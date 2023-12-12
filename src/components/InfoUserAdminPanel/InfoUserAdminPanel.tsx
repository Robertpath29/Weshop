import React, { FC, useEffect, useState } from "react";
import { InfoUserAdminPanelStyle } from "./infoUserAdminPanel.style";
import Loading from "../Loading/Loading";
import { userType } from "../../types/user.types";
import { responseType } from "../../types/response.types";
import { ADMIN_USERS_URL, axiosPut } from "../../api/axiosQuery";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducer/combineReducer";

const InfoUserAdminPanel: FC<{ data: responseType | undefined }> = ({
    data,
}) => {
    const current_user = useSelector((state: reducersType) => state.user);
    const [dataTable, setDataTable] = useState<userType[]>();
    const [selectValue, setSelectValue] = useState<{
        role: string;
        id: number | undefined;
    }>();

    const changeRole = () => {
        axiosPut(ADMIN_USERS_URL + `/${selectValue?.id}`, {
            user: { role: selectValue?.role },
            email: current_user.email,
        });
    };

    useEffect(() => {
        setDataTable(data?.oll_users);
    }, [data]);
    useEffect(() => {
        if (selectValue) {
            changeRole();
        }
    }, [selectValue]);
    return (
        <InfoUserAdminPanelStyle>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {dataTable?.map((user, key) => (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td>
                            <select
                                defaultValue={user.role}
                                onChange={(e) =>
                                    setSelectValue({
                                        role: e.target.value,
                                        id: user.id,
                                    })
                                }
                            >
                                <option value="basic">Basic</option>
                                <option value="moderator">Moderator</option>
                                <option value="admin">Admin</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </InfoUserAdminPanelStyle>
    );
};

export default InfoUserAdminPanel;
