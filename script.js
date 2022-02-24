(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 94.78,
  "pitch": -0.73,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F9E2509_2D16_F27E_41B7_71A03DD9C922",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B",
 "thumbnailUrl": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_t.jpg",
 "label": "Foto 8",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_08CE52DB_1DC7_FA85_41B5_75E8D0A62F09",
  "this.overlay_08F4F4C3_1DC7_9E84_41B9_A60C7122B59F",
  "this.overlay_08BFA778_1DC7_7B83_4150_A33F7130CCC0"
 ],
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16875244_1DBA_9583_418B_CF20D7DD1586",
 "thumbnailUrl": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_t.jpg",
 "label": "Foto 4",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0C67EF9A_1DC9_AA87_4177_AE6046EC0847"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 85.22,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D32B5F3_2D16_FD92_41C5_67CC65EC03BD",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
 "thumbnailUrl": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_t.jpg",
 "label": "Foto 7",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0E5872CA_1DCB_9A84_41B9_225BDF279A2E",
  "this.overlay_0E10D8C9_1DCB_F685_41BD_7696CA5DBC77",
  "this.overlay_0E386AC6_1DCB_AA8F_41BB_64E7FEBA492B",
  "this.overlay_06CF4CE5_1DC9_6E8D_41A5_408E63ECEEF0"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": -15.43,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D191586_2D16_F272_41B4_70A32ABDDFAB",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2",
 "thumbnailUrl": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_t.jpg",
 "label": "Foto 14",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_048694E2_1DD9_9E84_41B4_539836594964",
  "this.overlay_0440B90B_1DD9_B784_4172_9B9E9498ABE9"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D0695C4_2D16_FDF6_41C6_1B637ACEE76A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16875244_1DBA_9583_418B_CF20D7DD1586_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF",
 "thumbnailUrl": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_t.jpg",
 "label": "Foto 2",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_12597DAE_1DC6_EE9C_418C_F7FFACC474D3",
  "this.overlay_121F1556_1DC6_BF8F_4192_25998B7A15B9"
 ],
 "class": "Panorama"
},
{
 "items": [
  {
   "media": "this.panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16875244_1DBA_9583_418B_CF20D7DD1586",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_16875244_1DBA_9583_418B_CF20D7DD1586_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "camera": "this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 96.24,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D520632_2D16_FE92_41B4_57711261DC1C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": -5.14,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D588622_2D16_FEB2_41BE_3B03B37B263D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": 2.2,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F34648C_2D16_F276_4178_41F489BF88BE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 91.1,
  "pitch": 3.67,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_22EAA557_2D16_F292_41C0_53C9122FC8AD",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -106.53,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D1705A5_2D16_FDB6_41C0_E7963EF68F1F",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": -2.2,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_22E04576_2D16_F292_41B9_B749C26AB004",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16875244_1DBA_9583_418B_CF20D7DD1586",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC",
 "thumbnailUrl": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_t.jpg",
 "label": "Foto 3",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D937E99_1DCA_EA85_41B8_3FA0D168654C",
  "this.overlay_0D5A0796_1DCA_BA8F_4123_E5BE037AD298",
  "this.overlay_0D156425_1DCB_9D8D_41B9_90F33A0C4FFA"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": 6.61,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F6E74EA_2D16_F3B2_4181_D635537AFAE8",
 "class": "PanoramaCamera"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B",
 "thumbnailUrl": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_t.jpg",
 "label": "Foto 01",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13FB5DB5_1DBB_6E8C_4173_FD018C552F6A"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 99.92,
  "pitch": -8.08,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F2A349C_2D16_F395_41C1_51DFE1A5496C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": 1.47,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D721670_2D16_FEAE_41A6_E6640EA71970",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1",
 "thumbnailUrl": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_t.jpg",
 "label": "Foto 6",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EE9452A_1DC9_9F87_41B7_EEC75A9C3B95",
  "this.overlay_0EA1A7B1_1DC9_BA85_41A7_B6DEDA32D0D7"
 ],
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8",
 "thumbnailUrl": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_t.jpg",
 "label": "Foto 9",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0BD3F99A_1DDB_7687_4191_E9C717FD9072",
  "this.overlay_0BA9E21D_1DDB_F5BD_419C_0D3CBD236A7A"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": -8.08,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D3B25E4_2D16_FDB6_41C0_2FEB63A5B150",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2",
 "thumbnailUrl": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_t.jpg",
 "label": "Foto 13",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_05F56AA6_1DDB_6A8C_41AB_3E190CDFDE3D",
  "this.overlay_05A2FB67_1DDB_6B8C_41BA_4BBC605A0C43",
  "this.overlay_0542B620_1DDB_BD83_419F_0A3F3098E1F5"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": -7.35,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D471651_2D16_FEEE_41A2_6E8958EBE88F",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16875244_1DBA_9583_418B_CF20D7DD1586",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_16875244_1DBA_9583_418B_CF20D7DD1586_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "camera": "this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "camera": "this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "camera": "this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "camera": "this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "camera": "this.panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "camera": "this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "camera": "this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "camera": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 0)",
   "camera": "this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_1687149B_1DB9_FE85_4181_C6AA6314D611",
 "thumbnailUrl": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_t.jpg",
 "label": "Foto 11",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B1A458D_1DDE_9E9C_419C_64503BCC47B4",
  "this.overlay_0AD5F9F7_1DDF_768D_418B_EDF11ECA5B2D"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5",
 "thumbnailUrl": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_t.jpg",
 "label": "Foto 12",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A4EE3E7_1DD9_9A8D_419A_28D8EDCD563B",
  "this.overlay_054C560F_1DD9_9D9D_4199_FC3FA5020D23"
 ],
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F",
 "thumbnailUrl": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_t.jpg",
 "label": "Foto 1",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13E06247_1DB9_B58D_41BC_F296E9D43F61",
  "this.overlay_1311C143_1DB9_F785_41A8_A2909D203B16",
  "this.overlay_1376FAD8_1DC6_EA83_4174_0F447B951F62"
 ],
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64",
 "thumbnailUrl": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_t.jpg",
 "label": "Foto 10",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B4F8D39_1DD9_AF85_41BA_6444204F1392"
 ],
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -98.45,
  "pitch": -16.16,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F03846D_2D16_F2B6_41B7_6556845EA045",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -69.8,
  "pitch": -8.08,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F7854DA_2D16_F392_41C1_CF1E8E10CEE0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -72.73,
  "pitch": -18.37,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D0F45B5_2D16_FD96_4184_2D401D07E282",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -93.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F5844AB_2D16_F3B2_41B7_DEAC45B1425F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F0E945D_2D16_F296_41BE_0D0BAC8E9813",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 106.53,
  "pitch": -9.55,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D7EA661_2D16_FEAE_41A2_AD8B7A718825",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -90.37,
  "pitch": 2.2,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3D279603_2D16_FE72_41A1_A88B18B63556",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "pitch": -2.2,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_3F4834CB_2D16_F3F3_41C2_5C291A2BC823",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA",
 "thumbnailUrl": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_t.jpg",
 "label": "Foto 5",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0C1979BA_1DCE_F684_4188_0C021E44CA7C",
  "this.overlay_0FD780D1_1DCE_B684_41B7_DFBD168DFF2A",
  "this.overlay_0FF8A119_1DCF_7784_41AB_92D65A6AB17B"
 ],
 "class": "Panorama"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 50,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_03C8CF70_1DC6_AB84_418A_F49E5158C6CF",
 "width": "23.077%",
 "horizontalAlign": "center",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_03C8CF70_1DC6_AB84_418A_F49E5158C6CF.png",
 "minWidth": 1,
 "paddingRight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "height": "25.923%",
 "top": "1.26%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 500,
 "maxHeight": 500,
 "propagateClick": false,
 "data": {
  "name": "Image25699"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.71,
   "yaw": 1.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.71,
   "pitch": -37.32,
   "yaw": 1.45,
   "image": "this.AnimatedImageResource_06916AA3_1DCE_EA85_41A5_CCF4F6B3D433",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08CE52DB_1DC7_FA85_41B5_75E8D0A62F09",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2, this.camera_3F7854DA_2D16_F392_41C1_CF1E8E10CEE0); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.07,
   "yaw": -90.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.07,
   "pitch": -35.95,
   "yaw": -90.87,
   "image": "this.AnimatedImageResource_06918AA3_1DCE_EA85_41BB_906E495F9CC8",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08F4F4C3_1DC7_9E84_41B9_A60C7122B59F",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94, this.camera_3F4834CB_2D16_F3F3_41C2_5C291A2BC823); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.44,
   "yaw": -179.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.44,
   "pitch": -38.35,
   "yaw": -179.74,
   "image": "this.AnimatedImageResource_06922AA3_1DCE_EA85_419B_AC280088E606",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08BFA778_1DC7_7B83_4150_A33F7130CCC0",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC, this.camera_3D471651_2D16_FEEE_41A2_6E8958EBE88F); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.62,
   "yaw": -179.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.62,
   "pitch": -37.66,
   "yaw": -179.79,
   "image": "this.AnimatedImageResource_0697CAA3_1DCE_EA85_41A2_A4D17B85C24F",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0C67EF9A_1DC9_AA87_4177_AE6046EC0847",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.71,
   "yaw": -3.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.71,
   "pitch": -37.32,
   "yaw": -3.7,
   "image": "this.AnimatedImageResource_06904AA3_1DCE_EA85_41A1_095621F97A6C",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E5872CA_1DCB_9A84_41B9_225BDF279A2E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC, this.camera_3D32B5F3_2D16_FD92_41C5_67CC65EC03BD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.16,
   "yaw": 84.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.16,
   "pitch": -39.38,
   "yaw": 84.15,
   "image": "this.AnimatedImageResource_06908AA3_1DCE_EA85_419F_5002ECF3F30A",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E10D8C9_1DCB_F685_41BD_7696CA5DBC77",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2, this.camera_3D279603_2D16_FE72_41A1_A88B18B63556); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.98,
   "yaw": -91.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.98,
   "pitch": -36.29,
   "yaw": -91.9,
   "image": "this.AnimatedImageResource_06912AA3_1DCE_EA85_41A6_BF52F3CCC748",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E386AC6_1DCB_AA8F_41BB_64E7FEBA492B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1, this.camera_3D588622_2D16_FEB2_41BE_3B03B37B263D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.8,
   "yaw": -179.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.8,
   "pitch": -36.98,
   "yaw": -179.77,
   "image": "this.AnimatedImageResource_0168402C_1DFA_F583_4189_81AE08A3B78E",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_06CF4CE5_1DC9_6E8D_41A5_408E63ECEEF0",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B, this.camera_3D7EA661_2D16_FEAE_41A2_AD8B7A718825); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 21.8,
   "yaw": 84.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.8,
   "pitch": -28.4,
   "yaw": 84.15,
   "image": "this.AnimatedImageResource_069E2AB2_1DCE_EA87_41B3_5DCDCCDE4D70",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_048694E2_1DD9_9E84_41B4_539836594964",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2, this.camera_3D721670_2D16_FEAE_41A6_E6640EA71970); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.98,
   "yaw": -179.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.98,
   "pitch": -32.17,
   "yaw": -179.75,
   "image": "this.AnimatedImageResource_069E4AB2_1DCE_EA87_41BC_7A4C8327AF3C",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0440B90B_1DD9_B784_4172_9B9E9498ABE9",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.41,
   "yaw": 0.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.41,
   "pitch": -34.58,
   "yaw": 0.42,
   "image": "this.AnimatedImageResource_06965AA3_1DCE_EA85_41B0_5E37148FDA50",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12597DAE_1DC6_EE9C_418C_F7FFACC474D3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F, this.camera_3D3B25E4_2D16_FDB6_41C0_2FEB63A5B150); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.58,
   "yaw": -178.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.58,
   "pitch": -33.89,
   "yaw": -178.04,
   "image": "this.AnimatedImageResource_06968AA3_1DCE_EA85_418E_981F05E3FBD7",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_121F1556_1DC6_BF8F_4192_25998B7A15B9",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.89,
   "yaw": 1.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.89,
   "pitch": -36.63,
   "yaw": 1.79,
   "image": "this.AnimatedImageResource_06972AA3_1DCE_EA85_41BC_F2F7D692C5AB",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D937E99_1DCA_EA85_41B8_3FA0D168654C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94, this.camera_3D0F45B5_2D16_FD96_4184_2D401D07E282); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 18.97,
   "yaw": -84.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.97,
   "pitch": -40.07,
   "yaw": -84.35,
   "image": "this.AnimatedImageResource_06975AA3_1DCE_EA85_41B2_54939259EE75",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D5A0796_1DCA_BA8F_4123_E5BE037AD298",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF, this.camera_3D0695C4_2D16_FDF6_41C6_1B637ACEE76A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.71,
   "yaw": -179.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.71,
   "pitch": -37.32,
   "yaw": -179.79,
   "image": "this.AnimatedImageResource_06978AA3_1DCE_EA85_41B4_50336FC6F7D8",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D156425_1DCB_9D8D_41B9_90F33A0C4FFA",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 22.21,
   "yaw": -3.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.21,
   "pitch": -26.34,
   "yaw": -3.7,
   "image": "this.AnimatedImageResource_06953A93_1DCE_EA85_41B5_DB227AA6C865",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13FB5DB5_1DBB_6E8C_4173_FD018C552F6A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.07,
   "yaw": 0.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.07,
   "pitch": -35.95,
   "yaw": 0.42,
   "image": "this.AnimatedImageResource_06916AA3_1DCE_EA85_41AC_4E1F4C1231F2",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0EE9452A_1DC9_9F87_41B7_EEC75A9C3B95",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA, this.camera_3D191586_2D16_F272_41B4_70A32ABDDFAB); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.62,
   "yaw": -179.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.62,
   "pitch": -37.66,
   "yaw": -179.77,
   "image": "this.AnimatedImageResource_0691AAA3_1DCE_EA85_4181_C8A2AAB5F491",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0EA1A7B1_1DC9_BA85_41A7_B6DEDA32D0D7",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64, this.camera_3F9E2509_2D16_F27E_41B7_71A03DD9C922); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.07,
   "yaw": 97.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.07,
   "pitch": -35.95,
   "yaw": 97.88,
   "image": "this.AnimatedImageResource_06924AA3_1DCE_EA85_41B2_B448C8FD8510",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0BD3F99A_1DDB_7687_4191_E9C717FD9072",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B, this.camera_3F6E74EA_2D16_F3B2_4181_D635537AFAE8); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.82,
   "yaw": -179.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.82,
   "pitch": -32.86,
   "yaw": -179.75,
   "image": "this.AnimatedImageResource_06928AA3_1DCE_EA85_41A9_34C659259AC1",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0BA9E21D_1DDB_F5BD_419C_0D3CBD236A7A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.71,
   "yaw": 0.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.71,
   "pitch": -37.32,
   "yaw": 0.07,
   "image": "this.AnimatedImageResource_069CCAB2_1DCE_EA87_41BB_A2C699D4B824",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_05F56AA6_1DDB_6A8C_41AB_3E190CDFDE3D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94, this.camera_22EAA557_2D16_F292_41C0_53C9122FC8AD); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.58,
   "yaw": 85.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.58,
   "pitch": -33.89,
   "yaw": 85.87,
   "image": "this.AnimatedImageResource_069D5AB2_1DCE_EA87_41B9_BC4B8B8737ED",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_05A2FB67_1DDB_6B8C_41BA_4BBC605A0C43",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5, this.camera_22E04576_2D16_F292_41B9_B749C26AB004); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.15,
   "yaw": -179.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.15,
   "pitch": -35.61,
   "yaw": -179.09,
   "image": "this.AnimatedImageResource_069DFAB2_1DCE_EA87_41BD_484415A0B534",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0542B620_1DDB_BD83_419F_0A3F3098E1F5",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 1.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.35,
   "pitch": -38.69,
   "yaw": 1.79,
   "image": "this.AnimatedImageResource_06934AA3_1DCE_EA85_41B0_D1542A236E48",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B1A458D_1DDE_9E9C_419C_64503BCC47B4",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA, this.camera_3D520632_2D16_FE92_41B4_57711261DC1C); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.24,
   "yaw": 100.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.24,
   "pitch": -35.26,
   "yaw": 100.63,
   "image": "this.AnimatedImageResource_0693EAA3_1DCE_EA85_41B4_176E5A15163A",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AD5F9F7_1DDF_768D_418B_EDF11ECA5B2D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.98,
   "yaw": 2.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.98,
   "pitch": -36.29,
   "yaw": 2.82,
   "image": "this.AnimatedImageResource_069C7AA3_1DCE_EA85_41BA_73D5BF3F7491",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A4EE3E7_1DD9_9A8D_419A_28D8EDCD563B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611, this.camera_3F34648C_2D16_F276_4178_41F489BF88BE); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.41,
   "yaw": -179.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.41,
   "pitch": -34.58,
   "yaw": -179.77,
   "image": "this.AnimatedImageResource_069CAAB2_1DCE_EA87_419C_D0E3F8F4AEF7",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_054C560F_1DD9_9D9D_4199_FC3FA5020D23",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.15,
   "yaw": 0.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.15,
   "pitch": -35.61,
   "yaw": 0.76,
   "image": "this.AnimatedImageResource_06954A93_1DCE_EA85_41AE_4865FD4A446D",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13E06247_1DB9_B58D_41BC_F296E9D43F61",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B, this.camera_3F0E945D_2D16_F296_41BE_0D0BAC8E9813); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 19.98,
   "yaw": -179.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.98,
   "pitch": -36.29,
   "yaw": -179.39,
   "image": "this.AnimatedImageResource_0695FAA3_1DCE_EA85_41B5_3401D446E2F4",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1311C143_1DB9_F785_41A8_A2909D203B16",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA, this.camera_3F03846D_2D16_F2B6_41B7_6556845EA045); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.24,
   "yaw": -89.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.24,
   "pitch": -35.26,
   "yaw": -89.84,
   "image": "this.AnimatedImageResource_06962AA3_1DCE_EA85_41A6_921CB11F6CF0",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1376FAD8_1DC6_EA83_4174_0F447B951F62",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8, this.camera_3D1705A5_2D16_FDB6_41C0_E7963EF68F1F); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 20.49,
   "yaw": -101.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.49,
   "pitch": -34.23,
   "yaw": -101.85,
   "image": "this.AnimatedImageResource_06932AA3_1DCE_EA85_41B5_C12F48F98052",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B4F8D39_1DD9_AF85_41BA_6444204F1392",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 18.38,
   "yaw": 1.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.38,
   "pitch": -42.13,
   "yaw": 1.45,
   "image": "this.AnimatedImageResource_06907AA3_1DCE_EA85_4196_B78E2C7F90C6",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0C1979BA_1DCE_F684_4188_0C021E44CA7C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F, this.camera_3F2A349C_2D16_F395_41C1_51DFE1A5496C); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 18.87,
   "yaw": 97.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.87,
   "pitch": -40.41,
   "yaw": 97.19,
   "image": "this.AnimatedImageResource_06908AA3_1DCE_EA85_41A2_E3C4B6D54349",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0FD780D1_1DCE_B684_41B7_DFBD168DFF2A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1687149B_1DB9_FE85_4181_C6AA6314D611, this.camera_3F5844AB_2D16_F3B2_41B7_DEAC45B1425F); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 18.58,
   "yaw": -90.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.58,
   "pitch": -41.44,
   "yaw": -90.87,
   "image": "this.AnimatedImageResource_0690EAA3_1DCE_EA85_41B3_29B45951A6DA",
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0FF8A119_1DCF_7784_41AB_92D65A6AB17B",
 "class": "HotspotPanoramaOverlay"
},
{
 "layout": "absolute",
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_00F04CC2_1DF9_AE87_41A8_007601CE81E6"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "layout": "absolute",
 "width": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 40,
 "paddingLeft": 40,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "paddingBottom": 40,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06916AA3_1DCE_EA85_41A5_CCF4F6B3D433",
 "levels": [
  {
   "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06918AA3_1DCE_EA85_41BB_906E495F9CC8",
 "levels": [
  {
   "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06922AA3_1DCE_EA85_419B_AC280088E606",
 "levels": [
  {
   "url": "media/panorama_1687F5F5_1DB9_7E8C_41A2_B6D59A266C5B_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0697CAA3_1DCE_EA85_41A2_A4D17B85C24F",
 "levels": [
  {
   "url": "media/panorama_16875244_1DBA_9583_418B_CF20D7DD1586_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06904AA3_1DCE_EA85_41A1_095621F97A6C",
 "levels": [
  {
   "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06908AA3_1DCE_EA85_419F_5002ECF3F30A",
 "levels": [
  {
   "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06912AA3_1DCE_EA85_41A6_BF52F3CCC748",
 "levels": [
  {
   "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0168402C_1DFA_F583_4189_81AE08A3B78E",
 "levels": [
  {
   "url": "media/panorama_1687113E_1DBA_97FC_41AC_F2213EC36B94_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069E2AB2_1DCE_EA87_41B3_5DCDCCDE4D70",
 "levels": [
  {
   "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069E4AB2_1DCE_EA87_41BC_7A4C8327AF3C",
 "levels": [
  {
   "url": "media/panorama_1687439A_1DB9_7A84_41B6_B08D93AAA0A2_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06965AA3_1DCE_EA85_41B0_5E37148FDA50",
 "levels": [
  {
   "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06968AA3_1DCE_EA85_418E_981F05E3FBD7",
 "levels": [
  {
   "url": "media/panorama_168687E1_1DBB_7A84_41B2_532F232EA5EF_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06972AA3_1DCE_EA85_41BC_F2F7D692C5AB",
 "levels": [
  {
   "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06975AA3_1DCE_EA85_41B2_54939259EE75",
 "levels": [
  {
   "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06978AA3_1DCE_EA85_41B4_50336FC6F7D8",
 "levels": [
  {
   "url": "media/panorama_16876D85_1DBA_AE8D_41B3_833D1618ABFC_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06953A93_1DCE_EA85_41B5_DB227AA6C865",
 "levels": [
  {
   "url": "media/panorama_11BF51D8_1DBB_9684_41AA_68BC9042361B_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06916AA3_1DCE_EA85_41AC_4E1F4C1231F2",
 "levels": [
  {
   "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0691AAA3_1DCE_EA85_4181_C8A2AAB5F491",
 "levels": [
  {
   "url": "media/panorama_16873C25_1DBA_AD8D_41A2_44D2F4096AE1_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06924AA3_1DCE_EA85_41B2_B448C8FD8510",
 "levels": [
  {
   "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06928AA3_1DCE_EA85_41A9_34C659259AC1",
 "levels": [
  {
   "url": "media/panorama_16871ABF_1DB9_AAFD_41A2_B6AE58C48DD8_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069CCAB2_1DCE_EA87_41BB_A2C699D4B824",
 "levels": [
  {
   "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069D5AB2_1DCE_EA87_41B9_BC4B8B8737ED",
 "levels": [
  {
   "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069DFAB2_1DCE_EA87_41BD_484415A0B534",
 "levels": [
  {
   "url": "media/panorama_16871EC4_1DB9_AA83_4188_420E9BEEBEE2_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06934AA3_1DCE_EA85_41B0_D1542A236E48",
 "levels": [
  {
   "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0693EAA3_1DCE_EA85_41B4_176E5A15163A",
 "levels": [
  {
   "url": "media/panorama_1687149B_1DB9_FE85_4181_C6AA6314D611_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069C7AA3_1DCE_EA85_41BA_73D5BF3F7491",
 "levels": [
  {
   "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_069CAAB2_1DCE_EA87_419C_D0E3F8F4AEF7",
 "levels": [
  {
   "url": "media/panorama_168709FD_1DB9_967C_41B7_6545B92A6BD5_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06954A93_1DCE_EA85_41AE_4865FD4A446D",
 "levels": [
  {
   "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0695FAA3_1DCE_EA85_41B5_3401D446E2F4",
 "levels": [
  {
   "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06962AA3_1DCE_EA85_41A6_921CB11F6CF0",
 "levels": [
  {
   "url": "media/panorama_16FBC2BD_1DBB_9AFD_4168_103002A1D15F_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06932AA3_1DCE_EA85_41B5_C12F48F98052",
 "levels": [
  {
   "url": "media/panorama_16870FC4_1DB9_AA83_41B8_E40E4B503A64_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06907AA3_1DCE_EA85_4196_B78E2C7F90C6",
 "levels": [
  {
   "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_06908AA3_1DCE_EA85_41A2_E3C4B6D54349",
 "levels": [
  {
   "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0690EAA3_1DCE_EA85_41B3_29B45951A6DA",
 "levels": [
  {
   "url": "media/panorama_16876770_1DBA_FB83_41B2_F35CF57E1AAA_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "minWidth": 1,
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "maxWidth": 80,
 "maxHeight": 80,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "layout": "vertical",
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.HTMLText_03A093DE_1DCE_9ABF_41B6_F1188E710AEF",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "height": "26.316%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_00F04CC2_1DF9_AE87_41A8_007601CE81E6",
 "left": "7.73%",
 "width": "80.455%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_00F04CC2_1DF9_AE87_41A8_007601CE81E6.png",
 "minWidth": 1,
 "paddingRight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "height": "22.617%",
 "top": "0%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 500,
 "maxHeight": 500,
 "propagateClick": false,
 "data": {
  "name": "Image24048"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "85%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "50%",
 "minWidth": 460,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "paddingLeft": 50,
 "shadow": false,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "25%",
 "minWidth": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMode": "normal",
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "horizontalAlign": "center",
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "92%",
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "paddingLeft": 70,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "minHeight": 1,
 "borderSize": 0,
 "itemMinHeight": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "class": "ThumbnailGrid",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "shadow": false,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemHeight": 160,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "borderSize": 0,
 "scrollEnabled": true,
 "minWidth": 1,
 "paddingRight": 0,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "insetBorder": false,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "25%",
 "minWidth": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "verticalAlign": "top",
 "height": 140,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "55%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "45%",
 "minWidth": 460,
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "paddingLeft": 60,
 "shadow": false,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "25%",
 "minWidth": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "99.545%",
 "data": {
  "name": "Button Tour Info"
 },
 "fontSize": "24px",
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "Button",
 "mode": "push",
 "height": 50,
 "label": "COMPRE AQUI PELO SITE",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.masterpesca.com.br', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Panorama List"
 },
 "fontSize": "24px",
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "Button",
 "mode": "push",
 "height": 50,
 "label": "INSTAGRAM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.instagram.com/master.pesca/', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Location"
 },
 "fontSize": "24px",
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Location",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "Button",
 "mode": "push",
 "height": 50,
 "label": "FACEBOOK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.facebook.com/masterpesca.com.br/', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Floorplan"
 },
 "fontSize": "24px",
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "Button",
 "mode": "push",
 "height": 50,
 "label": "WHATSAPP 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/5547999492056', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontSize": "24px",
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "Button",
 "mode": "push",
 "height": 50,
 "label": "WHATSAPP 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/5547991590367', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "fontSize": "24px",
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "Button",
 "mode": "push",
 "height": 50,
 "label": "WHATSAPP 3",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/554734639991', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "layout": "horizontal",
 "width": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 2,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "HTMLText",
 "height": 78,
 "click": "this.openLink('https://goo.gl/maps/BeGwt4yyHuWnkMBt6', '_blank')",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Master Pesca</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Av. Paulo Schroeder, 1345 </I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Bairro: Boehmerwald</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Joinville - SC</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "id": "HTMLText_03A093DE_1DCE_9ABF_41B6_F1188E710AEF",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "HTMLText",
 "height": 18.8,
 "click": "this.openLink('tel:04734639991', '_blank')",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Telefone: (47) 3463-9991</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "height": 42,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "maxWidth": 80,
 "maxHeight": 80,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "paddingRight": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "right",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 50,
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 300,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 100,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 10,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 30,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "100%",
 "minWidth": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "verticalAlign": "top",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "100%",
 "minWidth": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "verticalAlign": "top",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "minWidth": 50,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "class": "IconButton",
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "right": 10,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "minWidth": 50,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "class": "IconButton",
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "10%",
 "minWidth": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "mode": "push",
 "verticalAlign": "top",
 "height": "10%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minWidth": 1,
 "paddingRight": 0,
 "class": "Image",
 "verticalAlign": "bottom",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "right",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "5%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 100,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 30,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "class": "HTMLText",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.72vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.72vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.72vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 180,
 "fontSize": "2.39vh",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "LOREM IPSUM",
 "height": 50,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 50,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "HTMLText",
 "height": "46%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.72vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.72vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "75%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minWidth": 1,
 "paddingRight": 0,
 "class": "Image",
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 200,
 "maxHeight": 200,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "75%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "class": "HTMLText",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList])",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_03C8CF70_1DC6_AB84_418A_F49E5158C6CF"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "borderSize": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "defaultVRPointer": "laser",
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "downloadEnabled": false,
 "class": "Player",
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
