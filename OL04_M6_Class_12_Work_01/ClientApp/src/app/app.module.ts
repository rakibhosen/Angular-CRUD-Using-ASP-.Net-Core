import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/common/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { HomeComponent } from './components/home/home.component';
import { AppDataService } from './services/data/app-data.service';
import { AppNotifyService } from './services/common/app-notify.service';
import { HttpClientModule } from '@angular/common/http';
import { MatImportModule } from './modules/mat-import/mat-import.module';
import { ProjectViewComponent } from './components/project/project-view/project-view.component';
import { ProjectCreateComponent } from './components/project/project-create/project-create.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './components/common/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProjectViewComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    MatImportModule
    
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [AppDataService, AppNotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
