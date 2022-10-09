import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Input from '@components/Input';
import Header from '@components/Header';
import Filter from '@components/Filter';
import ListEmpty from '@components/ListEmpty';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import PlayerCard from '@components/PlayerCard';

import * as Style from './styles';
import Button from '@components/Button';

const Players: React.FC = () => {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([])
    return (
        <Style.Container>
            <Header showBackButton />
            <Highlight
                title='Nome da turma'
                subTitle='adicione a galera e separe os times'
            />
            <Style.Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon
                    icon="add"
                />
            </Style.Form>
            <Style.HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            onPress={() => setTeam(item)}
                            isActive={item === team}
                            title={item}
                        />
                    )}
                    horizontal
                />
                <Style.NumberOfPlayers>{players.length}</Style.NumberOfPlayers>
            </Style.HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        onRemove={() => { }}
                        name={item} />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Não há pessoas nesse time.'
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />
            <Button
                title='Remover Turma'
                type='SECONDARY'
            />

        </Style.Container>
    );
}

export default Players;