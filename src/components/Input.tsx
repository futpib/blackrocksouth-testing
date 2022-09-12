import { ChangeEventHandler, useCallback } from "react";
import classNames from 'classnames';
import './Input.scss';

export function Input({
    invalid,
    value,
    onChange,
    placeholder,
}: {
    invalid?: boolean;
    value?: string;
    onChange?: (newValue: string) => void;
    placeholder?: string;
}) {
    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        onChange?.(event.target.value);
    }, [
        onChange,
    ]);

    return (
        <input
            className={classNames(
                'Input',
                invalid && 'Input-invalid',
            )}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}

