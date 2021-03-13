import React, { useState } from 'react';
import { markTodoDB, addTodoDB, deleteTodoDB } from '../../db/db';
import TodoCard from '../TodoCard/TodoCard';
import Sidebar from '../Sidebar/Sidebar';

function Dashboard({ user }) {
    const [showTimer, setShowTimer] = useState(false);

    let headingClassName = (color) => {
        return `text-3xl font-bold text-${color}-700`;
    };

    const addTodoToDB = (todo) => {
        addTodoDB(user, todo);
    };

    const markTodoToDB = (todo) => {
        markTodoDB(user, todo);
    };

    const deleteTodoToDB = (todo) => {
        deleteTodoDB(user, todo);
    };

    const dashboardItems = (
        <>
            <Sidebar />
            <div className="pl-0 md:pl-16 md:h-screen w-full md:pt-5">
                <div className="md:h-1/2 md:flex md:flex-row w-full">
                    <div className="h-96 md:h-full px-3 w-screen md:w-1/2 flex flex-col">
                        <h1 className={headingClassName('red')}>
                            High Importance + Urgent
                        </h1>
                        <TodoCard
                            priority={1}
                            bgColor="red"
                            addTodoToDB={addTodoToDB}
                            markTodoToDB={markTodoToDB}
                            deleteTodoToDB={deleteTodoToDB}
                        />
                    </div>
                    <div className="h-96 md:h-full px-3 w-screen md:w-1/2 flex flex-col">
                        <h1 className={headingClassName('blue')}>
                            High Importance + Not Urgent
                        </h1>
                        <TodoCard
                            priority={2}
                            bgColor="blue"
                            addTodoToDB={addTodoToDB}
                            markTodoToDB={markTodoToDB}
                            deleteTodoToDB={deleteTodoToDB}
                        />
                    </div>
                </div>
                <div className="md:h-1/2 md:flex md:flex-row w-full pb-2 mb-16 md:mb-0">
                    <div className="h-96 md:h-full px-3 w-screen md:w-1/2 flex flex-col">
                        <h1 className={headingClassName('green')}>
                            Low Importance + Urgent
                        </h1>
                        <TodoCard
                            priority={3}
                            bgColor="green"
                            addTodoToDB={addTodoToDB}
                            markTodoToDB={markTodoToDB}
                            deleteTodoToDB={deleteTodoToDB}
                        />
                    </div>
                    <div className="h-96 md:h-full px-3 w-screen md:w-1/2 flex flex-col">
                        <h1 className={headingClassName('yellow')}>
                            Low Importance + Not Urgent
                        </h1>
                        <TodoCard
                            priority={4}
                            bgColor="yellow"
                            addTodoToDB={addTodoToDB}
                            markTodoToDB={markTodoToDB}
                            deleteTodoToDB={deleteTodoToDB}
                        />
                    </div>
                </div>
            </div>
        </>
    );

    return <>{showTimer ? <div>Timer</div> : dashboardItems}</>;
}

export default Dashboard;
