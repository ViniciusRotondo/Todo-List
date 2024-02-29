'use client'
import next from "next";
import { Container, List } from '@mui/material';
import Form from '../app/components/Form'
import TodoList from '../app/components/TodoList'
import { useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id)
        setTodos(filtered)
    }

    const editTodo = (id, editedText) => {
        var todosArray = [...todos];

        for(var i in todosArray){
            if(todosArray[i].id === id){
                todosArray[i].text = editedText
            }
        }

        setTodos(todosArray)
    }

    return(
        <>
        <h1 style={{ textAlign:"center", color: "blue" }}>Lista de Tarefas</h1>
        <Container maxWidth='sm'>
            <Form addTodo={addTodo} />
            <List sx={{ marginTop: '1em' }}>
                {todos.map((todo) => ( 
                    <div key={todo.id}  style={{ marginTop: '1em' }}>
                        <TodoList editTodo={editTodo} todo={todo}  deleteTodo={deleteTodo}/>
                    </div>
                ))}
            </List>
        </Container>
        <h6 style={{ textAlign:"center", color: "blue" }}>Criado por Vinícius Rotondo</h6>
        </>
    )
}