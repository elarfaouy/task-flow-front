import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TagInterface} from "../../../model/tag.interface";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectTagsList} from "../../tag/tag.selectors";
import {TagActions} from "../../tag/tag.actions";

@Component({
  selector: 'app-tag-table',
  templateUrl: './tag-table.component.html',
  styleUrl: './tag-table.component.css'
})
export class TagTableComponent implements OnInit {
  tags$: Observable<TagInterface[]> = this.store.pipe(select(selectTagsList));
  displayedColumns: string[] = ["id", "name"];
  dataSource = new MatTableDataSource<TagInterface>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(TagActions.loadTags())

    this.tags$.subscribe(value => {
      this.dataSource = new MatTableDataSource<TagInterface>(value);
      this.dataSource.paginator = this.paginator;
    })
  }
}
