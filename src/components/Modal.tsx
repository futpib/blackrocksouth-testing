import { ReactNode, useContext } from "react";
import { createPortal } from "react-dom";
import { ModalPortalContext } from "../contexts/ModalPortal";
import { Container } from "./Container";
import './Modal.scss';

export function Modal({
    open,
    children,
}: {
    open: boolean;
    children: ReactNode;
}) {
    const portalContainer = useContext(ModalPortalContext);

    if (!open || !portalContainer) {
        return null;
    }

    return createPortal((
        <div
            className="ModalBackdrop"
        >
            <Container>
                <div
                    className="Modal"
                >
                    {children}
                </div>
            </Container>
        </div>
    ), portalContainer);
}
