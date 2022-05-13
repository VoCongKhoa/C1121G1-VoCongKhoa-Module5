import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
}
