import React, { useState } from 'react';
import './App.scss';
import { Container } from './components/Container';
import { ModalPortalProvider } from './components/ModalPortalProvider';
import { NameFormView } from './components/NameFormView';
import { NameModalView } from './components/NameModalView';
import { NameForm } from './models/NameForm';

function App() {
    const [ nameFormModel ] = useState(() => new NameForm());

    return (
        <ModalPortalProvider>
            <Container>
                <NameFormView
                    nameFormModel={nameFormModel}
                />
            </Container>

            <NameModalView
                nameFormModel={nameFormModel}
            />
        </ModalPortalProvider>
    );
}

export default App;
