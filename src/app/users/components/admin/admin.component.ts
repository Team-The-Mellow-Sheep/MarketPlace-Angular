import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
// import { AppModule } from '../../../app.module';
import { ProductsListService } from '../../../products-list/services/products-list.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AbstractFirebaseService } from '../../../shared/services/abstract-firebase.service';
import { IEntity } from '../../../shared/services/index';
// import { User } from '../../../shared/models/user-model';


// let db = AppModule;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  smartPhones = new BehaviorSubject([]);
  listOfUsers;
  constructor(
    private productsListService: ProductsListService,
    private UserService: UserService,
  ) {
    // this.smartPhones = this.productsListService.getSmarthphones();
    const asd = this.productsListService.getListProductByCamera('', '12 MP');
    // console.log(asd)
  }

  ngOnInit() {
    // for (let index = 0; index < 200; index++) {
      this.smartPhones = this.productsListService.getSmarthphonesAdmin();
    // }

    this.listOfUsers = this.UserService.getList();
  }

  onScroll() {
    this.smartPhones = this.productsListService.getSmarthphones();
  }

  onWindowScroll(numberProduct) {
    this.smartPhones = this.productsListService.getSmarthphones();
  }

}
