import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { DatePipe} from '@angular/common';
import { environment } from '../../../environments/environment';
import { Observable} from 'rxjs';

import { OlprrReviewSearchFilter } from '../olprr-review-search-filter';
import { OlprrReviewSearchResult } from '../olprr-review-search-result';
import { OlprrReviewSearchDataService } from '../olprr-review-search-data.service';


@Component({
  selector: 'app-olprr-review-search-filter',
  templateUrl: './olprr-review-search-filter.component.html',
  styleUrls: ['./olprr-review-search-filter.component.css'],
  providers: [ OlprrReviewSearchDataService ]
})
export class OlprrReviewSearchFilterComponent implements OnInit {

  olprrReviewSearchFilterForm: FormGroup;
  olprrReviewSearchFilter: OlprrReviewSearchFilter;
  olprrReviewSearchResults: OlprrReviewSearchResult[];
  showOlprrReviewSearchResultsFlag = false;

  constructor(private olprrReviewSearchDataService: OlprrReviewSearchDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createOlprrReviewSearchFilterForm();
  }

  private submitOlprrReviewSearchFilterForm() {
      const p = Object.assign({}, this.olprrReviewSearchFilter, this.olprrReviewSearchFilterForm.value);
      console.log(JSON.stringify(p));
      this.getOlprrReviewSearchResults(p);
  }

  private getOlprrReviewSearchResults(olprrReviewSearchFilter: OlprrReviewSearchFilter) {
    console.log('****SearchResultsComponent  getLustSearchResults()  ******');
    console.log(this.olprrReviewSearchFilter);
    this.olprrReviewSearchDataService.getOlprrReviewIncidents(olprrReviewSearchFilter).subscribe(
      data => { this.olprrReviewSearchResults = data;
                this.showOlprrReviewSearchResultsFlag = true; }
    );
  }

  private createOlprrReviewSearchFilterForm() {
    this.olprrReviewSearchFilterForm = this.formBuilder.group({
      office:  [''],
      status:  ['NEW']
    });
  }

  private resetOlprrReviewSearchSearchFilterForm() {
    this.olprrReviewSearchFilterForm.reset();
  }

}
