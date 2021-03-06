/* Angular core imports */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Firebase imports */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* Material design imports */
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSnackBarModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatOptionModule
} from '@angular/material';

/* Angular Forms imports */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Google Maps imports */
import { AgmCoreModule } from '@agm/core';

/* ngrx imports */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* User defined UI modules and components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './ui/ui-routing.module';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { LoginComponent } from './ui/navbar/login/login.component';
import { VolunteerProfileComponent } from './ui/volunteer-profile/volunteer-profile.component';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { CoverComponent } from './ui/homepage/cover/cover.component';
import { OpportunitieslistComponent } from './ui/homepage/opportunitieslist/opportunitieslist.component';
import { OpportunitycardComponent } from './ui/homepage/opportunitieslist/opportunitycard/opportunitycard.component';
import { NgolistComponent } from './ui/homepage/ngolist/ngolist.component';
import { NgocardComponent } from './ui/homepage/ngolist/ngocard/ngocard.component';
import { NgoProfileComponent } from './ui/ngo-profile/ngo-profile.component';
import { VolunteerSignupComponent } from './ui/volunteer-signup/volunteer-signup.component';
import { NgoSignupComponent } from './ui/ngo-signup/ngo-signup.component';
import { OpportunityCardAdminComponent } from './ui/ngo-profile/opportunity-card-admin/opportunity-card-admin.component';
import { CreateOpportunityComponent } from './ui/ngo-profile/create-opportunity/create-opportunity.component';
import { OpportunityComponent } from './ui/ngo-profile/opportunity/opportunity.component';
import { AllOpportunitiesComponent } from './ui/all-opportunities/all-opportunities.component';
import { AllNgosComponent } from './ui/all-ngos/all-ngos.component';
import { GoogleMapsComponent } from './ui/homepage/google-maps/google-maps.component';
import { NGOapplicationsComponent } from './ui/ngo-profile/ngoapplications/ngoapplications.component';
import { SettingsNgoComponent } from './ui/navbar/settings/settings-ngo/settings-ngo.component';
import { SettingsVolunteerComponent } from './ui/navbar/settings/settings-volunteer/settings-volunteer.component';
import { EditOpportunityComponent } from './ui/ngo-profile/opportunity-card-admin/edit-opportunity/edit-opportunity.component';
import { VolunteerapplicationsComponent } from './ui/volunteer-profile/volunteerapplications/volunteerapplications.component';
import { SnackbarComponent } from './ui/snackbar/snackbar.component';

import { SummaryPipe } from './summary.pipe';

/* User defined state management */
import { userReducer } from './user/user.reducers';
import { uiReducer } from './ui/ui.reducers';
import { UserEffects } from './user/user.effects';
import { SingleapplicationComponent } from './ui/volunteer-profile/volunteerapplications/singleapplication/singleapplication.component';
import { CategoriesListComponent } from './ui/homepage/categories-list/categories-list.component';
import { ReviewStarsComponent } from './ui/ngo-profile/review-stars/review-stars.component';
import { AddReviewComponent } from './ui/ngo-profile/review-stars/add-review/add-review.component';
import { SearchComponent } from './ui/navbar/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VolunteerProfileComponent,
    HomepageComponent,
    CoverComponent,
    OpportunitieslistComponent,
    OpportunitycardComponent,
    NgolistComponent,
    NgocardComponent,
    NgoProfileComponent,
    VolunteerSignupComponent,
    NgoSignupComponent,
    OpportunityCardAdminComponent,
    CreateOpportunityComponent,
    OpportunityComponent,
    LoginComponent,
    AllOpportunitiesComponent,
    AllNgosComponent,
    GoogleMapsComponent,
    NGOapplicationsComponent,
    SettingsNgoComponent,
    SettingsVolunteerComponent,
    EditOpportunityComponent,
    VolunteerapplicationsComponent,
    SnackbarComponent,
    SummaryPipe,
    SingleapplicationComponent,
    CategoriesListComponent,
    ReviewStarsComponent,
    AddReviewComponent,
    SearchComponent,
  ],
  entryComponents: [
    CreateOpportunityComponent,
    OpportunityComponent,
    NGOapplicationsComponent,
    SettingsNgoComponent,
    SettingsVolunteerComponent,
    EditOpportunityComponent,
    VolunteerapplicationsComponent,
    SnackbarComponent,
    VolunteerSignupComponent,
    NgoSignupComponent,
    AddReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer,
      ui: uiReducer,
    }),
    MatAutocompleteModule,
    MatOptionModule,
    EffectsModule.forRoot([ UserEffects ]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
      libraries: ['places']
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    LoginComponent,
    HomepageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
