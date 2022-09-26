import React from 'react';
import { View } from 'react-native';

import * as Style from './styles';
type Props = {
    title: string;
    subTitle: string;
}

const Highlight: React.FC<Props> = ({ subTitle, title }) => {
    return (
        <Style.Container>
            <Style.Title>{title}</Style.Title>
            <Style.SubTitle>{subTitle}</Style.SubTitle>
        </Style.Container>
    );
}

export default Highlight;