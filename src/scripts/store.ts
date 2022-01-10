import AsyncStorage from "@react-native-async-storage/async-storage";

export type RecordStoreName = 'Alipay' | 'Card' | 'Cash' | 'WeChat'
export type CountStoreName = 'AlipayCount' | 'CardCount' | 'CashCount' | 'WeChatCount'
export type RecordItem = {  // store all the records
    amount: number  // (15.5)
    type: 'IN' | 'OUT'  // gain or spend
    note: string  // ('buy a coffee today')
    createTime: number  // timestamp
    year: number  // which year (2022)
    month: number  // which month (01)
    day: number  // which day (01)
    // week: string  // which week of the year (2)
}
export type CountItem = {  // store count of records
    year: number  // store whole year`s record into single item of array
    month: {
        in: number  // in
        out: number  // out
    }[]
    // week: {
    //     week: number
    //     in: number  // in
    //     out: number  // out
    // }
}
export type RecordStore = RecordItem[]
export type CountStore = CountItem[]

const recordStoreList: RecordStoreName[] = ['Alipay', 'Card', 'Cash', 'WeChat']
const countStoreList: RecordStoreName[] = ['Alipay', 'Card', 'Cash', 'WeChat']
const totalStoreList:(RecordStoreName|CountStoreName)[] = [...recordStoreList, ...countStoreList]

/**
 * @description add a new record to recordStore
 * @param storeName
 * @param newRecord
 */
const addRecordStoreItem = async (storeName: RecordStoreName, newRecord: RecordItem) => {
    try {
        console.log('new: ', newRecord);
        let _recordStore = await getStoreObj(storeName)
        let _countStore = await getStoreObj((storeName+'Count') as CountStoreName)
        if(_recordStore === null) {
            if(await createStore(storeName)) { _recordStore = await getStoreObj(storeName) }
            else { return false }
        }
        if(_countStore === null) {
            if(await createStore((storeName+'Count') as CountStoreName)) { _countStore = await getStoreObj((storeName+'Count') as CountStoreName) }
            else { return false }
        }
        // push the record and update it
        ;(_recordStore as RecordStore).push(newRecord)
        await setStoreObj(storeName, _recordStore as RecordStore)
        // update the count
        const _countStoreForThisYear = (_countStore as CountStore).find((item) => { return item.year === dateJs("YEAR") })
        if(!_countStoreForThisYear) {  // this year`s first record
            ;(_countStore as CountStore).push({
                year: dateJs("YEAR"),
                month: [
                    {
                        in: newRecord.type === 'IN' ? newRecord.amount : 0,
                        out: newRecord.type === 'OUT' ? newRecord.amount : 0
                    }
                ]
            })
        }
        else if(!_countStoreForThisYear.month[dateJs("MONTH")]) {  // this month`s first record
            _countStoreForThisYear.month[dateJs("MONTH")] = {
                in: newRecord.type === 'IN' ? newRecord.amount : 0,
                out: newRecord.type === 'OUT' ? newRecord.amount : 0
            }
        }
        else {  // another record this month
            _countStoreForThisYear.month[dateJs("MONTH")].in += newRecord.type === 'IN' ? newRecord.amount : 0
            _countStoreForThisYear.month[dateJs("MONTH")].out += newRecord.type === 'OUT' ? newRecord.amount : 0
        }
        await setStoreObj((storeName+'Count') as CountStoreName, _countStore as CountStore)
        return true
    }
    catch (e) {
        return false
    }
}

/**
 * @description check all the stores and create the store not exist
 */
const checkStores = async (): Promise<boolean> => {
    try {
        const currentStores: (RecordStoreName|CountStoreName)[] = await getStoreNameList()

        for(let i = 0; i < totalStoreList.length; i ++) {
            // create the storage if this one is not exist
            if(!currentStores.includes(totalStoreList[i])) {
                const result = await createStore(totalStoreList[i])
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
 * @description clear specific store (or all the store)
 * @param name
 */
const clearStore = async (name: RecordStoreName | CountStoreName | 'All') => {
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

/**
 * @description create a new store
 */
const createStore = async (storeName: RecordStoreName | CountStoreName): Promise<boolean> => {
    try {
        await AsyncStorage.setItem(storeName, JSON.stringify([]))
        return true
    }
    catch (e) {
        return false
    }
}

/**
 * @description get the name list of all stores
 */
const getStoreNameList = async () => {
    return await AsyncStorage.getAllKeys() as (RecordStoreName|CountStoreName)[]
}

/**
 * @description get the value of specific store (return null if not exist)
 */
const getStoreObj = async (storeName: RecordStoreName | CountStoreName): Promise<RecordStore | CountStore | null> => {
    try {
        const _store = await AsyncStorage.getItem(storeName)
        return _store === null ? null : JSON.parse(_store)
    }
    catch (e) {
        return null
    }
}

/**
 * @description use ts`s overload to define the types
 * @param storeName
 * @param newStore
 */
function setStoreObj(storeName: RecordStoreName, newStore: RecordStore): Promise<boolean>
function setStoreObj(storeName: CountStoreName, newStore: CountStore): Promise<boolean>
async function setStoreObj(storeName: (RecordStoreName | CountStoreName), newStore: (RecordStore | CountStore)):Promise<boolean> {
    try {
        await AsyncStorage.setItem(storeName, JSON.stringify(newStore))
        return true
    }
    catch (e) {
        return false
    }
}

/**
 * @description return the year、month、week or day in number
 * @param need
 */
const dateJs = (need: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY') => {
    switch (need) {
        case "YEAR":
            return new Date().getFullYear()
        case "MONTH":
            return new Date().getMonth()
        case "WEEK":
            return -1
        case "DAY":
            return new Date().getDate()
    }
}

export {
    addRecordStoreItem,
    checkStores,
    clearStore,
    getStoreObj,

    dateJs,
}
