export interface ToggleButtonsProps {
    key?: string;
    suffix?: string;
    data?: Array<string>;
    defaultValue?: number;
    onChange?: (index: number) => void;
}

export interface ItemProps {
    isSelected?: boolean;
}
