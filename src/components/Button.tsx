import { ComponentProps, ReactNode } from "react";
import classNames from 'classnames';
import './Button.scss';

type HTMLButtonProps = ComponentProps<"button">;

export function Button({
    disabled,
    type = 'button',
    onClick,
    children,
}: {
    disabled?: boolean;
    type?: HTMLButtonProps['type'];
    onClick?: HTMLButtonProps['onClick'];
    children?: ReactNode;
}) {
    return (
        <button
            className={classNames(
                'Button',
                disabled && 'Button-disabled',
            )}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

