import { Button } from "./Button";
import { NameForm } from "../models/NameForm";
import { InputView } from "./InputView";
import { Form } from "./Form";
import { InputGroupView } from "./InputGroupView";
import { observer } from "mobx-react-lite";

export const NameFormView = observer(({
    nameFormModel,
}: {
    nameFormModel: NameForm;
}) => {
    return (
        <Form
            disabled={nameFormModel.submitting}
            onSubmit={nameFormModel.submit}
        >
            <InputGroupView
                labelChildren="Имя"
                inputModel={nameFormModel.firstName}
            >
                <InputView
                    placeholder="Иван"
                    inputModel={nameFormModel.firstName}
                />
            </InputGroupView>

            <InputGroupView
                labelChildren="Фамилия"
                inputModel={nameFormModel.lastName}
            >
                <InputView
                    placeholder="Петров"
                    inputModel={nameFormModel.lastName}
                />
            </InputGroupView>

            <Button
                disabled={nameFormModel.submitting}
                type="submit"
            >
                Готово
            </Button>
        </Form>
    );
});
