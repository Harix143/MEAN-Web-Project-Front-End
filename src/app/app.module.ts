import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CreateComponent } from './components/van/create/create.component';
import { UpdateComponent } from './components/van/update/update.component';
import { ListComponent } from './components/van/list/list.component';
import { NavbarComponent } from './components/van/navbar/navbar.component';
import { RoutesNavbarComponent } from './components/routes/routes-navbar/routes-navbar.component';
import { VanServiceService } from './components/van/van-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewvanComponent } from './components/van/viewvan/viewvan.component';
import { ViewrouteComponent } from './components/routes/viewroute/viewroute.component';
import { RouteServiceService } from './components/routes/route-service.service';
import { CreateRouteComponent } from './components/routes/create/create.component';
import { ListRouteComponent } from './components/routes/list/list.component';
import { UpdateRouteComponent } from './components/routes/update/update.component';
import { CreatefeeComponent } from './components/fees/createfee/createfee.component';
import { ListfeeComponent } from './components/fees/listfee/listfee.component';
import { UpdatefeeComponent } from './components/fees/updatefee/updatefee.component';
import { ViewfeeComponent } from './components/fees/viewfee/viewfee.component';
import { StdDefaultModule } from './layouts/std-default/std-default.module';
import { PrnDefaultModule } from './layouts/prn-default/prn-default.module';
import { DrvDefaultModule } from './layouts/drv-default/drv-default.module';
import { CreatedriverComponent } from './components/admin-driver/createdriver/createdriver.component';
import { ListdriverComponent } from './components/admin-driver/listdriver/listdriver.component';
import { EditdriverComponent } from './components/admin-driver/editdriver/editdriver.component';
import { ViewdriverComponent } from './components/admin-driver/viewdriver/viewdriver.component';
import { DriverServiceService } from './components/admin-driver/driver-service.service';
import { CreateadminstdComponent } from './components/admin-std/createadminstd/createadminstd.component';
import { ListadminstdComponent } from './components/admin-std/listadminstd/listadminstd.component';
import { EditadminstdComponent } from './components/admin-std/editadminstd/editadminstd.component';
import { ViewadminstdComponent } from './components/admin-std/viewadminstd/viewadminstd.component';
import { CreateadminprnComponent } from './components/admin-prn/createadminprn/createadminprn.component';
import { EditadminprnComponent } from './components/admin-prn/editadminprn/editadminprn.component';
import { ListadminprnComponent } from './components/admin-prn/listadminprn/listadminprn.component';
import { ViewadminprnComponent } from './components/admin-prn/viewadminprn/viewadminprn.component';
import { AdminstdServiceService } from './components/admin-std/adminstd-service.service';
import { AdmincomeditComponent } from './components/admin-complaint/admincomedit/admincomedit.component';
import { AdmincomviewComponent } from './components/admin-complaint/admincomview/admincomview.component';
import { AdmincomlistComponent } from './components/admin-complaint/admincomlist/admincomlist.component';
import { ViewstdvanComponent } from './components/std-van/viewstdvan/viewstdvan.component';
import { ViewstdDriverComponent } from './components/std-driver/viewstd-driver/viewstd-driver.component';
import { ViewdrvVanComponent } from './components/drv-van/viewdrv-van/viewdrv-van.component';
import { ViewdrvRouteComponent } from './components/drv-route/viewdrv-route/viewdrv-route.component';
import { UserTypeSelectionComponent } from './Users/user-type-selection/user-type-selection.component';
import { AdminComponent } from './Users/Admin/admin/admin.component';
import { SigninComponent } from './Users/Admin/Sign In/signin/signin.component';
import { UserDriverComponent } from './Users/Driver/user-driver/user-driver.component';
import { DriverSigninComponent } from './Users/Driver/driver-signin/driver-signin.component';
import { DriverSignupComponent } from './Users/Driver/driver-signup/driver-signup.component';
import { UserParentComponent } from './Users/Parent/user-parent/user-parent.component';
import { ParentSignInComponent } from './Users/Parent/parent-sign-in/parent-sign-in.component';
import { ParentSignUpComponent } from './Users/Parent/parent-sign-up/parent-sign-up.component';
import { UserStudentComponent } from './Users/student/user-student/user-student.component';
import { SignInComponent } from './Users/student/sign-in/sign-in.component';
import { StudentSignUpComponent } from './Users/student/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { UserServiceService } from './Users/user-service.service';
import { AuthInterceptor } from './auth/auth.intercepter';
import { CreatestdschComponent } from './components/std-sch/createstdsch/createstdsch.component';
import { UpdatestdschComponent } from './components/std-sch/updatestdsch/updatestdsch.component';
import { ListstdschComponent } from './components/std-sch/liststdsch/liststdsch.component';
import { ViewstdschComponent } from './components/std-sch/viewstdsch/viewstdsch.component';
import { CreatestdcompComponent } from './components/std-comp/createstdcomp/createstdcomp.component';
import { ListstdcompComponent } from './components/std-comp/liststdcomp/liststdcomp.component';
import { ViewstdcompComponent } from './components/std-comp/viewstdcomp/viewstdcomp.component';
import { CreatedrvcompComponent } from './components/drv-comp/createdrvcomp/createdrvcomp.component';
import { ListdrvcompComponent } from './components/drv-comp/listdrvcomp/listdrvcomp.component';
import { ViewdrvcompComponent } from './components/drv-comp/viewdrvcomp/viewdrvcomp.component';
import { CreateprncompComponent } from './components/prn-comp/createprncomp/createprncomp.component';
import { ListprncompComponent } from './components/prn-comp/listprncomp/listprncomp.component';
import { ViewprncompComponent } from './components/prn-comp/viewprncomp/viewprncomp.component';
import { ViewAirCondVansComponent } from './components/van/view-air-cond-vans/view-air-cond-vans.component';
import { AssignvanComponent } from './components/van/assignvan/assignvan.component';
import { AdminAssignRouteComponent } from './components/routes/admin-assign-route/admin-assign-route.component';
import { AdminAssignDriverComponent } from './components/admin-driver/admin-assign-driver/admin-assign-driver.component';
import { ViewAssignedStdComponent } from './components/drv-std/view-assigned-std/view-assigned-std.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    NavbarComponent,
    RoutesNavbarComponent,
    ViewvanComponent,
    ViewrouteComponent,
    CreateRouteComponent,
    ListRouteComponent,
    UpdateRouteComponent,
    ViewrouteComponent,
    CreatefeeComponent,
    ListfeeComponent,
    UpdatefeeComponent,
    ViewfeeComponent,
    CreatedriverComponent,
    ListdriverComponent,
    EditdriverComponent,
    ViewdriverComponent,
    CreateadminstdComponent,
    ListadminstdComponent,
    EditadminstdComponent,
    ViewadminstdComponent,
    CreateadminprnComponent,
    EditadminprnComponent,
    ListadminprnComponent,
    ViewadminprnComponent,
    AdmincomeditComponent,
    AdmincomviewComponent,
    AdmincomlistComponent,
    ViewstdvanComponent,
    ViewstdDriverComponent,
    ViewdrvVanComponent,
    ViewdrvRouteComponent,
    UserTypeSelectionComponent,
    AdminComponent,
    SigninComponent,
    UserDriverComponent,
    DriverSigninComponent,
    DriverSignupComponent,
    UserParentComponent,
    ParentSignInComponent,
    ParentSignUpComponent,
    UserStudentComponent,
    SignInComponent,
    StudentSignUpComponent,
    CreatestdschComponent,
    UpdatestdschComponent,
    ListstdschComponent,
    ViewstdschComponent,
    CreatestdcompComponent,
    ListstdcompComponent,
    ViewstdcompComponent,
    CreatedrvcompComponent,
    ListdrvcompComponent,
    ViewdrvcompComponent,
    CreateprncompComponent,
    ListprncompComponent,
    ViewprncompComponent,
    ViewAirCondVansComponent,
    AssignvanComponent,
    AdminAssignRouteComponent,
    AdminAssignDriverComponent,
    ViewAssignedStdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DefaultModule,
    StdDefaultModule,
    PrnDefaultModule,
    DrvDefaultModule,
   ],
  providers: [VanServiceService, RouteServiceService, DriverServiceService, AdminstdServiceService, 
    UserServiceService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
