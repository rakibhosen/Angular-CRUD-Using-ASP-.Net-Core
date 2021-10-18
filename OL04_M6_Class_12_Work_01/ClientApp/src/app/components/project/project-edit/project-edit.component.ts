import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/mapping/project';
import { AppNotifyService } from '../../../services/common/app-notify.service';
import { AppDataService } from '../../../services/data/app-data.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  project: Project = new Project();
constructor(
  private dataSvc: AppDataService,
  private notifySvc: AppNotifyService,
  private activatedRoute: ActivatedRoute
  ) { }
  update(f: NgForm): void {
    this.dataSvc.updateProject(this.project)
      .subscribe(r => {
        f.form.markAsUntouched();
        this.notifySvc.success("Succeeded to update", "DISMISS");
      }, err => {
        this.notifySvc.fail("Failed to update", "DISMISS");
      })
  }
  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params.id;
    this.dataSvc.getProjectById(id)
      .subscribe(r => {
        //console.log(r);
        
        this.project = r;
      }, err => {
        this.notifySvc.fail("Failed to load project", "DISMISS");
      })
  }

}
