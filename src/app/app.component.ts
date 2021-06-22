import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public integration: any;

  constructor(private appService: AppService) { }

  public ngOnInit() {
    this.appService.getIntegration().subscribe((res: any) => {
      const yaml = require('js-yaml');
      const obj = yaml.load(res, { encoding: 'utf-8' });
      console.log("onj", obj)
      this.integration = obj;
    })
  }

}
