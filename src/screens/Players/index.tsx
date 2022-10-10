import React, { useState, useEffect, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import Input from '@components/Input';
import Header from '@components/Header';
import Filter from '@components/Filter';
import Button from '@components/Button';
import Loading from '@components/Loading';
import ListEmpty from '@components/ListEmpty';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import PlayerCard from '@components/PlayerCard';

import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/PlayersGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import * as Style from './styles';




type RouteParams = {
    group: string
}
const Players: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const newPlayerNameInputRef = useRef<TextInput>(null);
    const { group } = route.params as RouteParams;
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    const [newPlayerName, setNewPlayerName] = useState('');
    const [isLoading, setIsloading] = useState(true);

    async function handleAddPlayer () {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar');
        }
        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group);
            newPlayerNameInputRef.current?.blur();
            setNewPlayerName('');
            fetchPlayersByTeam();
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert("Nova pessoa", error.message);
            } else {
                console.log(error);
                Alert.alert("Nova Pessoa", 'Não foi possível adicionar')
            }
        }
    }

    async function fetchPlayersByTeam () {
        try {
            setIsloading(true);
            const playersByTeam = await playerGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert("Pessoas", 'Não foi possível carregar as pessoas do time selecionado');
        } finally {
            setIsloading(false);
        }
    }

    async function handlePlayerRemove (playnername: string) {
        try {
            await playerRemoveByGroup(playnername, group);
            fetchPlayersByTeam();
        } catch (error) {
            console.log(error);
            Alert.alert("Remover Pessoas", 'Não foi possível remover essa pessoa.');
        }
    }

    async function groupRemove () {
        try {
            await groupRemoveByName(group);
            navigation.navigate('Groups')
        } catch (error) {
            console.log(error);
            Alert.alert('Remover grupo', 'Não foi possível remover o grupo.')
        }
    }
    async function handleGroupRemove () {
        Alert.alert("Remover", "Deseja remover a turma?", [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => { groupRemove() } }
        ])
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    return (
        <Style.Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subTitle='adicione a galera e separe os times'
            />
            <Style.Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    value={newPlayerName}
                    onChangeText={setNewPlayerName}
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon
                    onPress={handleAddPlayer}
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

            {
                isLoading ?
                    <Loading />
                    :

                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <PlayerCard
                                onRemove={() => handlePlayerRemove(item.name)}
                                name={item.name} />
                        )}
                        ListEmptyComponent={() => (
                            <ListEmpty
                                message='Não há pessoas nesse time.'
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
                    />
            }
            <Button
                title='Remover turma'
                type='SECONDARY'
                onPress={handleGroupRemove}
            />

        </Style.Container>
    );
}

export default Players;