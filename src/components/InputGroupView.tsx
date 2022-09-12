import { observer } from 'mobx-react-lite';
import { ComponentProps } from 'react';
import { Input as InputModel } from '../models/Input';
import { InputGroup } from './InputGroup';

export type InputGroupViewProps = Omit<ComponentProps<typeof InputGroup>, 'validationErrorChildren'> & {
    inputModel: InputModel,
}

export const InputGroupView = observer(({
    inputModel,
    ...props
}: InputGroupViewProps) => (
    <InputGroup
        validationErrorChildren={inputModel.pristine ? null : inputModel.validationError}
        {...props}
    />
))
