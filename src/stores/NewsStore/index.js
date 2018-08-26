import {
  observable, action, computed, reaction,
} from 'mobx';
import axios, { CancelToken } from 'axios';
import News from './News';

export class NewsStore {
  cancelTokenSource;

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
    this.fetchLatestNewsIds();
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

  @action fetchLatestNewsIds = () => {
    this.loading = true;

    return axios
      .get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(({ data }) => {
        this.loading = false;
        this.latestNewsIds = data;
      });
  }

  fetchLatestNews = reaction(
    () => {
      if (this.cancelTokenSource) {
        this.cancelTokenSource.cancel('Next request in queue');
      }

      this.cancelTokenSource = CancelToken.source();

      return this.latestNewsIds.slice(this.startSlice, this.endSlice)
        .map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
          cancelToken: this.cancelTokenSource.token,
        }));
    },
    (allRequests) => {
      this.loading = true;

      Promise
        .all(allRequests)
        .then((all) => {
          this.loading = false;
          this.cancelTokenSource = undefined;
          this.latestNews = all.map(item => new News(item.data));
        })
        .catch(() => { });
    },
    {
      delay: 200,
      name: 'fetchLatestNews',
    },
  )
}

const newsStore = new NewsStore();
export default newsStore;
