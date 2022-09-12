import { ReactNode } from "react";
import { Modal } from "../components/Modal";
import './NameModal.scss';

export const NameModal = ({
    open,
    firstNameChildren,
    lastNameChildren,
}: {
    open: boolean;
    firstNameChildren: ReactNode,
    lastNameChildren: ReactNode,
}) => {
    return (
        <Modal
            open={open}
        >
            <div
                className="NameModal"
            >
                Привет,
                {' '}
                {firstNameChildren}
                {' '}
                {lastNameChildren}
            </div>
        </Modal>
    );
};
