import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{


  ActivePosttitle: string = "Author";
  ActivePostContent: string = "Blog Post Content";

  filterePosts: Observable<any[]>;

  Posts: any[] = [];
  search: string = "";

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.downloadData().subscribe(
      data => {
      this.Posts = data;
    });
  }

  setActive(post: any) {
    this.ActivePosttitle = post.title;
    this.ActivePostContent = post.body;
  }


}
