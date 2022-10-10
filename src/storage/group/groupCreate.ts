import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { groupsGetAll } from "./groupGetAll";
import { GROUP_COLLECTION } from '@storage/storeageConfig';

export async function groupCreate (newGroup: string) {
    try {
        const storedGroups = await groupsGetAll();

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new AppError('Já existe um grupo cadastrado com esse nome.');
        }
        const storege = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storege)
    } catch (error) {
        throw error;
    }
}