import {Component} from '@angular/core';
import {UsersDataService} from './services/users-data.service';

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
  getUserFormData(data:any)
  {
    console.warn(data);
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result);
    })
  }
}
