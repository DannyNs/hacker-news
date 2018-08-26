import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class News {
  id;

  by;

  title;

  type;

  url;

  score;

  constructor(source) {
    Object.assign(this, source);
  }
}

export class NewsStore {
  @observable
  loading = true;

  @observable
  page = 1;

  @observable
  itemsPerPage = 30;

  @observable
  latestNewsIds = [];

  @observable
  latestNews = [];

  constructor() {
    this.fetchLatestNewsIds()
      .then(this.fetchLatestNews);
  }

  @computed get startSlice() {
    return (this.page - 1) * this.itemsPerPage;
  }

  @computed get endSlice() {
    return this.page * this.itemsPerPage;
  }

  @computed get newsCount() {
    return this.latestNewsIds.length;
  }

  @action goToPrevPage = () => {
    this.page = (this.page > 1) ? this.page - 1 : this.page;
  }

  @action goToNextPage = () => {
    this.page = (this.page < this.newsCount / this.itemsPerPage) ? this.page + 1 : this.page;
  }

  fetchLatestNewsIds = () => {
    this.loading = true;

    return axios
      .get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(({ data }) => {
        this.loading = false;
        this.latestNewsIds = data;
      });
  }

  fetchLatestNews = () => {
    this.loading = true;

    return Promise
      .all(this.latestNewsIds.slice(this.startSlice, this.endSlice)
        .map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)))
      .then((all) => {
        this.loading = false;
        this.latestNews = all.map(item => new News(item.data));
      });
  }
}

const newsStore = new NewsStore();
export default newsStore;
