import { ReactNode, useState } from "react";
import { ModalPortalContext } from "../contexts/ModalPortal";

export function ModalPortalProvider({
    children,
}: {
    children?: ReactNode;
}) {
    const [ container, setContainer ] = useState<null | HTMLElement>(null);

    return (
        <>
            <ModalPortalContext.Provider
                value={container}
            >
                {children}
            </ModalPortalContext.Provider>

            <div
                ref={setContainer}
            />
        </>
    );
}
