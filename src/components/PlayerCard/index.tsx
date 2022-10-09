import React from 'react';
import ButtonIcon from '@components/ButtonIcon';

import * as Style from './styles';

type PlayerCardProps = {
    name: string;
    onRemove: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, onRemove }) => {
    return (
        <Style.Container>
            <Style.Icon
                name="person"
            />
            <Style.Name>
                {name}
            </Style.Name>
            <ButtonIcon
                onPress={onRemove}
                icon="close"
                type="SECONDARY"
            />
        </Style.Container>
    );
}

export default PlayerCard;