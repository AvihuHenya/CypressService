import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  name: string = "";
  date: string = "";
  reportUrl: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDate(date: string) {
    this.date = date;
  }

  public setReportLink(reportUrl: string) {
    this.reportUrl = reportUrl;
  }

}
