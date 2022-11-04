// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'sampleapp';
// }
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userFirstName: '' = '';
  userLastName: '' = '';

  userForm: FormGroup;
  listData: any;


  constructor(private fb: FormBuilder) {
    this.listData = [];

    this.userForm = this.fb.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
    });
  }

  public addItems(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    //event.target.disabled = true;
  }

  deleteItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element) this.listData.splice(index, 1);
    });
  }
  ngOnInit() {}
}

