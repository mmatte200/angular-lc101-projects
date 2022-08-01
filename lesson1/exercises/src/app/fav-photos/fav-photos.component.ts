import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Rad Pics';
  image1 = 'https://m.media-amazon.com/images/M/MV5BMTcxNDM3OTMzOV5BMl5BanBnXkFtZTcwODYxMDIyNw@@._V1_.jpg';
  image2 = 'https://images-ext-1.discordapp.net/external/nurB_3MiF9T_s3pU2udmHjmzo2qqoEyZAdMuRFeqpTM/%3Fv%3D1573618694/https/cdn.shopify.com/s/files/1/0057/3728/3618/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_480x.progressive.jpg?width=444&height=686';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpttnc6TWURzqd4SIo5YSPjWV4QgcVoHfdg&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}