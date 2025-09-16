
export const fetchTodos = async () => {

    try {
        const response = await fetch("https://dummyjson.com/todos")
        const todos = await response.json()
        return todos
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message)
            return []
        }
    }
}
