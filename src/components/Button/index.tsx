import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import * as Style from './styles';

type Props = TouchableOpacityProps & {
    title: string,
    type?: Style.ButtonTypeStyleProps

}

const Button: React.FC<Props> = ({ title, type = 'PRIMARY', ...rest }) => {
    return (
        <Style.Container
            type={type}
            {...rest}
        >
            <Style.Title>{title}</Style.Title>
        </Style.Container>
    );
}

export default Button;