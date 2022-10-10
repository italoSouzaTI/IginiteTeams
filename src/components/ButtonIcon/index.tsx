import React from 'react';
import { View } from 'react-native';
import { TouchableProps } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons'
import * as Style from './styles';

type Props = TouchableProps & {
    icon: keyof typeof MaterialIcons.glyphMap,
    type?: Style.ButtonIconTypeStyleProps,
}

const ButtonIcon: React.FC<Props> = ({ icon,
    type = "PRIMARY", ...rest }) => {
    return (
        <Style.Container
            {...rest}
        >
            <Style.Icon
                name={icon}
                type={type}
            />
        </Style.Container>
    );
}

export default ButtonIcon;