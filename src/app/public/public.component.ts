import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }



}
