

export default function Task({ todos }) {
    return (
        <>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
                {(todos.length > 0 ? "Список задач" : "Список пуст")}
            </h3>
            <ul>
                {todos.map((todo, index) =>
                    <div key={index}>
                        <div className="mt-5">
                            <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:justify-between items-center">
                                <div className="sm:flex">
                                    <div className="mt-3 sm:ml-4 sm:mt-0">
                                        <div className="text-sm font-medium text-gray-900 pr-5">
                                            {todo.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-6 items-center">
                                    <input
                                        id="check"
                                        aria-describedby="comments-description"
                                        name="comments"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </>
    )
}