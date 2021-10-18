import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../../../models/mapping/project';
import { AppNotifyService } from '../../../services/common/app-notify.service';
import { AppDataService } from '../../../services/data/app-data.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = new Project();
  constructor(
    private dataSvc: AppDataService,
    private notifySvc: AppNotifyService
  ) { }
  save(f: NgForm): void {
    console.log(this.project);
    this.dataSvc.createProject(this.project)
      .subscribe(r => {
        this.project = new Project();
        f.form.markAsUntouched();
        f.form.reset({});
        this.notifySvc.success("Succeeded to save data", "DISMISS");
      }, err => {
        this.notifySvc.fail("Failed to save data", "DISMISS");
      });
  }
  ngOnInit(): void {
  }

}
