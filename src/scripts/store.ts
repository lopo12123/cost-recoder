import AsyncStorage from "@react-native-async-storage/async-storage";

type StoreName = 'Alipay' | 'Card' | 'Cash' | 'WeChat'

const storeList: StoreName[] = ['Alipay', 'Card', 'Cash', 'WeChat']

/**
 * @description check all the stores and create the store not exist
 */
const checkStores = async (): Promise<boolean> => {
    try {
        const currentStores: StoreName[] = await getStoreList()

        for(let i = 0; i < storeList.length; i ++) {
            // create the storage if this one is not exist
            if(!currentStores.includes(storeList[i])) {
                const result = await createStore(storeList[i])
                if(!result) return false
            }
        }
        return true
    }
    catch (e) {
        return false
    }
}

/**
 * @description get the name list of all stores
 */
const getStoreList = async () => {
    return await AsyncStorage.getAllKeys() as StoreName[]
}

/**
 * @description get the value of specific store (return null if not exist)
 */
const getStoreObj = async (storeName: StoreName): Promise<object | null> => {
    try {
        const _store = await AsyncStorage.getItem(storeName)
        return _store === null ? null : JSON.parse(_store)
    }
    catch (e) {
        return null
    }
}

/**
 * @description create a new store
 */
const createStore = async (storeName: StoreName): Promise<boolean> => {
    try {
        await AsyncStorage.setItem(storeName, '')
        return true
    }
    catch (e) {
        return false
    }
}

/**
 * @description clear specific store (or all the store)
 * @param name
 */
const clearStore = async (name: StoreName | 'All') => {
    try {
        if(name === 'All') {
            await AsyncStorage.clear()
            await checkStores()
            return true
        }
        else {
            await AsyncStorage.removeItem(name)
            return true
        }
    }
    catch (e) {
        return false
    }
}



export {
    checkStores,
    clearStore,
}
