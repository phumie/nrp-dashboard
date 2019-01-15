import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/classes/projects/project';
import { tap, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application:json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = `${environment.apiUrl}/project`;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
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

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added project'))
      );
  }

  deleteProject(project: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${project.projectId}`;
    return this.http.delete<Project>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted project'))
      );
  }

  updateProject(project: Project): Observable<any> {
    return this.http.put(this.projectsUrl, project, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated project'))
      );
  }
}
