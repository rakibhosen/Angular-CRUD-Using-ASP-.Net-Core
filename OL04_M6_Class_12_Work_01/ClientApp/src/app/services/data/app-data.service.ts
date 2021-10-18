import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/mapping/project';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(
    private http: HttpClient
  ) { }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`api/Projects`);
  }
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`api/Projects/${id}`);
  }
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`api/Projects`, project);
  }
  updateProject(project: Project): Observable<any> {
    return this.http.put<any>(`api/Projects/${project.projectId}`, project);
  }
  deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(`api/Projects/${id}`);
  }
}
