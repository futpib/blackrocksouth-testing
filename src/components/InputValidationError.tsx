import { ReactNode } from "react";
import './InputValidationError.scss';

export function InputValidationError({
    children,
}: {
    children?: ReactNode;
}) {
    return (
        <div
            className="InputValidationError"
        >
            {children}
        </div>
    );
}
