import { FormEventHandler, ReactNode, useCallback } from "react";
import './Form.scss';

export function Form({
    disabled,
    onSubmit,
    children,
}: {
    disabled?: boolean;
    onSubmit?: () => void;
    children?: ReactNode;
}) {
    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
        event.preventDefault();
        if (!disabled) {
            onSubmit?.();
        }
    }, [
        disabled,
        onSubmit,
    ]);

    return (
        <form
            className="Form"
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    );
}

