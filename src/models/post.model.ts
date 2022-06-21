export default class PostModel {
  constructor(private data: Array<any>) {
  }

  getAll(): Array<any> {
    return this.data;
  }
}
