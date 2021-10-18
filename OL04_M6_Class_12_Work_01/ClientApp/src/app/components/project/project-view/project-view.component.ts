import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../../models/mapping/project';
import { AppNotifyService } from '../../../services/common/app-notify.service';
import { AppDataService } from '../../../services/data/app-data.service';
import { DeleteDialogComponent } from '../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  projects: Project[] = []
  dataSource: MatTableDataSource<Project> = new MatTableDataSource(this.projects);
  columnList = ["name", "budget", "actions"]
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  constructor(
    private dataSvc: AppDataService,
    private notifySvc: AppNotifyService,
    private matDialog: MatDialog
  ) { }
  confirmDelete(item: Project): void {
    this.matDialog.open(DeleteDialogComponent, {
      width: '450px'
    }).afterClosed()
      .subscribe(r => {
        if (r) {
          this.dataSvc.deleteProject(Number(item.projectId))
            .subscribe(r => {
              this.dataSource.data = this.dataSource.data.filter(x => x.projectId != item.projectId);
              this.notifySvc.success("Data deleted", "DISMISS")
            }, err => {
              this.notifySvc.fail("Failed to delete", "DISMISS")
            });
        }
      })
  }
  ngOnInit(): void {
    this.dataSvc.getProjects()
      .subscribe(r => {
        this.projects = r;
        this.dataSource.data = this.projects;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, err => {
        this.notifySvc.fail("Failed to load projects", "DISMISS")
      });
  }

}
