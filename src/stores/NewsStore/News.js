import {
  observable, action, autorun, computed,
} from 'mobx';
import Comment from './Comment';

export default class News {
  id = '';

  by = '';

  title = '';

  time = new Date().getTime();

  score = 0;

  @observable
  kids = [];

  @observable
  commentsVisible = false;

  @observable
  comments = [];

  constructor(source) {
    Object.assign(this, source);
  }

  @computed get commentsLength() {
    return this.kids.length;
  }

  @action setCommentsVisible = () => {
    this.commentsVisible = true;
  }

  generateComments = autorun(
    () => {
      if (this.commentsVisible) {
        this.comments = this.kids.map(kid => new Comment(kid));
      }
    },
  );
}
