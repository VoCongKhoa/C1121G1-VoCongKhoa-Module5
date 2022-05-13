import { Component, OnInit } from '@angular/core';
import {Word} from "../word";
import {WordService} from "../services/word-service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: Word[];
  wordRoot: Word = {
    id: 0,
    word: '',
    mean: '',
    detail: ''
  };

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.words = this.wordService.getWords();
  }

  detail(a: Word) {
    this.wordRoot = a;
  }
}
