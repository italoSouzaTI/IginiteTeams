import React from 'react';
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native';

import * as Style from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
    const { COLORS } = useTheme();
    return (
        <Style.Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}

export default Input;