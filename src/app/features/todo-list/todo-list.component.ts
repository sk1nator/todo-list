import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../../shared/models/todo-item';
import { SaveItemService } from '../../shared/services/save-item.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  form!: FormGroup;
  todoList: TodoItem[] = [];

  constructor(private formBuilder: FormBuilder,
              private saveItemService: SaveItemService) {
  }

  ngOnInit(): void {
    this.todoList = JSON.parse(localStorage.getItem('todo-list') ?? '[]')

    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      deal: ['', Validators.required]
    })
  }

  deleteItem(index: number): void {
    this.todoList.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  addItem(): void {
    if (this.form.valid) {
      const todoItem = {
        date: new Date().toISOString().split('T')[0],
        deal: this.form.get('deal')?.value,
        checked: false
      }
      this.saveItemService.save(this.todoList, todoItem, 'todo-list');
      this.form.reset();
    }
  }

  checkItem(todoItem: TodoItem) {
    todoItem.checked = !todoItem.checked;
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }
}
