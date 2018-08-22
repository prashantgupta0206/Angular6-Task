import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  data: any;
  modalVisible = false;
  
  constructor(private router: Router) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      resourceName: new FormControl(),
      country: new FormControl(),
      gnederName: new FormControl()
    });

  }
  public gotoNextPage(e, routeURL) {
    this.router.navigate([routeURL]);
  }
  onSubmit(formVal) {
    if (formVal) {
      this.data = formVal;
    }
  }

}
