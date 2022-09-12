import { observer } from "mobx-react-lite";
import { NameForm } from "../models/NameForm";
import { NameModal } from "./NameModal";

export const NameModalView = observer(({
    nameFormModel,
}: {
    nameFormModel: NameForm;
}) => {
    return (
        <NameModal
            open={nameFormModel.submitted}
            firstNameChildren={nameFormModel.firstName.value}
            lastNameChildren={nameFormModel.lastName.value}
        />
    );
});
