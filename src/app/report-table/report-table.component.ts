import { Component, OnInit,ViewChild } from '@angular/core';
import { ReportComponent } from '../report/report.component';
import rep from "../../assets/reports.json"
// import { MatPaginator } from '@angular/material/paginator';
//import { HttpClient } from '@angular/common/http';
import { MetadataService } from '../metadata.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  reports:ReportComponent[] = [];
  displayedColumns: string[] = ['name', 'date', 'url'];
  minRows: number = 11;
  title:string[] = ["title"];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  dataSource: MatTableDataSource<ReportComponent>;

  constructor(private metadataService:MetadataService) { }

  ngOnInit(): void {
    this.generateReports();
    this.genReports();
    console.log(this.reports)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  generateReports(): void{
    let reparr = rep.reports;
    for (let idx in rep.reports){
      let r = new ReportComponent
      r.setDate(reparr[idx].date)
      r.setName(reparr[idx].name)
      r.setReportLink(reparr[idx].reportLink)
      this.reports.push(r)
    }

    /*for (let i=rep.reports.length;i < this.minRows;i++){
      this.reports.push(new ReportComponent)
    }*/

    this.dataSource = new MatTableDataSource<ReportComponent>(this.reports);
  }

  genReports(): void{
    this.metadataService.getMetadata("/metadata")
    .subscribe((data: any) => console.log(data));
  }

  redirect(url:string):void{
    window.location.href = url
  }

}
