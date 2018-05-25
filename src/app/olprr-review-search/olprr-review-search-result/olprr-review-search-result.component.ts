import { Component, OnInit, Input} from '@angular/core';
import { OlprrReviewSearchResult } from '../olprr-review-search-result';

@Component({
  selector: 'app-olprr-review-search-result',
  templateUrl: './olprr-review-search-result.component.html',
  styleUrls: ['./olprr-review-search-result.component.css']
})
export class OlprrReviewSearchResultComponent implements OnInit {
  @Input() olprrReviewSearchResults: OlprrReviewSearchResult[];
  constructor() { }
  ngOnInit() {
  }

}
