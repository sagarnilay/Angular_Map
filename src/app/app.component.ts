import { AfterViewInit, Component, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  map: any;
  @ViewChild('map') mapElement: any;
  lat = 43.879078;
  lng = -103.4615581;
  markers = [
    { lat: 18.9342195, lng: 72.8256279 },
    { lat: 18.9369012, lng: 72.8253435 },
    { lat: 18.9203886, lng: 72.8301305999999}
  ];
  constructor() { }

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map
      });
    });
  }
}
