import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 35.701702;
  lng: number = 139.751395;
  zoom: number = 18;

  markers = [
    {id: 1, lat: 35.701702, lng: 139.751395},
    {id: 2, lat: 35.701902, lng: 139.751395},
    {id: 3, lat: 35.701202, lng: 139.751395},
  ];

  /** マーカの保存 */
  saveMarker(index)
  {
    confirm('ほんとに消す？');
    this.markers.splice(index, 1);
  }

  /** マーカの削除 */
  deleteMarker(index)
  {
    confirm('ほんとに消す？');
    this.markers.splice(index, 1);
  }

  /** mapをクリックした時 */
  mapClicked($event) {
    this.markers.push({
      id: 4,
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }
}
