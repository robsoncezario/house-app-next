export interface InputNumberProps {
    title?: string;
    max?: number;
    min?: number;
    step?: number;
    defaultValue?: number;
    onChange?: (index: number) => void;
}

export interface CircleButtonProps {
    disabled?: boolean
}
