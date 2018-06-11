import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-master-detail-table',
  templateUrl: './master-detail-table.component.html',
  styleUrls: ['./master-detail-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MasterDetailTableComponent {
  displayedColumns = ['id', 'element', 'weight'];
  dataSource = new ExampleDataSource();

  isExpansionDetailRow = (_, row: any) => row.hasOwnProperty('detailRow');
}

export interface Element {
  element: string;
  id: number;
  weight: number;
  symbol: string;
}

const data: Element[] = [
  {id: 1, element: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, element: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, element: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, element: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, element: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, element: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, element: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, element: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, element: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, element: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {id: 11, element: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {id: 12, element: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {id: 13, element: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {id: 14, element: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {id: 15, element: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {id: 16, element: 'Sulfur', weight: 32.065, symbol: 'S'},
  {id: 17, element: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {id: 18, element: 'Argon', weight: 39.948, symbol: 'Ar'},
  {id: 19, element: 'Potassium', weight: 39.0983, symbol: 'K'},
  {id: 20, element: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    data.forEach(element => rows.push(element, {detailRow: true, element}));
    return of(rows);
  }

  disconnect() {}
}
