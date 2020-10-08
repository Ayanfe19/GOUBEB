import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { BlogModule } from "./blog/blog.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ClassroomModule } from "./classroom/classroom.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "corporate" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    BlogModule,
    DashboardModule,
    ClassroomModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
