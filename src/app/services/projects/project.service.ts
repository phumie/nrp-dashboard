import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/classes/projects/project';
import { tap, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Timeline } from 'src/app/classes/projects/timeline';
import { ProjectContent } from 'src/app/classes/projects/projectContent';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application:json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = `${environment.apiUrl}/project`;

  constructor(private http: HttpClient) { }

  newFeedBack(project: ProjectContent): Observable<ProjectContent> {
    return this.http.post<ProjectContent>(`${environment.apiUrl}/projectcontent`, project)
      .pipe(
        retry(3),
        tap(_ => console.log('added project'))
      );
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        retry(3),
        tap(_ => console.log('Fetched project'))
    );
  }
  getProjectContent() : Observable<ProjectContent[]> {
    return this.http.get<ProjectContent[]>(`${environment.apiUrl}/projectcontent`).pipe(
      retry(3),
        tap(_ => console.log('Fetched project'))
    );
  }
  getTimelines() : Observable<Timeline[]> {
    return this.http.get<Timeline[]>(`${environment.apiUrl}/timeline`).pipe(
      retry(3),
        tap(_ => console.log('Fetched project'))
    );
  }
  getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url)
      .pipe(
        retry(3),
        tap(_ => console.log(`fetched project id=${id}`))
    );
  }

  searchProjects(term: string): Observable<Project[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.projectsUrl}/?name=${term}`;
    return this.http.get<Project[]>(url).pipe(
      retry(3),
      tap(_ => console.log(`found projects matching "${term}"`))
    );
  }

  addEmployee(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added project'))
      );
  }

  deleteEmployee(project: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${project.projectId}`;
    return this.http.delete<Project>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted project'))
      );
  }

  updateEmployee(project: Project): Observable<any> {
    return this.http.put(this.projectsUrl, project, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated project'))
      );
  }
}
