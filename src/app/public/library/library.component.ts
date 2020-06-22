import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'author', 'title', 'isbn', 'description'];
  dataSource: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
   this.getAllBooks();
  }

  getAllBooks() {
     this.bookService.getAllBooks().subscribe(
       (inbooks: Book[]) => {

         this.dataSource = inbooks;
         console.log('[LOG -> getAllBooks. inbooks]' , this.dataSource);
        }
     );
  }

}
