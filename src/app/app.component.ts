import {Component} from '@angular/core';
import {UsersDataService} from './services/users-data.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projektWWW';
  users: any;

  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    })
  }
  getUserFormData(data:any, login:NgForm)
  {
    console.warn(data);
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result);
    })
    login.reset();
    document.getElementById("submitButton")!.innerText = "Done!";
    document.getElementById("submitButton")!.setAttribute('disabled', 'true');
  }
}
