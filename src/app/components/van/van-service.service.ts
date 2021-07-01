import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Van } from '../../van';

@Injectable({
  providedIn: 'root'
})
export class VanServiceService {

  public van: Van = new Van;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  createVan(Van: Van) {
    return this.http.post(this.baseURi + '/admin/addvan', Van, { headers: this.headers })
  }

  readVan() {
    return this.http.get(this.baseURi + '/admin/vans', { headers: this.headers })
  }

  readAirCondVans() {
    return this.http.get(this.baseURi + '/admin/airconditionedvans', { headers: this.headers })
  }


  readSpecificVan(id: String) {
    return this.http.get(this.baseURi + '/admin/van' + id, { headers: this.headers })
  }

  updateVan(Van: Van, id: String) {
    return this.http.patch(this.baseURi + '/admin/updatevan/' + id, Van, { headers: this.headers })
  }

  deleteVan(id: String) {
    return this.http.delete(this.baseURi + '/admin/deletevan/' + id, { headers: this.headers })
  }

  readAvailableDrivers() {
    return this.http.get(this.baseURi + '/admin/availabledrivers', { headers: this.headers })
  }
  assignVan(driverId, vanId) {
    return this.http.patch(this.baseURi + '/admin/assign/' + driverId + '/van/' + vanId,{ headers: this.headers })
  }

  setter(vans: Van) {
    this.van = vans;
  }
  getter() {
    return this.van;
  }
}