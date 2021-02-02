import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'demo';
  
  column:any=["Id","Name","Age","Gender"];
  data:any=[]
constructor(){

}
ngOnInit() {
}
onFileChange(event:any) {
  /** file uploading**/ 
  let selectedFile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsText(selectedFile);
  fileReader.onload = () => {
    const cJson = fileReader.result;
   let data:any = cJson !== null ? (cJson) : [];
   /** file reading**/
    let obj=JSON.parse(data);
    this.dataBinding(obj);
  }
  fileReader.onerror = (error) => {
    console.log(error);
    /** Error Checking**/
  }
 
}
dataBinding(data:any){
  /** data binding Grid */
  console.log(data)
  let first=data[0];
  let col=Object.keys(first);
 
  this.column=col;
  this.data=data;




}


}