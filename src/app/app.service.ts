import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })

export class AppService {

    constructor(private http: HttpClient) {}

    public getIntegration() {
        return this.http.get(`https://raw.githubusercontent.com/CodeStreamHub/integrations-registry/main/registry.yaml`, {
            observe: 'body',
            responseType: "text"  // This one here tells HttpClient to parse it as text, not as JSON
          });
    }
   
}
