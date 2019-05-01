import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { vote } from '../../org.example.evoting';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class voteService {

  private NAMESPACE = 'vote';

  constructor(private dataService: DataService<vote>) {
  };

  public getAll(): Observable<vote[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getTransaction(id: any): Observable<vote> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<vote> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<vote> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<vote> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}