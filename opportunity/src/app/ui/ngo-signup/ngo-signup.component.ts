import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar
} from '@angular/material';

@Component({
  selector: 'app-ngo-signup',
  templateUrl: './ngo-signup.component.html',
  styleUrls: ['./ngo-signup.component.css']
})
export class NgoSignupComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<NgoSignupComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngoProfile = new FormGroup({
    orgNameForm: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    descriptionForm: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ]),
    websiteForm: new FormControl(''),
    addressForm: new FormControl('', [Validators.required]),
    emailForm: new FormControl('', [Validators.required, Validators.email]),
    phoneForm: new FormControl('', [Validators.required])
  });

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }

  submitNGO() {
    const newNGO = this.ngoProfile.value;
    const result: any = {
      name: newNGO.orgNameForm,
      about: newNGO.descriptionForm,
      contact: {
        website: newNGO.websiteForm,
        address: newNGO.addressForm,
        publicEmail: newNGO.emailForm,
        phone: newNGO.phone
      }
    };
    console.log(result, 'result');

    // the result together with the data coming from the login service
    // has to be send to be stored to the DB
    console.log(this.ngoProfile, 'ngo profile');
    if (this.ngoProfile.valid) {
      console.log('form submitted');
      this.dialogRef.close();
    } else {
      console.log('form invalid');
    }

    if (this.ngoProfile.valid) {
      this.dialogRef.close();
      this.snackBar.open('You just joined our opprtunities network!', 'close', {
        duration: 4000
      });
    }
  }
}