import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import * as Style from './styles';
type Props = TouchableOpacityProps & Style.FilterProps & {
    title: String,
}

const Filter: React.FC<Props> = ({ title, isActive = false, ...rest }) => {
    return (
        <Style.Container
            isActive={isActive}
            {...rest}
        >
            <Style.Title>{title}</Style.Title>
        </Style.Container>
    );
}

export default Filter;