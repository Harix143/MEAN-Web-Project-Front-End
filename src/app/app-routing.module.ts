import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CreateComponent } from './components/van/create/create.component';
import { UpdateComponent } from './components/van/update/update.component';
import { ListComponent } from './components/van/list/list.component';
import { ListRouteComponent } from './components/routes/list/list.component';
import { CreateRouteComponent } from './components/routes/create/create.component';
import { UpdateRouteComponent } from './components/routes/update/update.component';
import { ViewvanComponent } from './components/van/viewvan/viewvan.component';
import { ViewrouteComponent } from './components/routes/viewroute/viewroute.component';
import { ListfeeComponent } from './components/fees/listfee/listfee.component';
import { ViewfeeComponent } from './components/fees/viewfee/viewfee.component';
import { CreatefeeComponent } from './components/fees/createfee/createfee.component';
import { UpdatefeeComponent } from './components/fees/updatefee/updatefee.component';
import { StdDefaultComponent } from './layouts/std-default/std-default.component';
import { StdDashboardComponent } from './modules/std-dashboard/std-dashboard.component';
import { DrvDefaultComponent } from './layouts/drv-default/drv-default.component';
import { DrvDashboardComponent } from './modules/drv-dashboard/drv-dashboard.component';
import { PrnDefaultComponent } from './layouts/prn-default/prn-default.component';
import { PrnDashboardComponent } from './modules/prn-dashboard/prn-dashboard.component';
import { ListdriverComponent } from './components/admin-driver/listdriver/listdriver.component';
import { ViewdriverComponent } from './components/admin-driver/viewdriver/viewdriver.component';
import { CreatedriverComponent } from './components/admin-driver/createdriver/createdriver.component';
import { EditdriverComponent } from './components/admin-driver/editdriver/editdriver.component';
import { ListadminstdComponent } from './components/admin-std/listadminstd/listadminstd.component';
import { ViewadminstdComponent } from './components/admin-std/viewadminstd/viewadminstd.component';
import { CreateadminstdComponent } from './components/admin-std/createadminstd/createadminstd.component';
import { EditadminstdComponent } from './components/admin-std/editadminstd/editadminstd.component';
import { ListadminprnComponent } from './components/admin-prn/listadminprn/listadminprn.component';
import { ViewadminprnComponent } from './components/admin-prn/viewadminprn/viewadminprn.component';
import { CreateadminprnComponent } from './components/admin-prn/createadminprn/createadminprn.component';
import { EditadminprnComponent } from './components/admin-prn/editadminprn/editadminprn.component';
import { AdmincomlistComponent } from './components/admin-complaint/admincomlist/admincomlist.component';
import { AdmincomviewComponent } from './components/admin-complaint/admincomview/admincomview.component';
import { AdmincomeditComponent } from './components/admin-complaint/admincomedit/admincomedit.component';
import { ViewstdvanComponent } from './components/std-van/viewstdvan/viewstdvan.component';
import { ViewstdDriverComponent } from './components/std-driver/viewstd-driver/viewstd-driver.component';
import { ViewdrvVanComponent } from './components/drv-van/viewdrv-van/viewdrv-van.component';
import { ViewdrvRouteComponent } from './components/drv-route/viewdrv-route/viewdrv-route.component';
import { UserTypeSelectionComponent } from './Users/user-type-selection/user-type-selection.component';
import { AdminComponent } from './Users/Admin/admin/admin.component';
import { SigninComponent } from './Users/Admin/Sign In/signin/signin.component';
import { ParentSignInComponent } from './Users/Parent/parent-sign-in/parent-sign-in.component';
import { ParentSignUpComponent } from './Users/Parent/parent-sign-up/parent-sign-up.component';
import { UserParentComponent } from './Users/Parent/user-parent/user-parent.component';
import { SignInComponent } from './Users/student/sign-in/sign-in.component';
import { StudentSignUpComponent } from './Users/student/sign-up/sign-up.component';
import { UserStudentComponent } from './Users/student/user-student/user-student.component';
import { DriverSigninComponent } from './Users/Driver/driver-signin/driver-signin.component';
import { DriverSignupComponent } from './Users/Driver/driver-signup/driver-signup.component';
import { UserDriverComponent } from './Users/Driver/user-driver/user-driver.component';
import { AuthGuard } from './auth/auth.guard';
import { ListstdschComponent } from './components/std-sch/liststdsch/liststdsch.component';
import { ViewstdschComponent } from './components/std-sch/viewstdsch/viewstdsch.component';
import { CreatestdschComponent } from './components/std-sch/createstdsch/createstdsch.component';
import { ListstdcompComponent } from './components/std-comp/liststdcomp/liststdcomp.component';
import { ViewstdcompComponent } from './components/std-comp/viewstdcomp/viewstdcomp.component';
import { CreatestdcompComponent } from './components/std-comp/createstdcomp/createstdcomp.component';
import { ListdrvcompComponent } from './components/drv-comp/listdrvcomp/listdrvcomp.component';
import { ViewdrvcompComponent } from './components/drv-comp/viewdrvcomp/viewdrvcomp.component';
import { CreatedrvcompComponent } from './components/drv-comp/createdrvcomp/createdrvcomp.component';
import { ListprncompComponent } from './components/prn-comp/listprncomp/listprncomp.component';
import { ViewprncompComponent } from './components/prn-comp/viewprncomp/viewprncomp.component';
import { CreateprncompComponent } from './components/prn-comp/createprncomp/createprncomp.component';
import { ViewAirCondVansComponent } from './components/van/view-air-cond-vans/view-air-cond-vans.component';
import { AssignvanComponent } from './components/van/assignvan/assignvan.component';
import { AdminAssignRouteComponent } from './components/routes/admin-assign-route/admin-assign-route.component';
import { AdminAssignDriverComponent } from './components/admin-driver/admin-assign-driver/admin-assign-driver.component';
import { ViewAssignedStdComponent } from './components/drv-std/view-assigned-std/view-assigned-std.component';


const routes: Routes = [
  {path: '', component: UserTypeSelectionComponent, data: {title: 'Welcome'}},
  {
    path: 'user-admin', component: AdminComponent,
    children: [
      { path: 'signin', component: SigninComponent,data: {title: 'Admin Sign In'} },
    ]
  },
  {
    path: 'user-parent', component: UserParentComponent,
    children: [
      { path: 'signin', component: ParentSignInComponent ,data: {title: 'Parent Sign In'}},
      {path:"signup", component: ParentSignUpComponent,data: {title: 'Admin Sign Up'}}
    ]
  },
  {
    path: 'user-student', component: UserStudentComponent,
    children: [
      { path: 'signin', component: SignInComponent ,data: {title: 'Student Sign In'}},
      { path: 'signup', component: StudentSignUpComponent,data: {title: 'Student Sign Up'} },
    ]
  },
  {
    path: 'user-driver', component: UserDriverComponent,
    children: [
      { path: 'signin', component: DriverSigninComponent ,data: {title: 'Driver Sign In'}},
      { path: 'signup', component: DriverSignupComponent ,data: {title: 'Driver Sign Up'} },
    ]
  },
  {path: 'admin', component: DefaultComponent,
  canActivate:[AuthGuard], data: {role: 'admin'},
  children: [
    {path: 'dashboard', component: DashboardComponent,data: {title: 'Admin Dashboard'}}, 
    {path: 'posts', component: PostsComponent},
    {path: 'vans',component: ListComponent ,data: {title: 'Vans'}},
    {path: 'air-conditioned-vans',component: ViewAirCondVansComponent ,data: {title: 'Air Conditioned Vans'}},
    {path: 'vans/specific',component: ViewvanComponent, data: {title: 'Van Details'}},
    {path: 'vans/create',component: CreateComponent, data: {title: 'Create Van'}},
    {path: 'vans/update',component: UpdateComponent, data: {title: 'Update Van'}},
    {path: 'vans/assign-driver',component: AssignvanComponent, data: {title: 'Assign Van'}},

    {path: 'routes',component: ListRouteComponent, data: {title: 'All Routes'}},
    {path: 'routes/specific',component: ViewrouteComponent, data: {title: 'Route Details'}},
    {path: 'routes/create',component: CreateRouteComponent, data: {title: 'Create Route'}},
    {path: 'routes/update',component: UpdateRouteComponent, data: {title: 'Update Route'}},
    {path: 'routes/assign-route',component: AdminAssignRouteComponent, data: {title: 'Assign Route'}},

    {path: 'fees',component: ListfeeComponent, data: {title: 'Fee Challans'}},
    {path: 'fees/specific',component: ViewfeeComponent, data: {title: 'Fee Details'}},
    {path: 'fees/create',component: CreatefeeComponent, data: {title: 'Create Fee Challan'}},
    {path: 'fees/update',component: UpdatefeeComponent, data: {title: 'Update Challan'}},

    {path: 'drivers',component: ListdriverComponent, data: {title: 'Drivers'}},
    {path: 'drivers/specific',component: ViewdriverComponent, data: {title: 'Driver Details'}},
    {path: 'drivers/create',component: CreatedriverComponent,data: {title: 'Create Driver'}},
    {path: 'drivers/update',component: EditdriverComponent, data: {title: 'Update Driver'}},
    {path: 'drivers/assign-driver',component: AdminAssignDriverComponent, data: {title: 'Assign Driver'}},

    {path: 'students',component: ListadminstdComponent, data: {title: 'Students'}},
    {path: 'students/specific',component: ViewadminstdComponent, data: {title: 'Student Details'}},
    {path: 'students/create',component: CreateadminstdComponent, data: {title: 'Create Student'}},
    {path: 'students/update',component: EditadminstdComponent, data: {title: 'Update Student'}},

    {path: 'parents',component: ListadminprnComponent, data: {title: 'Parents'}},
    {path: 'parents/specific',component: ViewadminprnComponent,data: {title: 'Paernt Details'}},
    {path: 'parents/create',component: CreateadminprnComponent, data: {title: ' Create Parent'}},
    {path: 'parents/update',component: EditadminprnComponent, data: {title: 'Update Parent'}},

    {path: 'complaints',component: AdmincomlistComponent, data: {title: 'Complaints'}},
    {path: 'complaints/specific',component: AdmincomviewComponent, data: {title: 'Complaint Details'}},
    {path: 'complaints/update',component: AdmincomeditComponent, data: {title: 'Complaint Feedback'}},
  ]},

  {path: 'student', component: StdDefaultComponent,
  canActivate:[AuthGuard], data: {role: 'student'},
  children:[
    {path: 'dashboard', component: StdDashboardComponent, data: {title: 'Student Dashboard'}}, 

    {path: 'van', component: ViewstdvanComponent, data: {title: 'Assigned Van'}}, 
    {path: 'driver', component: ViewstdDriverComponent, data: {title: 'Assigned Driver'}},


    {path: 'schedule',component: ListstdschComponent, data: {title: 'Student Schedule'}},
    {path: 'schedules/specific',component: ViewstdschComponent , data: {title: 'Student Schedule'}},
    {path: 'schedule/create',component: CreatestdschComponent , data: {title: 'Student Schedule'}},

    {path: 'complaint',component: ListstdcompComponent , data: {title: 'Student Complaints'}},
    {path: 'complaint/specific',component: ViewstdcompComponent , data: {title: 'Student Complaints'}},
    {path: 'complaint/create',component: CreatestdcompComponent , data: {title: 'Student Complaints'}},
]},

{path: 'driver', component: DrvDefaultComponent,
canActivate:[AuthGuard], data: {role: 'driver'},
children:[
{path: 'dashboard', component: DrvDashboardComponent, data: {title: 'Driver Dashboard'}}, 

  {path: 'van', component: ViewdrvVanComponent, data: {title: 'Assigned Van'}}, 
  {path: 'route', component: ViewdrvRouteComponent, data: {title: 'Vans'}},

  {path: 'complaint',component: ListdrvcompComponent , data: {title: 'Driver Complaints'}},
  {path: 'complaint/specific',component: ViewdrvcompComponent , data: {title: 'Driver Complaints'}},
  {path: 'complaint/create',component: CreatedrvcompComponent , data: {title: 'Driver Complaints'}},

  {path: 'assignedstudents', component: ViewAssignedStdComponent, data: {title: 'Assigned Students'}},
]},
{path: 'parent', component: PrnDefaultComponent,
canActivate:[AuthGuard], data: {role: 'Parent'},
children:[
  {path: 'dashboard', component: PrnDashboardComponent, data: {title: 'Parent Dashboard'}},

  {path: 'complaint',component: ListprncompComponent , data: {title: 'Parent Complaints'}},
  {path: 'complaint/specific',component: ViewprncompComponent , data: {title: 'Parent Complaints'}},
  {path: 'complaint/create',component: CreateprncompComponent , data: {title: 'Parent Complaints'}},
]}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }