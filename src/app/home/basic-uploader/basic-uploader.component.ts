import { Component, OnInit } from '@angular/core';
import { Problem, Image } from 'src/app/Store/model';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-basic-uploader',
  templateUrl: './basic-uploader.component.html',
  styleUrls: ['./basic-uploader.component.scss']
})
export class BasicUploaderComponent implements OnInit {

  model: Problem;


  constructor(private uploader:UploadService) { }

  ngOnInit() {
    this.model = {
      title: '',
      desc: '',
      images: []
    }
  }
  
  pushit() {
    this.uploader.pushit(this.model);
  }

  async images(input: HTMLInputElement) {
    for (let i = 0; i < input.files.length; i++) {
      this.imageToRowData(input.files[i]).then(value => {
        this.model.images.push({ file: input.files[i], data: value })
      });
    }
  }

  imageToRowData(img): Promise<string> {

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = (ev: any) => resolve(reader.result.toString())
      reader.onerror = (ev) => reject(new Error('error in file Reader'))
      reader.readAsDataURL(img);

    });
  }
  
  remove(item:Image){
    let pos = this.model.images.indexOf(item);
    console.log(pos);
    this.model.images.splice(pos,1);
  }

}

