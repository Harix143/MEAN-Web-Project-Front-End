import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '../../van';
@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {
  public Route: Route = new Route;
  private baseURi: String = "http://localhost:3000"
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http :HttpClient) { }

  createRoute(route:Route){
    return this.http.post(this.baseURi+'/admin/addroute', route,{headers:this.headers} )
  }

  readRoute(){
    return this.http.get(this.baseURi+'/admin/routes',{headers:this.headers} )
  }

  readSpecificRoute(id:String){
    return this.http.get(this.baseURi+'/admin/route'+id,{headers:this.headers} )
  }

  updateRoute(route:Route,id:String){
    return this.http.patch(this.baseURi+'/admin/updateroute/' +id, route,{headers:this.headers} )
  }

  deleteRoute(id:String){
    return this.http.delete(this.baseURi+'/admin/deleteroute/'+id,{headers:this.headers} )
  }

  readAvailableDrivers() {
    return this.http.get(this.baseURi + '/admin/availableroutedrivers', { headers: this.headers })
  }
  assignRoute(driverId, routeId) {
    return this.http.patch(this.baseURi + '/admin/assign/' + driverId + '/route/' + routeId,{ headers: this.headers })
  }

  setter(routes:Route){
    this.Route = routes;
  }
  getter(){
    return this.Route;
  }
}
