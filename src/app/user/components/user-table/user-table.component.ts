import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserInterface} from "../../../model/user.interface";
import {selectUsersList} from "../../user/user.selectors";
import {UserActions} from "../../user/user.actions";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {
  users$: Observable<UserInterface[]> = this.store.pipe(select(selectUsersList));
  displayedColumns: string[] = ["id", "name", "surname", "username", "jetons"];
  dataSource = new MatTableDataSource<UserInterface>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers())

    this.users$.subscribe(value => {
      this.dataSource = new MatTableDataSource<UserInterface>(value);
      this.dataSource.paginator = this.paginator;
    })
  }
}
