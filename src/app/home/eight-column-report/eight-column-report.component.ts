import { Component, OnInit } from '@angular/core';
import {DummyData2} from './dummy-data2';

@Component({
  selector: 'app-eight-column-report',
  templateUrl: './eight-column-report.component.html',
  styleUrls: ['./eight-column-report.component.scss']
})
export class EightColumnReportComponent implements OnInit {
  public gridData: any[] = DummyData2;
  constructor() { }

  ngOnInit() {
  }

}
