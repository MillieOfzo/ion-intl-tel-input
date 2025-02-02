import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { translationPrefix } from "projects/ion-intl-tel-input/src/lib/data";
import { IonIntlTelInputModel, IonIntlTelInputValidators } from "projects/ion-intl-tel-input/src/public-api";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  phone: IonIntlTelInputModel = {
    e164Number: "+31104122467",
    dialCode: "+31",
    internationalNumber: "+31 10 412 2467",
    isoCode: "nl",
    nationalNumber: "010 412 2467",
  };
  formValue = { phoneNumber: this.phone, test: "" };
  form: FormGroup;

  defaultCountryIsoTest = "nl";
  dialCodePrefix = "+";
  enableAutoCountrySelect = false;
  enablePlaceholder = false;
  fallbackPlaceholder = "";
  inputPlaceholder = "";
  maxLength = "15";
  dropdownPlaceholder = 'Land'
  modalTitle = "Select Country";
  modalCssClass = "";
  modalSearchPlaceholder = "Enter country name";
  modalCloseText = "Close";
  modalCloseButtonSlot = "end";
  modalCanSearch = true;
  modalShouldBackdropClose = true;
  modalShouldFocusSearchbar = true;
  modalSearchFailText = "No countries found.";
  modalItemIconSlot = "end";
  onlyCountries = [];
  preferredCountries = [];
  selectFirstCountry = true;
  separateDialCode = true;

  disableTest = false;

  translationPrefix = `${translationPrefix}.`;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang("nl");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use("nl");

  }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl(
        {
          value: /* null */ this.formValue.phoneNumber,
          disabled: this.disableTest,
        },
        [Validators.required, IonIntlTelInputValidators.phone]
      ),
    });
  }

  logPhone() {
    console.log(this.phone);
  }

  get phoneNumber() {
    return this.form.get("phoneNumber");
  }

  onSubmit() {
    console.log(this.phoneNumber);
    console.log(this.phoneNumber.value);
  }
}
