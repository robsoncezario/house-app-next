export interface ToggleButtonsProps {
    key?: string;
    suffix?: string;
    data?: Array<string>;
    defaultValue?: number;
    onChange?: Function;
}

export interface ItemProps {
    isSelected?: boolean;
}