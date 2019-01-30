import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProjectFile } from 'src/app/classes/projects/project-file';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ProjectFileService {

  private projectURL = `${environment.apiUrl}/projectFile`;

  constructor(private http: HttpClient) { }

  getProjectsFiles(): Observable<ProjectFile[]> {
    return this.http.get<ProjectFile[]>(this.projectURL)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived projects files'))
      );
  }

  getProjectFiles(id: number): Observable<ProjectFile> {
    const url = `${this.projectURL}/${id}`;
    return this.http.get<ProjectFile>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived project files'))
      );
  }

  addProjectFile(projectFile: ProjectFile): Observable<ProjectFile> {
    return this.http.post<ProjectFile>(this.projectURL, projectFile, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added project file'))
      );
  }

  deleteProjectFile(projectFile: ProjectFile): Observable<ProjectFile> {
    const url = `${this.projectURL}/${projectFile.clientContactInfoId}`;
    return this.http.delete<ProjectFile>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted project file'))
      );
  }

  updateProjectFile(projectFile: ProjectFile): Observable<any> {
    const url = `${this.projectURL}/${projectFile.clientContactInfoId}`;
    return this.http.put(url, projectFile, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated project file'))
      );
  }
}
