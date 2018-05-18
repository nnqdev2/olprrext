import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe} from '@angular/common';
import { environment } from '../../environments/environment';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
import { Observable, of} from 'rxjs';
// import { map, catchError, tap, retry} from 'rxjs/operators';

import { IncidentDataService } from './incident-data.service';
import { SiteType } from '../models/site-type';
import { ConfirmationType } from '../models/confirmation-type';
import { County } from '../models/county';
import { DiscoveryType } from '../models/discovery-type';
import { Quadrant } from '../models/quadrant';
import { ReleaseCauseType } from '../models/release-cause-type';
import { SourceType } from '../models/source-type';
import { State } from '../models/state';
import { StreetType } from '../models/street-type';
import { Incident } from '../models/incident';
import { IncidentValidators } from '../validators/incident.validator';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  providers: [ DatePipe, IncidentDataService ]
})

export class IncidentComponent implements OnInit {

  incident: Incident = new Incident();
  incidentForm: FormGroup;
  confirmationTypes: ConfirmationType[] = [];
  counties: County[] = [];
  discoveryTypes: DiscoveryType[] = [];
  quadrants: Quadrant[] = [];
  releaseCauseTypes: ReleaseCauseType[] = [];
  siteTypes: SiteType[] = [];
  sourceTypes: SourceType[] = [];
  states: State[] = [];
  streetTypes: StreetType[] = [];

  currentDate: Date;
  showInvoiceContact = false;
  errorMessage: string;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  isDebug = false;
  isClosed = true;

  errors: any[];
  showAllErrorsMessages = false;





  constructor(private incidentDataService: IncidentDataService, private formBuilder: FormBuilder, private datePipe: DatePipe
    , private configService: ConfigService) {}


  ngOnInit() {
    this.getSiteTypes();
    this.getConfirmationTypes();
    this.getCounties();
    this.getDiscoveryTypes();
    this.getQuadrants();
    this.getReleaseCauseTypes();
    this.getSourceTypes();
    this.getStates();
    this.getStreetTypes();
    this.createForm();
  }


  createForm() {
    this.incidentForm = this.formBuilder.group({
      contractorUid:  [''],
      contractorPwd:  [''],
      reportedBy:  ['', Validators.required],
      reportedByPhone:  ['', Validators.required],
      reportedByEmail: ['', [Validators.required, Validators.email]],
      releaseType:  ['', Validators.required],
      dateReceived:  [{value: '', disabled: true,  validators: Validators.required}],
      facilityId: [''],
      siteName:  ['', Validators.required],
      siteCounty:  ['', Validators.required],
      streetNbr: ['', Validators.required],
      streetQuad:  ['', Validators.required],
      streetName:  ['', Validators.required],
      streetType: ['', Validators.required],
      siteAddress:  [''],
      siteCity:  ['', Validators.required],
      siteZipcode: ['', Validators.required],
      sitePhone:  [''],
      company:  ['', Validators.required],
      initialComment:  ['', Validators.maxLength(710)],
      discoveryDate: ['', Validators.required],
      confirmationCode:  ['', Validators.required],
      discoveryCode:  ['', Validators.required],
      causeCode: ['', Validators.required],
      sourceId:  ['', Validators.required],
      rpFirstName:  ['', Validators.required],
      rpLastName: ['', Validators.required],
      rpOrganization:  ['', Validators.required],
      rpAddress:  ['', Validators.required],
      rpAddress2: [''],
      rpCity:  ['', Validators.required],
      rpState:  ['', Validators.required],
      rpZipcode: ['', Validators.required],
      rpPhone:  ['', Validators.required],
      rpEmail:  ['', [Validators.email]],
      icFirstName:  ['', Validators.required],
      icLastName: ['', Validators.required],
      icOrganization:  ['', Validators.required],
      icAddress:  [''],
      icAddress2: [''],
      icCity:  ['', Validators.required],
      icState:  ['', Validators.required],
      icZipcode: ['', Validators.required],
      icPhone:  ['', Validators.required],
      icEmail:  ['', [Validators.email]],
      groundWater: [''],
      surfaceWater: [''],
      drinkingWater: [''],
      soil: [''],
      vapor: [''],
      freeProduct: [''],
      unleadedGas: [''],
      leadedGas: [''],
      misGas: [''],
      diesel: [''],
      wasteOil: [''],
      heatingOil: [''],
      lubricant: [''],
      solvent: [''],
      otherPet: [''],
      chemical: [''],
      unknown: [''],
      mtbe: [''],
      submitDateTime: [''],
      deqOffice: ['']
    },
    {validator: [IncidentValidators.selectOneOrMoreMedia, IncidentValidators.selectOneOrMoreContaminants] }
  );
    this.incidentForm.patchValue({
      dateReceived: this.datePipe.transform(new Date(), 'MM-dd-yyyy')
    });
  }

  setShowContactInvoice() {
    if (typeof this.incidentForm.controls.releaseType.value !== 'undefined'
    && (this.incidentForm.controls.releaseType.value === 'R' || this.incidentForm.controls.releaseType.value === 'U')) {
      this.showInvoiceContact = true;
    } else {
      this.showInvoiceContact = false;
    }
  }

  copyResponsibleToInvoice() {
    this.incidentForm.controls.icFirstName.setValue(this.incidentForm.controls.rpFirstName.value);
    this.incidentForm.controls.icLastName.setValue(this.incidentForm.controls.rpLastName.value);
    this.incidentForm.controls.icOrganization.setValue(this.incidentForm.controls.rpOrganization.value);
    this.incidentForm.controls.icAddress.setValue(this.incidentForm.controls.rpAddress.value);
    this.incidentForm.controls.icPhone.setValue(this.incidentForm.controls.rpPhone.value);
    this.incidentForm.controls.icCity.setValue(this.incidentForm.controls.rpCity.value);
    this.incidentForm.controls.icEmail.setValue(this.incidentForm.controls.rpEmail.value);
    this.incidentForm.controls.icState.setValue(this.incidentForm.controls.rpState.value);
    this.incidentForm.controls.icZipcode.setValue(this.incidentForm.controls.rpZipcode.value);
  }

  submitIncident(): void {
    if (this.incidentForm.dirty && this.incidentForm.valid) {
        this.createIncident();
    } else if (this.incidentForm.invalid) {
        this.errors = this.findInvalidControls();
        this.showAllErrorsMessages = true;
        this.isClosed = false;
    } else if (!this.incidentForm.dirty) {
        this.onCreateComplete();
    }
  }
  createIncident(): void {
    this.incidentForm.controls.deqOffice.setValue(this.getDeqOffice());
    this.incidentForm.controls.contractorUid.setValue(environment.contractor_uid);
    this.incidentForm.controls.contractorPwd.setValue(environment.contractor_pwd);
    this.incidentForm.controls.siteAddress.setValue(`${this.incidentForm.controls.streetNbr.value} `
      + `${this.incidentForm.controls.streetQuad.value} `
      + `${this.incidentForm.controls.streetName.value} `
      + `${this.incidentForm.controls.streetType.value} `);


    const ngbDate = this.incidentForm.controls['discoveryDate'].value;
    const myDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day);
    this.incidentForm.controls['discoveryDate'].setValue(myDate);
    this.incidentForm.controls['submitDateTime'].setValue(myDate);

    console.log('*********this.incidentForm is ');
    console.log(this.incidentForm);
    console.log('*********this.incident is ' );
    console.log( JSON.stringify(this.incident));

    // Copy the form values over the product object values
    const p = Object.assign({}, this.incident, this.incidentForm.value);

    console.log('*********p is ' + JSON.stringify(p));

    console.error('********************************');
    console.error(this.incidentForm.controls.groundWater.value);
    console.error(this.incidentForm.controls.groundWater.errors);

    this.incidentDataService.createIncident(p)
        .subscribe(
            () => this.onCreateComplete(),
            (error: any) => this.errorMessage = <any>error
        );
  }

  onCreateComplete(): void {
    // Reset the form to clear the flags
    console.log('ok did it hip hip hoorayyy!!!!');
    this.incidentForm.reset();
    this.incidentForm.patchValue({
      dateReceived: this.datePipe.transform(new Date(), 'MM-dd-yyyy')
    });
    // throw new Error('ERRRRRRRRRRRRRRRRRRRRRRRRRRR');
  }

  getAppConfig() {
    this.incidentDataService.getConfirmationTypes().subscribe(
      data => { this.confirmationTypes = data; },
      err => console.error(err)
    );
  }

  getConfirmationTypes() {
    this.incidentDataService.getConfirmationTypes().subscribe(
      data => { this.confirmationTypes = data; },
      err => console.error(err)
    );
  }

  getCounties() {
    this.incidentDataService.getCounties().subscribe(
      data => { this.counties = data; },
      err => console.error(err)
    );
  }

  getDiscoveryTypes() {
    this.incidentDataService.getDiscoveryTypes().subscribe(
      data => { this.discoveryTypes = data; },
      err => console.error(err)
    );
  }

  getQuadrants() {
    this.incidentDataService.getQuadrants().subscribe(
      data => { this.quadrants = data; },
      err => console.error(err)
    );
  }

  getReleaseCauseTypes() {
    this.incidentDataService.getReleaseCauseTypes().subscribe(
      data => { this.releaseCauseTypes = data; },
      err => console.error(err)
    );
  }

  getSiteTypes() {
    this.incidentDataService.getSiteTypes().subscribe(
      data => { this.siteTypes = data; },
      err => console.error(err)
    );
  }

  getSourceTypes() {
    this.incidentDataService.getSourceTypes().subscribe(
      data => { this.sourceTypes = data; },
      err => console.error(err)
    );
  }

  getStates() {
    this.incidentDataService.getStates().subscribe(
      data => { this.states = data; },
      err => console.error(err)
    );
  }

  getStreetTypes() {
    this.incidentDataService.getStreetTypes().subscribe(
      data => { this.streetTypes = data; },
      err => console.error(err)
    );
  }

  resetForm(): void {
    this.incidentForm.reset();
    this.showAllErrorsMessages = false;
    this.isClosed = true;
  }

  populateTestData(): void {
    this.incidentForm.patchValue({
        dateReported: this.datePipe.transform(new Date(), 'MM-dd-yyyy'),
    reportedBy:  'donald duck',
    reportedByPhone:  '5039999999',
    reportedByEmail: 'a@b.com',
    releaseType:  'R',
    dateReceived: this.datePipe.transform(new Date(), 'MM-dd-yyyy'),
    facilityId: 2,
    siteName:  'Disneyland',
    siteCounty:  '12',
    streetNbr: '12',
    streetQuad:  'W',
    streetName:  'Park',
    streetType: 'Avenue',
    // siteAddress:  ['', Validators.required],
    siteCity:  'Salem',
    siteZipcode: '90099',
    sitePhone: '1231234444',
    company:  'disney',
    initialComment:  'quack quack quack',
    discoveryDate: this.datePipe.transform(new Date(), 'MM-dd-yyyy'),
    confirmationCode: 'CN',
    discoveryCode:  'OT',
    causeCode: 'OT',
    sourceId: '2',
    rpFirstName: 'rpfname',
    rpLastName: 'rplname',
    rpOrganization: 'rporg',
    rpAddress:  'rpAddress',
    rpAddress2: 'rpAddress2',
    rpCity: 'salem',
    rpState:  'OR',
    rpZipcode: '97008',
    rpPhone:  '9999999999',
    rpEmail: 'b@c.com',
    icFirstName:  'icFirstName',
    icLastName: 'iclname',
    icOrganization:  'icOrg',
    icAddress:  'icAddress',
    icAddress2: 'icAddress2',
    icCity:  'Salem',
    icState:  'OR',
    icZipcode: '97224',
    icPhone:  '9098087777',
    icEmail:  'r@v.y',
    groundWater: 1,
    surfaceWater: 1,
    drinkingWater: 1,
    soil: 1,
    vapor: 1,
    freeProduct: 1,
    unleadedGas: 1,
    leadedGas: 1,
    misGas: 1,
    diesel: 1,
    wasteOil: 1,
    heatingOil: 1,
    lubricant: 1,
    solvent: 1,
    otherPet: 1,
    chemical: 1,
    unknown: 1,
    mtbe: 1,
    submitDatetime: new Date()
  });

  this.incidentForm.patchValue({
    dateReceived: this.datePipe.transform(new Date(), 'MM-dd-yyyy')
  });
    // end of populate test data
  }

  transformDate(date) {
    this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  private getDeqOffice(): string {
    let deqOffice = 'NWR';
    if (this.incidentForm.controls.releaseType.value === 'H') {
       return deqOffice = 'NWR';
    }
    switch (this.incidentForm.controls.siteCounty.value) {
      case'1':  case'7':   case'9':    case'11':   case'12':  case'13':
      case'14': case'16':  case'18':   case'19':   case'23':  case'25':
      case'28': case'30':  case'31':   case'32':   case'33':  case'35':
      deqOffice = 'DAL';
      break;
    case'20':
      deqOffice = 'EUG';
      break;
    case'6':  case'8':  case'10':   case'15':  case'17':
      deqOffice = 'MDF';
      break;
    case'2':  case'21':  case'22':  case'24':  case'27':   case'36':
      deqOffice = 'SLM';
      break;
    default:
      deqOffice = 'NWR';
      break;
    }
    return deqOffice;
  }

  private findInvalidControls() {
    const invalid = [];
    const controls = this.incidentForm.controls;
    console.error(controls);
    for (const name in controls) {
        if (controls[name].invalid) {
            // console.error('********** offending element ===>' + name);
            // const tempArray = Object.keys(controls[name].errors);
            // console.error(tempArray);
            // const xxxx = Object.keys(controls[name].errors)
            //    .map(field => this.getMessage(field, controls[name].errors[field]));
            // const tempField: string;
            // const tempParams: any;
            // console.error('********** offending element ===>' + name);
            invalid.push(name + ' is required and must be valid.');
        }
    }
    return invalid;
  }

  private findInvalidControlsOrig() {
    const invalid = [];
    const controls = this.incidentForm.controls;
    console.error(controls);
    for (const name in controls) {
        if (controls[name].invalid) {
            console.error('********** offending element ===>' + name);
            console.error(name);
            invalid.push(name + ' is required and must be valid.');
        }
    }

    return invalid;
    }


  }
}
