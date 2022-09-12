import { ReactNode } from "react";
import { InputLabel } from "./InputLabel";
import { InputValidationError } from "./InputValidationError";
import './InputGroup.scss';

export function InputGroup({
    labelChildren,
    validationErrorChildren,
    children,
}: {
    labelChildren?: ReactNode;
    validationErrorChildren?: ReactNode;
    children?: ReactNode;
}) {
    return (
        <label
            className="InputGroup"
        >
            <InputLabel>
                {labelChildren}
            </InputLabel>
            {children}
            <InputValidationError>
                {validationErrorChildren}
            </InputValidationError>
        </label>
    );
}

