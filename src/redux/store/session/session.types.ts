export type sessionType = {
    status: string;
    current_user: userType;
    message: string;
};

export type userType = {
    id: number;
    email: string;
    name: string;
};
