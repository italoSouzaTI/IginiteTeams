import React from 'react';


import * as Style from './styles';

const Loading: React.FC = () => {
    return (
        <Style.Container>
            <Style.LoadingIndicator />
        </Style.Container>
    );
}

export default Loading;