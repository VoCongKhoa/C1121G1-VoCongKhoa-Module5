import {Word} from "../word";

export class WordService {

  private wordList: Word[] = [
    {
      id: 1,
      word: 'assume',
      mean: 'giả thiết rằng',
      detail: '1. verb /əˈsjuːm/\n' +
        '2. Ví dụ: I assume (that) you’d like time to decide.'
    },
    {
      id: 2,
      word: 'courage',
      mean: 'dũng cảm',
      detail: '1. noun /ˈkaridʒ, (American) ˈkəː-/\n' +
        '2. Ví dụ: They never lose physical and moral courage, never lose morale.'
    },
    {
      id: 3,
      word: 'attend',
      mean: 'tham gia',
      detail: '1. verb /əˈtend/\n' +
    '2. Ví dụ: She attended the meeting'
    },
    {
      id: 4,
      word: 'experience',
      mean: 'kinh nghiệm',
      detail: '1. noun /ikˈspiəriəns/\n' +
        '2. Ví dụ: Learn by experience – don’t make the same mistake again'
    },
    {
      id: 5,
      word: 'major',
      mean: 'chủ yếu; lớn',
      detail: '1. adjective /ˈmeidʒə/\n' +
        '2. Ví dụ: a major road'
    },
    {
      id: 6,
      word: 'poor',
      mean: 'nghèo',
      detail: '1. adjective /puə/\n' +
        '2. Ví dụ: She is too poor to buy clothes for the children'
    },
    {
      id: 7,
      word: 'potential',
      mean: 'tiềm năng',
      detail: '1. adjective /pəˈtenʃəl/\n' +
        '2. Ví dụ: That hole in the road is a potential danger.'
    },
    {
      id: 8,
      word: 'unlikely',
      mean: 'không chắc xảy ra, không chắc đúng',
      detail: '1. adjective /anˈlaikli/\n' +
        '2. Ví dụ: an unlikely explanation for his absence'
    },
  ]

  public getWords(){
    return this.wordList;
  }
}
