import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { addTodo } from 'src/todo.actions';
import { Observable } from 'rxjs';
import { Todo } from 'src/todo.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{todos: Todo[]}>) {
    this.todos$ = store.pipe(select('todos'));
  }

  taskForm = new FormGroup({
    task: new FormControl('')
  });

  addTodo() {
    const text = this.taskForm.controls.task.value;
    this.store.dispatch(addTodo({text, done: false}));
  }

  onSubmit() {
    this.addTodo();
  }

}
