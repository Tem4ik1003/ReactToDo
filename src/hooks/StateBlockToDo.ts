import {useState} from "react";

export type ToDoBlockItemType = {
    id: number,
    title: string
}

const state: ToDoBlockItemType[] = [
    {id: 1, title: 'Learn to JS'},
    {id: 2, title: 'Learn to CSS'}
]

export const useStateBlockToDos = () => {
    const [listBlockToDo, setListBlockToDo] = useState<ToDoBlockItemType[]>(state)

    const addBlockToDo = (title: string) => {
        setListBlockToDo([...listBlockToDo, {
            id: listBlockToDo.length + 1,
            title: title
        }])
    }
    const changeTitleBlockToDo = (id: number, newTitle: string) => {
        const newArray = listBlockToDo.map((l) => l.id === id ? {...l, title:newTitle} : l)
        setListBlockToDo(newArray)
    }

    return {listBlockToDo, addBlockToDo, changeTitleBlockToDo}
}