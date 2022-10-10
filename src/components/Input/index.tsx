import React from 'react';
import { useTheme } from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native';

import * as Style from './styles';

type InputProps = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

const Input: React.FC<InputProps> = ({ inputRef, ...rest }) => {
    const { COLORS } = useTheme();
    return (
        <Style.Container
            ref={inputRef}
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}

export default Input;