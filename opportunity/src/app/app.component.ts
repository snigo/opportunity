import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { getUserState, UserState } from './user/user.reducers';
import { getUIState, UIState } from './ui/ui.reducers';
import { GOOGLE_LOGIN_SUCCESS, GET_USER_PENDING, GET_USER_LOCATION_PENDING } from './user/user.actions';
import { TOGGLE_GLOBAL_PLACEHOLDER } from './ui/ui.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private me: UserState;
  private userStateSubscription: Subscription;
  private authStateSubscription: Subscription;
  private uiStateSubscription: Subscription;
  private navbarUIState: string;
  public displayApp: boolean = true;

  constructor(
    private auth: AngularFireAuth,
    private store: Store<any>,
  ) {}

  ngOnInit() {
    this.userStateSubscription = this.store.select(getUserState)
      .subscribe(user => {
        this.me = user;
        if (!user.location) {
          this.store.dispatch(new GET_USER_LOCATION_PENDING());
        }
      });

    this.uiStateSubscription = this.store.select(getUIState)
      .subscribe((uiState: UIState) => {
        this.navbarUIState = uiState.navbar.uiState;
        this.displayApp = uiState.global.displayApp;
      });

    this.authStateSubscription = this.auth.authState.subscribe(authResponse => {
      if (authResponse) {
        this.store.dispatch(new GOOGLE_LOGIN_SUCCESS());
        if (!this.me.isLoggedIn) {
          this.store.dispatch(new GET_USER_PENDING({
            logInEmail: authResponse.email,
            displayName: authResponse.displayName,
            photoURL: authResponse.photoURL,
            isNgo: this.parseNgoUIState(this.navbarUIState),
          }));
        }
      }
    });
  }

  /* Being responsible developers, we unsubscribe all subscriptions */
  ngOnDestroy() {
    this.userStateSubscription && this.userStateSubscription.unsubscribe();
    this.authStateSubscription && this.authStateSubscription.unsubscribe();
    this.uiStateSubscription && this.uiStateSubscription.unsubscribe();
  }

  /* @TODO: Move helper functions to the dedicated service */
  parseNgoUIState(uiState: string): boolean {
    return /^NGO/i.test(uiState);
  }

}

