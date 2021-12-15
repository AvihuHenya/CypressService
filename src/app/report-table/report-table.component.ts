import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportComponent } from '../report/report.component';
import { MetadataService } from '../services/metadata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from '../models/report.model';
import { first, Subscription } from 'rxjs';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true })
  
  reports: any;
  title: string[] = ["title"];
  displayedColumns: string[] = ['name', 'date', 'url'];
  
  reportsComponent: ReportComponent[] = [];
  minRows: number = 11;
  paginator: MatPaginator;
  dataSource: MatTableDataSource<ReportComponent>;

  subscriber: Subscription;

  constructor(private metadataService: MetadataService) { }

  ngOnInit(): void {
    this.genReports();
  }
  
  generateReports(): void {
    const reports: Report[] = this.reports.reports;
    let r = new ReportComponent;
    for (const report of reports) {
      r.setDate(report.date)
      r.setName(report.name)
      r.setReportLink(report.reportUrl)
      this.reportsComponent.push(r)
    }
    
    this.dataSource = new MatTableDataSource<ReportComponent>(this.reportsComponent);
    this.dataSource.paginator = this.paginator;
  }

  genReports(): void {
    this.subscriber = this.metadataService.getMetadata().subscribe((data: any) => {
      this.reports = data;
      
      this.generateReports();
    });
  }

  redirect(url: string): void {
    window.open(url, '_blank')?.focus();
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
