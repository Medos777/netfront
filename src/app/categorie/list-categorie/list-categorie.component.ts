import {Component, Inject, OnInit} from '@angular/core';
import {AddCategorieComponent} from "../add-categorie/add-categorie.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {CategorieService} from "../../Service/categorie.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CategorieFilterPipePipe} from "../../categorie-filter-pipe.pipe";
import {Categorie} from "../../Model/categorie";

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css'],
  providers: [CategorieFilterPipePipe]
})
export class ListCategorieComponent implements OnInit{
  p: number = 1;
  searchText: string = '';
  constructor(public crudApi: CategorieService, public pipecateg: CategorieFilterPipePipe,public toastr: ToastrService,
              private router : Router,public fb: FormBuilder,
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<AddCategorieComponent>) { }
  ngOnInit() {
    //this.faCoffee = faCoffee;

    this.getData();



  }
  getData(){
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.list = response;}
    );
  }
  addLoisir()
  {
    this.crudApi.choixmenu = "A";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="70%";
    dialogConfig.height="50%";
    this.matDialog.open(AddCategorieComponent, dialogConfig);
  }
  deleteCategory(id: number) {
    this.crudApi.deleteCategory(id).subscribe(
      () => {
        // Category deleted successfully
        this.getData(); // Refresh the list after deletion
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectData(item : Categorie) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";

    this.matDialog.open(AddCategorieComponent, dialogConfig);
  }
}
