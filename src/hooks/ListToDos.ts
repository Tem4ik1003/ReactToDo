import {useState} from "react";

export type ToDoItemType = {
    id: number,
    title: string,
    typeToDo: string,
    status: boolean
}

const state: ToDoItemType[] = [
    {id: 1, title: 'Learn to JS', typeToDo: "In Progress", status: false},
    {id: 2,title: 'Learn to CSS', typeToDo: 'To Close', status: false}
]

export const useListToDos = () => {
    const [listToDos, setListToDos] = useState<ToDoItemType[]>(state)

    const addToDo = (title: string, typeToDo: string) => {
        setListToDos([...listToDos, {
            id: listToDos.length + 1,
            title: title,
            typeToDo: typeToDo,
            status: false
        }])
    }

    return {listToDos, addToDo}
}