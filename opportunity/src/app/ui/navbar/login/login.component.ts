import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { LoginService } from "../../../user/user-auth/login.service";
import { UpdateLoadingState, UpdateUIState } from "../../ui.actions";
import { UIState } from "../../ui.reducers";
import {
  UserState,
  isUserCompleteSelector,
  getUserState
} from "src/app/user/user.reducers";
import { NGO } from "src/app/data/models/ngo.model";
import { Volunteer } from "src/app/data/models/volunteer.model";
import { NgoSignupComponent } from "../../ngo-signup/ngo-signup.component";
import { VolunteerSignupComponent } from "../../volunteer-signup/volunteer-signup.component";
// import { Register } from "src/app/user/user.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  // TO DO: export from the user type interface a subtype of NGO | Volunteer
  user: any;
  constructor(
    private store: Store<UIState>,
    private userStore: Store<UserState>,
    private auth: LoginService,
    public dialog: MatDialog
  ) {}

  loginGoogle(isNgo: boolean) {
    this.store.dispatch(
      new UpdateLoadingState({
        component: "navbar",
        loadingState: true
      })
    );
    this.store.dispatch(
      new UpdateUIState({
        component: "navbar",
        uiState: isNgo ? "NGO_SIGNIN" : "VOL_SIGNIN"
      })
    );
    this.auth.loginWithGoogle();
    this.userStore.select(getUserState).subscribe(user => {
      if (!user.isComplete) {
        if (user.isNgo) {
          this.dialog
            .open(NgoSignupComponent)
            .afterClosed()
            .subscribe((registrationSuccesful: boolean) => {
              if (registrationSuccesful) {
                // this.store.dispatch(new Register({ isComplete: true }));
              }
            });

          // TO DO: check if the action was successfull and only the dispatch
        } else this.dialog.open(VolunteerSignupComponent);
      }
    });
  }
}
