export type wsButtonType = {
    children: string;
    border?: number;
    backgroundColor?: string;
    color?: string;
    maxWidth?: string;
    upper?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
