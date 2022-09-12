import { ReactNode } from "react";
import './InputLabel.scss';

export function InputLabel({
    children,
}: {
    children?: ReactNode;
}) {
    return (
        <label
            className="InputLabel"
        >
            {children}
        </label>
    );
}
