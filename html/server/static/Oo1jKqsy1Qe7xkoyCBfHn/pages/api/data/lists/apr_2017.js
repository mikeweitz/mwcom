module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lYw4");


/***/ }),

/***/ "lYw4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/1Ti4m11iqio5Jal82NRv4a"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/1Ti4m11iqio5Jal82NRv4a?type=track,episode",
  "id": "1Ti4m11iqio5Jal82NRv4a",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731fffb4d9edbbc0426938bdcfab67616d0000b2737c489be841df6272caed47e9ab67616d0000b273945cb645e63d13184ea60882ab67616d0000b273ab1c8cdf0bc36f419299c0f3",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731fffb4d9edbbc0426938bdcfab67616d0000b2737c489be841df6272caed47e9ab67616d0000b273945cb645e63d13184ea60882ab67616d0000b273ab1c8cdf0bc36f419299c0f3",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731fffb4d9edbbc0426938bdcfab67616d0000b2737c489be841df6272caed47e9ab67616d0000b273945cb645e63d13184ea60882ab67616d0000b273ab1c8cdf0bc36f419299c0f3",
    "width": 60
  }],
  "name": "Apr 2017",
  "owner": {
    "display_name": "Weity",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/1247970817"
    },
    "href": "https://api.spotify.com/v1/users/1247970817",
    "id": "1247970817",
    "type": "user",
    "uri": "spotify:user:1247970817"
  },
  "primary_color": null,
  "public": true,
  "sharing_info": {
    "share_id": "iNBYYkq3QMeS2cG0YwHbRg",
    "share_url": "https://open.spotify.com/playlist/1Ti4m11iqio5Jal82NRv4a?si=iNBYYkq3QMeS2cG0YwHbRg",
    "uri": "spotify:playlist:1Ti4m11iqio5Jal82NRv4a"
  },
  "snapshot_id": "NjgsNTQ1NzAyMzIyOTkwZWI0M2VkMDg4YjA3ZTE3NzA1YjA0YTk4ZmViYQ==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/1Ti4m11iqio5Jal82NRv4a/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2017-04-18T23:42:02Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "EK8zY7e8QG6uFQ95YL0PoQ",
        "share_url": "https://open.spotify.com/track/0dnVuqBjRCVTf2LC7ayViY?si=EK8zY7e8QG6uFQ95YL0PoQ",
        "uri": "spotify:track:0dnVuqBjRCVTf2LC7ayViY"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5QdyldG4Fl4TPiOIeMNpBZ"
            },
            "href": "https://api.spotify.com/v1/artists/5QdyldG4Fl4TPiOIeMNpBZ",
            "id": "5QdyldG4Fl4TPiOIeMNpBZ",
            "name": "Big Thief",
            "type": "artist",
            "uri": "spotify:artist:5QdyldG4Fl4TPiOIeMNpBZ"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4onPyHor2yOlVxCsIaGyHH"
          },
          "href": "https://api.spotify.com/v1/albums/4onPyHor2yOlVxCsIaGyHH",
          "id": "4onPyHor2yOlVxCsIaGyHH",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737c489be841df6272caed47e9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027c489be841df6272caed47e9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517c489be841df6272caed47e9",
            "width": 64
          }],
          "name": "Masterpiece",
          "release_date": "2016-05-27",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:4onPyHor2yOlVxCsIaGyHH"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5QdyldG4Fl4TPiOIeMNpBZ"
          },
          "href": "https://api.spotify.com/v1/artists/5QdyldG4Fl4TPiOIeMNpBZ",
          "id": "5QdyldG4Fl4TPiOIeMNpBZ",
          "name": "Big Thief",
          "type": "artist",
          "uri": "spotify:artist:5QdyldG4Fl4TPiOIeMNpBZ"
        }],
        "disc_number": 1,
        "duration_ms": 155938,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2U61623309"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0dnVuqBjRCVTf2LC7ayViY"
        },
        "href": "https://api.spotify.com/v1/tracks/0dnVuqBjRCVTf2LC7ayViY",
        "id": "0dnVuqBjRCVTf2LC7ayViY",
        "is_local": false,
        "is_playable": true,
        "name": "Velvet Ring",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/4fe871f2b783d5a0862c7c4344a8cca7ec2c4912?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:0dnVuqBjRCVTf2LC7ayViY"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:43:01Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "Zd4Xgi2PQHeJNe1_bt5nmw",
        "share_url": "https://open.spotify.com/track/7EyBIUrx917yceSMAsCnrq?si=Zd4Xgi2PQHeJNe1_bt5nmw",
        "uri": "spotify:track:7EyBIUrx917yceSMAsCnrq"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3ZXXJ9nO1Dn9B0AJ25eAQY"
            },
            "href": "https://api.spotify.com/v1/artists/3ZXXJ9nO1Dn9B0AJ25eAQY",
            "id": "3ZXXJ9nO1Dn9B0AJ25eAQY",
            "name": "Hamilton Leithauser",
            "type": "artist",
            "uri": "spotify:artist:3ZXXJ9nO1Dn9B0AJ25eAQY"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/04XggbrM51GcFPTxBYtRXT"
            },
            "href": "https://api.spotify.com/v1/artists/04XggbrM51GcFPTxBYtRXT",
            "id": "04XggbrM51GcFPTxBYtRXT",
            "name": "Rostam",
            "type": "artist",
            "uri": "spotify:artist:04XggbrM51GcFPTxBYtRXT"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1Q1dC1ySc1S5X8XB2DDWfE"
          },
          "href": "https://api.spotify.com/v1/albums/1Q1dC1ySc1S5X8XB2DDWfE",
          "id": "1Q1dC1ySc1S5X8XB2DDWfE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273945cb645e63d13184ea60882",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02945cb645e63d13184ea60882",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851945cb645e63d13184ea60882",
            "width": 64
          }],
          "name": "I Had a Dream That You Were Mine",
          "release_date": "2016-09-23",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1Q1dC1ySc1S5X8XB2DDWfE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3ZXXJ9nO1Dn9B0AJ25eAQY"
          },
          "href": "https://api.spotify.com/v1/artists/3ZXXJ9nO1Dn9B0AJ25eAQY",
          "id": "3ZXXJ9nO1Dn9B0AJ25eAQY",
          "name": "Hamilton Leithauser",
          "type": "artist",
          "uri": "spotify:artist:3ZXXJ9nO1Dn9B0AJ25eAQY"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/04XggbrM51GcFPTxBYtRXT"
          },
          "href": "https://api.spotify.com/v1/artists/04XggbrM51GcFPTxBYtRXT",
          "id": "04XggbrM51GcFPTxBYtRXT",
          "name": "Rostam",
          "type": "artist",
          "uri": "spotify:artist:04XggbrM51GcFPTxBYtRXT"
        }],
        "disc_number": 1,
        "duration_ms": 273453,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USYAH1600115"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7EyBIUrx917yceSMAsCnrq"
        },
        "href": "https://api.spotify.com/v1/tracks/7EyBIUrx917yceSMAsCnrq",
        "id": "7EyBIUrx917yceSMAsCnrq",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7ji0rdxqRf6o6mkW8PG8J9"
          },
          "href": "https://api.spotify.com/v1/tracks/7ji0rdxqRf6o6mkW8PG8J9",
          "id": "7ji0rdxqRf6o6mkW8PG8J9",
          "type": "track",
          "uri": "spotify:track:7ji0rdxqRf6o6mkW8PG8J9"
        },
        "name": "Sick as a Dog",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/8e3a91c72b24826dddbb8bfe3a8f834e8af4a5dd?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7EyBIUrx917yceSMAsCnrq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-19T00:00:28Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "6t8pGzCDSXq9cNPHw03GVg",
        "share_url": "https://open.spotify.com/track/1ahzHj4rfljE8w4ZwpEjOM?si=6t8pGzCDSXq9cNPHw03GVg",
        "uri": "spotify:track:1ahzHj4rfljE8w4ZwpEjOM"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3dv4Q4q3LWOnbLJnC6GgTY"
            },
            "href": "https://api.spotify.com/v1/artists/3dv4Q4q3LWOnbLJnC6GgTY",
            "id": "3dv4Q4q3LWOnbLJnC6GgTY",
            "name": "Yellow Days",
            "type": "artist",
            "uri": "spotify:artist:3dv4Q4q3LWOnbLJnC6GgTY"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5CPwacWmIAaA5DLUq7EHUC"
          },
          "href": "https://api.spotify.com/v1/albums/5CPwacWmIAaA5DLUq7EHUC",
          "id": "5CPwacWmIAaA5DLUq7EHUC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731fffb4d9edbbc0426938bdcf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021fffb4d9edbbc0426938bdcf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511fffb4d9edbbc0426938bdcf",
            "width": 64
          }],
          "name": "Harmless Melodies",
          "release_date": "2016-11-18",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:5CPwacWmIAaA5DLUq7EHUC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3dv4Q4q3LWOnbLJnC6GgTY"
          },
          "href": "https://api.spotify.com/v1/artists/3dv4Q4q3LWOnbLJnC6GgTY",
          "id": "3dv4Q4q3LWOnbLJnC6GgTY",
          "name": "Yellow Days",
          "type": "artist",
          "uri": "spotify:artist:3dv4Q4q3LWOnbLJnC6GgTY"
        }],
        "disc_number": 1,
        "duration_ms": 318147,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM4TW1651052"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1ahzHj4rfljE8w4ZwpEjOM"
        },
        "href": "https://api.spotify.com/v1/tracks/1ahzHj4rfljE8w4ZwpEjOM",
        "id": "1ahzHj4rfljE8w4ZwpEjOM",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3MrxunBZpzcx3nwEnpjmSs"
          },
          "href": "https://api.spotify.com/v1/tracks/3MrxunBZpzcx3nwEnpjmSs",
          "id": "3MrxunBZpzcx3nwEnpjmSs",
          "type": "track",
          "uri": "spotify:track:3MrxunBZpzcx3nwEnpjmSs"
        },
        "name": "A Little While",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/99324fb2036fbce7671c73eeef24a69d8d5057c5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:1ahzHj4rfljE8w4ZwpEjOM"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:43:27Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "c47mRwQ7RXuBSy-qFzY5JA",
        "share_url": "https://open.spotify.com/track/6rdPOO6QBwbDwfBJrXkb3S?si=c47mRwQ7RXuBSy-qFzY5JA",
        "uri": "spotify:track:6rdPOO6QBwbDwfBJrXkb3S"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2ueoLVCXQ948OfhVvAy3Nn"
            },
            "href": "https://api.spotify.com/v1/artists/2ueoLVCXQ948OfhVvAy3Nn",
            "id": "2ueoLVCXQ948OfhVvAy3Nn",
            "name": "Perfume Genius",
            "type": "artist",
            "uri": "spotify:artist:2ueoLVCXQ948OfhVvAy3Nn"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5KPRif9wPSjWptvT0q46ua"
          },
          "href": "https://api.spotify.com/v1/albums/5KPRif9wPSjWptvT0q46ua",
          "id": "5KPRif9wPSjWptvT0q46ua",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ab1c8cdf0bc36f419299c0f3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ab1c8cdf0bc36f419299c0f3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ab1c8cdf0bc36f419299c0f3",
            "width": 64
          }],
          "name": "Slip Away",
          "release_date": "2017-03-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5KPRif9wPSjWptvT0q46ua"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2ueoLVCXQ948OfhVvAy3Nn"
          },
          "href": "https://api.spotify.com/v1/artists/2ueoLVCXQ948OfhVvAy3Nn",
          "id": "2ueoLVCXQ948OfhVvAy3Nn",
          "name": "Perfume Genius",
          "type": "artist",
          "uri": "spotify:artist:2ueoLVCXQ948OfhVvAy3Nn"
        }],
        "disc_number": 1,
        "duration_ms": 165329,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMTD1709223"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6rdPOO6QBwbDwfBJrXkb3S"
        },
        "href": "https://api.spotify.com/v1/tracks/6rdPOO6QBwbDwfBJrXkb3S",
        "id": "6rdPOO6QBwbDwfBJrXkb3S",
        "is_local": false,
        "is_playable": true,
        "name": "Slip Away",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/11546ebc7a3bb5fae69e34408888b21b26a6c703?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6rdPOO6QBwbDwfBJrXkb3S"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:47:57Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "7y6vgCQbQ7qvNbexaelOyA",
        "share_url": "https://open.spotify.com/track/3z40poMPmOkS6799tbXGKz?si=7y6vgCQbQ7qvNbexaelOyA",
        "uri": "spotify:track:3z40poMPmOkS6799tbXGKz"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/09hVIj6vWgoCDtT03h8ZCa"
            },
            "href": "https://api.spotify.com/v1/artists/09hVIj6vWgoCDtT03h8ZCa",
            "id": "09hVIj6vWgoCDtT03h8ZCa",
            "name": "A Tribe Called Quest",
            "type": "artist",
            "uri": "spotify:artist:09hVIj6vWgoCDtT03h8ZCa"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3WvQpufOsPzkZvcSuynCf3"
          },
          "href": "https://api.spotify.com/v1/albums/3WvQpufOsPzkZvcSuynCf3",
          "id": "3WvQpufOsPzkZvcSuynCf3",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27389450c8e877bf04203b86819",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0289450c8e877bf04203b86819",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485189450c8e877bf04203b86819",
            "width": 64
          }],
          "name": "We got it from Here... Thank You 4 Your service",
          "release_date": "2016-11-11",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:3WvQpufOsPzkZvcSuynCf3"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/09hVIj6vWgoCDtT03h8ZCa"
          },
          "href": "https://api.spotify.com/v1/artists/09hVIj6vWgoCDtT03h8ZCa",
          "id": "09hVIj6vWgoCDtT03h8ZCa",
          "name": "A Tribe Called Quest",
          "type": "artist",
          "uri": "spotify:artist:09hVIj6vWgoCDtT03h8ZCa"
        }],
        "disc_number": 1,
        "duration_ms": 172760,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USSM11609281"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3z40poMPmOkS6799tbXGKz"
        },
        "href": "https://api.spotify.com/v1/tracks/3z40poMPmOkS6799tbXGKz",
        "id": "3z40poMPmOkS6799tbXGKz",
        "is_local": false,
        "is_playable": true,
        "name": "Whateva Will Be",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/371c54f2ef2fbf257aaac57dc7dd590860a8b815?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:3z40poMPmOkS6799tbXGKz"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:46:56Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "x5s5z2f9Rk2QONBdzgnyIA",
        "share_url": "https://open.spotify.com/track/1zw5c8a4nI0xdPOPqgeBJQ?si=x5s5z2f9Rk2QONBdzgnyIA",
        "uri": "spotify:track:1zw5c8a4nI0xdPOPqgeBJQ"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/72tRiBHei5G9M8it4h4sfC"
            },
            "href": "https://api.spotify.com/v1/artists/72tRiBHei5G9M8it4h4sfC",
            "id": "72tRiBHei5G9M8it4h4sfC",
            "name": "Oddisee",
            "type": "artist",
            "uri": "spotify:artist:72tRiBHei5G9M8it4h4sfC"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2dEkjiUBO6Z2aeolcJ7sCy"
          },
          "href": "https://api.spotify.com/v1/albums/2dEkjiUBO6Z2aeolcJ7sCy",
          "id": "2dEkjiUBO6Z2aeolcJ7sCy",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27331687ee1396a77823a8fc726",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0231687ee1396a77823a8fc726",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485131687ee1396a77823a8fc726",
            "width": 64
          }],
          "name": "The Iceberg",
          "release_date": "2017-02-24",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2dEkjiUBO6Z2aeolcJ7sCy"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/72tRiBHei5G9M8it4h4sfC"
          },
          "href": "https://api.spotify.com/v1/artists/72tRiBHei5G9M8it4h4sfC",
          "id": "72tRiBHei5G9M8it4h4sfC",
          "name": "Oddisee",
          "type": "artist",
          "uri": "spotify:artist:72tRiBHei5G9M8it4h4sfC"
        }],
        "disc_number": 1,
        "duration_ms": 226268,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMBZ91689214"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1zw5c8a4nI0xdPOPqgeBJQ"
        },
        "href": "https://api.spotify.com/v1/tracks/1zw5c8a4nI0xdPOPqgeBJQ",
        "id": "1zw5c8a4nI0xdPOPqgeBJQ",
        "is_local": false,
        "is_playable": true,
        "name": "Things",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/a673ec55cd30d9436518af613317e21733ec65ad?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1zw5c8a4nI0xdPOPqgeBJQ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-19T18:20:56Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "U-IClZwoTiSehzhanh65Iw",
        "share_url": "https://open.spotify.com/track/42OhQBFNIbMyxRGxyPOvQA?si=U-IClZwoTiSehzhanh65Iw",
        "uri": "spotify:track:42OhQBFNIbMyxRGxyPOvQA"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5tth2a3v0sWwV1C7bApBdX"
            },
            "href": "https://api.spotify.com/v1/artists/5tth2a3v0sWwV1C7bApBdX",
            "id": "5tth2a3v0sWwV1C7bApBdX",
            "name": "Lil' Kim",
            "type": "artist",
            "uri": "spotify:artist:5tth2a3v0sWwV1C7bApBdX"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6ziNUlW26RQhiHOdJpSyVD"
          },
          "href": "https://api.spotify.com/v1/albums/6ziNUlW26RQhiHOdJpSyVD",
          "id": "6ziNUlW26RQhiHOdJpSyVD",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27391f6cb891257c05f4460ba7f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0291f6cb891257c05f4460ba7f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485191f6cb891257c05f4460ba7f",
            "width": 64
          }],
          "name": "Not Tonight EP",
          "release_date": "1997-06-30",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:6ziNUlW26RQhiHOdJpSyVD"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5tth2a3v0sWwV1C7bApBdX"
          },
          "href": "https://api.spotify.com/v1/artists/5tth2a3v0sWwV1C7bApBdX",
          "id": "5tth2a3v0sWwV1C7bApBdX",
          "name": "Lil' Kim",
          "type": "artist",
          "uri": "spotify:artist:5tth2a3v0sWwV1C7bApBdX"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6VJqy1YyzrK4ZhgGs9cNTy"
          },
          "href": "https://api.spotify.com/v1/artists/6VJqy1YyzrK4ZhgGs9cNTy",
          "id": "6VJqy1YyzrK4ZhgGs9cNTy",
          "name": "Angie Martinez",
          "type": "artist",
          "uri": "spotify:artist:6VJqy1YyzrK4ZhgGs9cNTy"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/64ccradw8gAQn9gMQZmEha"
          },
          "href": "https://api.spotify.com/v1/artists/64ccradw8gAQn9gMQZmEha",
          "id": "64ccradw8gAQn9gMQZmEha",
          "name": "Lisa \"Left Eye\" Lopes",
          "type": "artist",
          "uri": "spotify:artist:64ccradw8gAQn9gMQZmEha"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2I1bnmb9VQEQGKHxvr0gSf"
          },
          "href": "https://api.spotify.com/v1/artists/2I1bnmb9VQEQGKHxvr0gSf",
          "id": "2I1bnmb9VQEQGKHxvr0gSf",
          "name": "Da Brat",
          "type": "artist",
          "uri": "spotify:artist:2I1bnmb9VQEQGKHxvr0gSf"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wIVse2owClT7go1WT98tk"
          },
          "href": "https://api.spotify.com/v1/artists/2wIVse2owClT7go1WT98tk",
          "id": "2wIVse2owClT7go1WT98tk",
          "name": "Missy Elliott",
          "type": "artist",
          "uri": "spotify:artist:2wIVse2owClT7go1WT98tk"
        }],
        "disc_number": 1,
        "duration_ms": 252520,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT29801132"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/42OhQBFNIbMyxRGxyPOvQA"
        },
        "href": "https://api.spotify.com/v1/tracks/42OhQBFNIbMyxRGxyPOvQA",
        "id": "42OhQBFNIbMyxRGxyPOvQA",
        "is_local": false,
        "is_playable": true,
        "name": "Not Tonight (feat. Da Brat, Left Eye, Missy \"Misdemeanor\" Elliott and Angie Martinez) - Remix",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/4d6cc31895c1c449e7dcc87dcec02dd9589a620b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:42OhQBFNIbMyxRGxyPOvQA"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-19T17:31:00Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "Fc716RYjSEmpA8BapWsiAw",
        "share_url": "https://open.spotify.com/track/0yZkXeuKXuGuHhi4Ni7gyQ?si=Fc716RYjSEmpA8BapWsiAw",
        "uri": "spotify:track:0yZkXeuKXuGuHhi4Ni7gyQ"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3HPWhYx7kClVIOGduns3Me"
            },
            "href": "https://api.spotify.com/v1/artists/3HPWhYx7kClVIOGduns3Me",
            "id": "3HPWhYx7kClVIOGduns3Me",
            "name": "Muscles",
            "type": "artist",
            "uri": "spotify:artist:3HPWhYx7kClVIOGduns3Me"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4YIEnyhitOPQaxjCDsK8TA"
          },
          "href": "https://api.spotify.com/v1/albums/4YIEnyhitOPQaxjCDsK8TA",
          "id": "4YIEnyhitOPQaxjCDsK8TA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273076abe0cac06cc5eb55fde8d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02076abe0cac06cc5eb55fde8d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851076abe0cac06cc5eb55fde8d",
            "width": 64
          }],
          "name": "Gods",
          "release_date": "2017-03-13",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4YIEnyhitOPQaxjCDsK8TA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3HPWhYx7kClVIOGduns3Me"
          },
          "href": "https://api.spotify.com/v1/artists/3HPWhYx7kClVIOGduns3Me",
          "id": "3HPWhYx7kClVIOGduns3Me",
          "name": "Muscles",
          "type": "artist",
          "uri": "spotify:artist:3HPWhYx7kClVIOGduns3Me"
        }],
        "disc_number": 1,
        "duration_ms": 206467,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AUWCF1500006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0yZkXeuKXuGuHhi4Ni7gyQ"
        },
        "href": "https://api.spotify.com/v1/tracks/0yZkXeuKXuGuHhi4Ni7gyQ",
        "id": "0yZkXeuKXuGuHhi4Ni7gyQ",
        "is_local": false,
        "is_playable": true,
        "name": "We Know Better",
        "popularity": 0,
        "preview_url": "https://p.scdn.co/mp3-preview/5d3ee1e453f01911b023587d04e8ddcc0b119b01?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:0yZkXeuKXuGuHhi4Ni7gyQ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:56:06Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "yiMSD-dnRAOyGr35m67RCQ",
        "share_url": "https://open.spotify.com/track/3tWQq8zMI2Ekm9qzs8RW1E?si=yiMSD-dnRAOyGr35m67RCQ",
        "uri": "spotify:track:3tWQq8zMI2Ekm9qzs8RW1E"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kbO657SWC6kiO1Dni3ook"
            },
            "href": "https://api.spotify.com/v1/artists/2kbO657SWC6kiO1Dni3ook",
            "id": "2kbO657SWC6kiO1Dni3ook",
            "name": "PINS",
            "type": "artist",
            "uri": "spotify:artist:2kbO657SWC6kiO1Dni3ook"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0Dywpob6xHffxACuNy7XUu"
          },
          "href": "https://api.spotify.com/v1/albums/0Dywpob6xHffxACuNy7XUu",
          "id": "0Dywpob6xHffxACuNy7XUu",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27391b6272f2d5fd21d4ba7b79c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0291b6272f2d5fd21d4ba7b79c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485191b6272f2d5fd21d4ba7b79c",
            "width": 64
          }],
          "name": "Wild Nights",
          "release_date": "2015-06-09",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:0Dywpob6xHffxACuNy7XUu"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kbO657SWC6kiO1Dni3ook"
          },
          "href": "https://api.spotify.com/v1/artists/2kbO657SWC6kiO1Dni3ook",
          "id": "2kbO657SWC6kiO1Dni3ook",
          "name": "PINS",
          "type": "artist",
          "uri": "spotify:artist:2kbO657SWC6kiO1Dni3ook"
        }],
        "disc_number": 1,
        "duration_ms": 197386,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBRP1548902"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3tWQq8zMI2Ekm9qzs8RW1E"
        },
        "href": "https://api.spotify.com/v1/tracks/3tWQq8zMI2Ekm9qzs8RW1E",
        "id": "3tWQq8zMI2Ekm9qzs8RW1E",
        "is_local": false,
        "is_playable": true,
        "name": "Young Girls",
        "popularity": 15,
        "preview_url": "https://p.scdn.co/mp3-preview/9a6b4b09b618ff4bd56917acff22b521ca4d10ff?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3tWQq8zMI2Ekm9qzs8RW1E"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:57:43Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "F39byaQPQr-XhV0LyCCM4g",
        "share_url": "https://open.spotify.com/track/5LlsD7LdSMkGV4Iu0a2Zq0?si=F39byaQPQr-XhV0LyCCM4g",
        "uri": "spotify:track:5LlsD7LdSMkGV4Iu0a2Zq0"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2qk9voo8llSGYcZ6xrBzKx"
            },
            "href": "https://api.spotify.com/v1/artists/2qk9voo8llSGYcZ6xrBzKx",
            "id": "2qk9voo8llSGYcZ6xrBzKx",
            "name": "Kings of Leon",
            "type": "artist",
            "uri": "spotify:artist:2qk9voo8llSGYcZ6xrBzKx"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/08ibdX8K0GETv20UEku3sm"
          },
          "href": "https://api.spotify.com/v1/albums/08ibdX8K0GETv20UEku3sm",
          "id": "08ibdX8K0GETv20UEku3sm",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273644f31c55e0d6c8247a9266e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02644f31c55e0d6c8247a9266e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851644f31c55e0d6c8247a9266e",
            "width": 64
          }],
          "name": "WALLS",
          "release_date": "2016-10-14",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:08ibdX8K0GETv20UEku3sm"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2qk9voo8llSGYcZ6xrBzKx"
          },
          "href": "https://api.spotify.com/v1/artists/2qk9voo8llSGYcZ6xrBzKx",
          "id": "2qk9voo8llSGYcZ6xrBzKx",
          "name": "Kings of Leon",
          "type": "artist",
          "uri": "spotify:artist:2qk9voo8llSGYcZ6xrBzKx"
        }],
        "disc_number": 1,
        "duration_ms": 183093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC11601471"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5LlsD7LdSMkGV4Iu0a2Zq0"
        },
        "href": "https://api.spotify.com/v1/tracks/5LlsD7LdSMkGV4Iu0a2Zq0",
        "id": "5LlsD7LdSMkGV4Iu0a2Zq0",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4abm3RbYBcQlrxdV1ObjUj"
          },
          "href": "https://api.spotify.com/v1/tracks/4abm3RbYBcQlrxdV1ObjUj",
          "id": "4abm3RbYBcQlrxdV1ObjUj",
          "type": "track",
          "uri": "spotify:track:4abm3RbYBcQlrxdV1ObjUj"
        },
        "name": "Waste A Moment",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/bef65a1be5fc98be2139ee86702774205d019d3d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5LlsD7LdSMkGV4Iu0a2Zq0"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:48:48Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "SxQCFlUCRf25_4T_6Nw94g",
        "share_url": "https://open.spotify.com/track/566xn0oyl6UQhDRTJPTbf9?si=SxQCFlUCRf25_4T_6Nw94g",
        "uri": "spotify:track:566xn0oyl6UQhDRTJPTbf9"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff"
            },
            "href": "https://api.spotify.com/v1/artists/43mWhBXSflupNLuNjM5vff",
            "id": "43mWhBXSflupNLuNjM5vff",
            "name": "Soulwax",
            "type": "artist",
            "uri": "spotify:artist:43mWhBXSflupNLuNjM5vff"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0ixwdleroFAl7fWqYZaSsA"
          },
          "href": "https://api.spotify.com/v1/albums/0ixwdleroFAl7fWqYZaSsA",
          "id": "0ixwdleroFAl7fWqYZaSsA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273520d7a34d098e57d60157d85",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02520d7a34d098e57d60157d85",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851520d7a34d098e57d60157d85",
            "width": 64
          }],
          "name": "FROM DEEWEE",
          "release_date": "2017-03-24",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:0ixwdleroFAl7fWqYZaSsA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff"
          },
          "href": "https://api.spotify.com/v1/artists/43mWhBXSflupNLuNjM5vff",
          "id": "43mWhBXSflupNLuNjM5vff",
          "name": "Soulwax",
          "type": "artist",
          "uri": "spotify:artist:43mWhBXSflupNLuNjM5vff"
        }],
        "disc_number": 1,
        "duration_ms": 288080,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBENL1701811"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/566xn0oyl6UQhDRTJPTbf9"
        },
        "href": "https://api.spotify.com/v1/tracks/566xn0oyl6UQhDRTJPTbf9",
        "id": "566xn0oyl6UQhDRTJPTbf9",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5gGZm9ywqDQKrurd8A2n8r"
          },
          "href": "https://api.spotify.com/v1/tracks/5gGZm9ywqDQKrurd8A2n8r",
          "id": "5gGZm9ywqDQKrurd8A2n8r",
          "type": "track",
          "uri": "spotify:track:5gGZm9ywqDQKrurd8A2n8r"
        },
        "name": "Missing Wires",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/d3870c60a7db882fe1006b8b589088bc4a1c8290?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:566xn0oyl6UQhDRTJPTbf9"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-19T00:56:53Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "BJVzq6TmQXujZhto5xlP5Q",
        "share_url": "https://open.spotify.com/track/6wPTh6wPe6B3QcsNSWFSFA?si=BJVzq6TmQXujZhto5xlP5Q",
        "uri": "spotify:track:6wPTh6wPe6B3QcsNSWFSFA"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0IpDaO9A1OW1h0YChKzVaX"
            },
            "href": "https://api.spotify.com/v1/artists/0IpDaO9A1OW1h0YChKzVaX",
            "id": "0IpDaO9A1OW1h0YChKzVaX",
            "name": "Grinderman",
            "type": "artist",
            "uri": "spotify:artist:0IpDaO9A1OW1h0YChKzVaX"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5XqENSDSTSveo4eBTwjrW1"
          },
          "href": "https://api.spotify.com/v1/albums/5XqENSDSTSveo4eBTwjrW1",
          "id": "5XqENSDSTSveo4eBTwjrW1",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27308959ae0ebac40d01994196e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0208959ae0ebac40d01994196e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485108959ae0ebac40d01994196e",
            "width": 64
          }],
          "name": "Grinderman 2",
          "release_date": "2010-09-14",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:5XqENSDSTSveo4eBTwjrW1"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0IpDaO9A1OW1h0YChKzVaX"
          },
          "href": "https://api.spotify.com/v1/artists/0IpDaO9A1OW1h0YChKzVaX",
          "id": "0IpDaO9A1OW1h0YChKzVaX",
          "name": "Grinderman",
          "type": "artist",
          "uri": "spotify:artist:0IpDaO9A1OW1h0YChKzVaX"
        }],
        "disc_number": 1,
        "duration_ms": 212226,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAJH1000441"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6wPTh6wPe6B3QcsNSWFSFA"
        },
        "href": "https://api.spotify.com/v1/tracks/6wPTh6wPe6B3QcsNSWFSFA",
        "id": "6wPTh6wPe6B3QcsNSWFSFA",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6FoK9W47bqnsxDJiHBswbX"
          },
          "href": "https://api.spotify.com/v1/tracks/6FoK9W47bqnsxDJiHBswbX",
          "id": "6FoK9W47bqnsxDJiHBswbX",
          "type": "track",
          "uri": "spotify:track:6FoK9W47bqnsxDJiHBswbX"
        },
        "name": "Palaces of Montezuma",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/c6ad301b55a2306b68b23959164c4eb14ab5b819?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:6wPTh6wPe6B3QcsNSWFSFA"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-19T18:16:59Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "I1Q0tWXvSPOJkjiTHleqvA",
        "share_url": "https://open.spotify.com/track/0QCboMBlSGKSeQk5v1WDt7?si=I1Q0tWXvSPOJkjiTHleqvA",
        "uri": "spotify:track:0QCboMBlSGKSeQk5v1WDt7"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2gbT6GPXMis0OAkZbEQCYB"
            },
            "href": "https://api.spotify.com/v1/artists/2gbT6GPXMis0OAkZbEQCYB",
            "id": "2gbT6GPXMis0OAkZbEQCYB",
            "name": "Pinegrove",
            "type": "artist",
            "uri": "spotify:artist:2gbT6GPXMis0OAkZbEQCYB"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3CIisDFciv06JbPrZNzNqW"
          },
          "href": "https://api.spotify.com/v1/albums/3CIisDFciv06JbPrZNzNqW",
          "id": "3CIisDFciv06JbPrZNzNqW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735bdf18addac523d8725bb95e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025bdf18addac523d8725bb95e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515bdf18addac523d8725bb95e",
            "width": 64
          }],
          "name": "Everything so Far",
          "release_date": "2015-10-15",
          "release_date_precision": "day",
          "total_tracks": 21,
          "type": "album",
          "uri": "spotify:album:3CIisDFciv06JbPrZNzNqW"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2gbT6GPXMis0OAkZbEQCYB"
          },
          "href": "https://api.spotify.com/v1/artists/2gbT6GPXMis0OAkZbEQCYB",
          "id": "2gbT6GPXMis0OAkZbEQCYB",
          "name": "Pinegrove",
          "type": "artist",
          "uri": "spotify:artist:2gbT6GPXMis0OAkZbEQCYB"
        }],
        "disc_number": 1,
        "duration_ms": 199275,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACJ1513582"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0QCboMBlSGKSeQk5v1WDt7"
        },
        "href": "https://api.spotify.com/v1/tracks/0QCboMBlSGKSeQk5v1WDt7",
        "id": "0QCboMBlSGKSeQk5v1WDt7",
        "is_local": false,
        "is_playable": true,
        "name": "New Friends",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/eb580e81c1d49937dc68cdba358671fc486e18b5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0QCboMBlSGKSeQk5v1WDt7"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:51:32Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "YVZBWzI2QA2n6OGoTh0Omw",
        "share_url": "https://open.spotify.com/track/3XrXvjH1dMaSzNz5uOKdTS?si=YVZBWzI2QA2n6OGoTh0Omw",
        "uri": "spotify:track:3XrXvjH1dMaSzNz5uOKdTS"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kWeFaiHBskk8oqky3KHcR"
            },
            "href": "https://api.spotify.com/v1/artists/2kWeFaiHBskk8oqky3KHcR",
            "id": "2kWeFaiHBskk8oqky3KHcR",
            "name": "Nikki Lane",
            "type": "artist",
            "uri": "spotify:artist:2kWeFaiHBskk8oqky3KHcR"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0tYgeDm3xRF6AV19UwDXXW"
          },
          "href": "https://api.spotify.com/v1/albums/0tYgeDm3xRF6AV19UwDXXW",
          "id": "0tYgeDm3xRF6AV19UwDXXW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d274d0df7dbc820730c84878",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d274d0df7dbc820730c84878",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d274d0df7dbc820730c84878",
            "width": 64
          }],
          "name": "Highway Queen",
          "release_date": "2017-02-17",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0tYgeDm3xRF6AV19UwDXXW"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kWeFaiHBskk8oqky3KHcR"
          },
          "href": "https://api.spotify.com/v1/artists/2kWeFaiHBskk8oqky3KHcR",
          "id": "2kWeFaiHBskk8oqky3KHcR",
          "name": "Nikki Lane",
          "type": "artist",
          "uri": "spotify:artist:2kWeFaiHBskk8oqky3KHcR"
        }],
        "disc_number": 1,
        "duration_ms": 188240,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US27Q1764425"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3XrXvjH1dMaSzNz5uOKdTS"
        },
        "href": "https://api.spotify.com/v1/tracks/3XrXvjH1dMaSzNz5uOKdTS",
        "id": "3XrXvjH1dMaSzNz5uOKdTS",
        "is_local": false,
        "is_playable": true,
        "name": "Companion",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/a1746b024e3f314d89985ef8995b40ed7bf1d764?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:3XrXvjH1dMaSzNz5uOKdTS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-18T23:44:08Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/1247970817"
        },
        "href": "https://api.spotify.com/v1/users/1247970817",
        "id": "1247970817",
        "type": "user",
        "uri": "spotify:user:1247970817"
      },
      "is_local": false,
      "primary_color": null,
      "sharing_info": {
        "share_id": "ejnDsjZQQsmA0SkHdAQtjA",
        "share_url": "https://open.spotify.com/track/42YrWn7KYjhJ2GfjTJ3HSY?si=ejnDsjZQQsmA0SkHdAQtjA",
        "uri": "spotify:track:42YrWn7KYjhJ2GfjTJ3HSY"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3GQboECxDT1xqPPWC30p7v"
            },
            "href": "https://api.spotify.com/v1/artists/3GQboECxDT1xqPPWC30p7v",
            "id": "3GQboECxDT1xqPPWC30p7v",
            "name": "Charlotte Day Wilson",
            "type": "artist",
            "uri": "spotify:artist:3GQboECxDT1xqPPWC30p7v"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2q4teFR48HGFpkgjCPbXBi"
          },
          "href": "https://api.spotify.com/v1/albums/2q4teFR48HGFpkgjCPbXBi",
          "id": "2q4teFR48HGFpkgjCPbXBi",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27331e03b8de9c07a1277bd0a72",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0231e03b8de9c07a1277bd0a72",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485131e03b8de9c07a1277bd0a72",
            "width": 64
          }],
          "name": "Work",
          "release_date": "2016-04-14",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2q4teFR48HGFpkgjCPbXBi"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3GQboECxDT1xqPPWC30p7v"
          },
          "href": "https://api.spotify.com/v1/artists/3GQboECxDT1xqPPWC30p7v",
          "id": "3GQboECxDT1xqPPWC30p7v",
          "name": "Charlotte Day Wilson",
          "type": "artist",
          "uri": "spotify:artist:3GQboECxDT1xqPPWC30p7v"
        }],
        "disc_number": 1,
        "duration_ms": 224714,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAK471601701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/42YrWn7KYjhJ2GfjTJ3HSY"
        },
        "href": "https://api.spotify.com/v1/tracks/42YrWn7KYjhJ2GfjTJ3HSY",
        "id": "42YrWn7KYjhJ2GfjTJ3HSY",
        "is_local": false,
        "is_playable": true,
        "name": "Work",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/5b8fe4cb8f7edf09fb77dd4c6d6c5941c9523610?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:42YrWn7KYjhJ2GfjTJ3HSY"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 15
  },
  "type": "playlist",
  "uri": "spotify:playlist:1Ti4m11iqio5Jal82NRv4a"
};

/***/ })

/******/ });