import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Book[]> {
    return this.http.get(`api/game/tournaments/list`).map(
      res => {
        return res.json().results.map(
          item => {
            return new Book(
             
            );
          }
        )
      }
    );
  }
}


