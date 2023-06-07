import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @ViewChild('myModal', {static: false}) modal!: ElementRef;

  search: string = '';
  items: any;
  list: any = [];
  detailBook: any = {};
  filterCategorie = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getList().subscribe((response: any) => this.list = response.items);
  }

  searchBookFunction(search: string) {
    let text = this.search.replace(/\s/g, "");
    if (text.length > 2) {
      this.apiService.getItem(this.search).subscribe((response: any) => this.items = response.items);
    }
  }

  openModal(id: string) {
    if (!this.items) {
      this.list.forEach((element: any) => {
        if (element.id === id) {
          this.detailBook = element
          this.modal.nativeElement.style.display = 'block';
        }
      });
    } else {
      this.items.forEach((element: any) => {
        if (element.id === id) {
          this.detailBook = element
          this.modal.nativeElement.style.display = 'block';
        }
      });
    }
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
