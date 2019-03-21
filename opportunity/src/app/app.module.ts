/* Angular core imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Firebase imports */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './ui/homepage/google-maps/google-maps.component';


/* User defined state management */
import { userReducer } from './user/user.reducers';
import { uiReducer } from './ui/ui.reducers';
import { UserEffects } from './user/user.effects';
import { NGOapplicationsComponent } from './ui/ngo-profile/ngoapplications/ngoapplications.component';
import { SettingsNgoComponent } from './ui/navbar/settings/settings-ngo/settings-ngo.component';
import { SettingsVolunteerComponent } from './ui/navbar/settings/settings-volunteer/settings-volunteer.component';

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
    SettingsVolunteerComponent
  ],
  entryComponents: [
    CreateOpportunityComponent,
    OpportunityComponent,
    NGOapplicationsComponent,
    SettingsNgoComponent,
    SettingsVolunteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
