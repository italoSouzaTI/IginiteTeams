import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Style from './styles';

type Props = TouchableOpacityProps & {
    title: string
}

const GroupCard: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <Style.Container
            {...rest}
        >
            <Style.Icon />
            <Style.Title>
                {title}
            </Style.Title>
        </Style.Container>
    );
}

export default GroupCard;