import { Component,OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ComponentRef } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
    filter: 'all' | 'pending' | 'completed' = 'all';
    todoList: any[] = [];
    newTask: string = '';
    @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;

    constructor() { }

    ngOnInit(): void {
        const storedTodoList = localStorage.getItem('todoList');
        if (storedTodoList) {
            this.todoList = JSON.parse(storedTodoList);
        }

        // this.todoList = storedTodoList.filter((t) => {
        //     return t.id != todoList.id;
        // });
        // if (this.filter === "all") {
        //     JSON.parse(storedTodoList);
        //   }
        //   return this.todoList.filter((item) =>
        //     this.filter === "done" ? item.done : !item.done
        //   );
    }

    addTask(text: string): void {
        if (text.trim() !== '') {
            const newTodoItem: any = {
                id: Date.now(),
                task: text.trim(),
                completed: false
            };
            this.todoList.push(newTodoItem);
            this.todoInputRef.nativeElement.value = '';
            this.saveTodoList();
        }
    }

    deleteTask(id: number): void {
        this.todoList = this.todoList.filter(item => item.id !== id);
        this.saveTodoList();
    }

    toggleCompleted(id: number): void {
        const todoItem = this.todoList.find(item => item.id === id);
        
        if (todoItem) {
            todoItem.completed = !todoItem.completed;
            this.saveTodoList();
        }

            

    }

    saveTodoList(): void {
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }

    
   
}