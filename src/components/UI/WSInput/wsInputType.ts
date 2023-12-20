export type WSInputType = {
    type: string;
    placeholder?: string;
    value?: string;
    id?: string;
    autocomplete?: string;
    warning?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    checked?: boolean;
};
