import {useCallback, useEffect, useState} from "react";

const useLocalStorage = (itemName, initialValue, options = {}) => {
    const {
        serialize = true,
        delay = 0,
    } = options

    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchFromLocalStorage = async () => {
            if (delay) {
                await new Promise(resolve => setTimeout(resolve, delay))
            }

            try {
                const storedItem = localStorage.getItem(itemName)

                if (storedItem === null) {
                    const valueToStore = serialize ? JSON.stringify(initialValue) : initialValue
                    localStorage.setItem(itemName, valueToStore)
                    setItem(initialValue)
                } else {
                    const parsedItem = serialize ? JSON.parse(storedItem) : storedItem
                    setItem(parsedItem)
                }
            } catch (error) {
                console.log(`Error reading localStorage itemName: ${itemName}`, error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchFromLocalStorage()
    }, [])

    const saveItem = useCallback((value) => {
        try {
            // add to state
            const valueToStore = value instanceof Function ? value() : value
            setItem(value)

            // add to localStorage
            const valueToSave = serialize ? JSON.stringify(valueToStore) : valueToStore
            localStorage.setItem(itemName, valueToSave)

        } catch (error) {
            console.log(`Error reading localStorage itemName: ${itemName}`, error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [itemName, item, serialize])

    const updateItem = useCallback((uuid, newValue) => {
        try {
            setItem((prevValue) => {
                const item = prevValue.find(item => item.uuid === uuid)

                const result = prevValue.map(item=> {
                    if (item.uuid === uuid) {
                        return {...item, text: newValue}
                    }

                    return item
                })

                const valueToSave = serialize ? JSON.stringify(result) : result
                localStorage.setItem(itemName, valueToSave)
                return result
            })
        } catch (error) {
            console.log(`Error reading localStorage itemName: ${itemName}`, error)
            setError(error)
        } finally {
            setLoading(false)
        }

    }, [itemName, serialize])

    return {
        item,
        saveItem,
        updateItem,
        loading,
        error,
    }
}

export {
    useLocalStorage
}