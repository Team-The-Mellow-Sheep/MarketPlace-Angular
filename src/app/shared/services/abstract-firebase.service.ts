import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export abstract class AbstractFirebaseService<T extends IEntity> {
  protected abstract get entityPath(): string;
  protected list: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.list = db.list(this.entityPath);
  }
  get(entityId: string) {
    return this.db.object(`${this.entityPath}/${entityId}`);
  }

  getList(options?: Object) {
    return this.db.list(`${this.entityPath}`, options);
  }
  create(entity: T) {
    return this.list.push(entity);
  }
  delete(entity: T) {
    return this.list.remove(entity.$key);
  }
}
interface IEntity {
  $key?: string;
}