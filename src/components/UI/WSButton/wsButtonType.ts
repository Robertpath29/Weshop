export type wsButtonType = {
    children: string;
    border?: number;
    backgroundColor?: string;
    color?: string;
    maxWidth?: number;
    upper?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
