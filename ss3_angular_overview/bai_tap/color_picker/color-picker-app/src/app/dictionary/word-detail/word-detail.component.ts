import {Component, Input, OnInit} from '@angular/core';
import {Word} from "../../word";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  @Input('wordDetail') wordDetail: Word = {
    id: 0,
    word: '',
    mean: '',
    detail: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
