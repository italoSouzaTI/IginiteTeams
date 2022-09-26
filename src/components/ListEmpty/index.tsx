import React from 'react';
import { View } from 'react-native';

import * as Style from './styles';

type Props = {
    message: string,
}

const ListEmpty: React.FC<Props> = ({ message }) => {
    return (
        <Style.Container>
            <Style.Message>{message}</Style.Message>
        </Style.Container>
    );
}

export default ListEmpty;