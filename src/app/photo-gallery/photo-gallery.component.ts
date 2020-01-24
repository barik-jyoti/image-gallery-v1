import { Component, OnInit } from '@angular/core';
import { FlickerResponse } from '../models/flickerresponse';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  flickerResponse: FlickerResponse;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.flickrService.getPhotos().subscribe( response => {
      this.flickerResponse = response;
    }, error => {
      console.log(error);
    });
  }

}
