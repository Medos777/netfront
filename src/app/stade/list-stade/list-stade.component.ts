import {Component, Inject, OnInit} from '@angular/core';
import {LoisirService} from "../../Service/loisir.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {AddLoisirComponent} from "../../Loisir/add-loisir/add-loisir.component";
import {Loisir} from "../../Model/loisir";
import {AddStadeComponent} from "../add-stade/add-stade.component";
import {StadeService} from "../../Service/stade.service";

@Component({
  selector: 'app-list-stade',
  templateUrl: './list-stade.component.html',
  styleUrls: ['./list-stade.component.css']
})
export class ListStadeComponent implements OnInit{
  p: number = 1;
  searchText: string = '';
  constructor(public crudApi: StadeService,public toastr: ToastrService,
              private router : Router,public fb: FormBuilder,
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<AddLoisirComponent>) { }
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
    this.matDialog.open(AddStadeComponent, dialogConfig);
  }


  selectData(item : Loisir) {
    this.crudApi.choixmenu = "M";
    // this.AddL.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";

    this.matDialog.open(AddLoisirComponent, dialogConfig);
  }
}

