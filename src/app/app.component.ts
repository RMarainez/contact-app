import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    const url = 'http://localhost:3030/api/contacts';
    this.http.post(url, this.contact)
      .subscribe((response) => {
        console.log(response);
        form.reset();
      }, (error) => {
        console.error(error);
      });
  }
}