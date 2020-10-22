import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reactiveForm: FormGroup;
  projectStatusValues = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      // 'projectname': new FormControl(null, [Validators.required, this.forbiddenProjectNameSync.bind(this)]),
      'projectname': new FormControl(null, Validators.required, this.forbiddenProjectNameAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null, Validators.required)
    });
    console.log(this.reactiveForm);
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.log('Project name: ' + this.reactiveForm.get('projectname').value);
    console.log('Project email: ' + this.reactiveForm.get('email').value);
    console.log('Project status: ' + this.reactiveForm.get('status').value);
  }

  forbiddenProjectNameSync(control: FormControl): {[keyname: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'forbiddenProjectName': true};
    }
    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({'forbiddenProjectName': true});
        } else {
          resolve(null);
        }
      }, 500);
    });
  }
}
