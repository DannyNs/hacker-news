import { observable, autorun } from 'mobx';
import axios from 'axios';

export default class Comment {
  id;

  @observable
  loading = true;

  @observable
  by = '';

  @observable
  text = '';

  @observable
  time;

  @observable
  kids = [];

  @observable
  comments = [];

  constructor(id) {
    this.id = id;

    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(({ data }) => Object.assign(this, data, { loading: false }));
  }

  generateChildComments = autorun(
    () => {
      this.comments = this.kids.map(kid => new Comment(kid));
    },
  );
}
