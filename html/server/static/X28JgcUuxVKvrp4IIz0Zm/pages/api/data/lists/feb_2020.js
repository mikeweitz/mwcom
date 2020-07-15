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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IElW");


/***/ }),

/***/ "IElW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/0tUgpxMZ9lzJOsHp3zDlfk"
  },
  "followers": {
    "href": null,
    "total": 1
  },
  "href": "https://api.spotify.com/v1/playlists/0tUgpxMZ9lzJOsHp3zDlfk?type=track,episode",
  "id": "0tUgpxMZ9lzJOsHp3zDlfk",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b27318ffd6edc9a59a7234d0347bab67616d0000b273216dba09035f03b6bf3dc741ab67616d0000b27328b8850c1940ef6dbbb019f8ab67616d0000b273ccd63af052f7e438c05f6c94",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b27318ffd6edc9a59a7234d0347bab67616d0000b273216dba09035f03b6bf3dc741ab67616d0000b27328b8850c1940ef6dbbb019f8ab67616d0000b273ccd63af052f7e438c05f6c94",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b27318ffd6edc9a59a7234d0347bab67616d0000b273216dba09035f03b6bf3dc741ab67616d0000b27328b8850c1940ef6dbbb019f8ab67616d0000b273ccd63af052f7e438c05f6c94",
    "width": 60
  }],
  "name": "Feb 2020",
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
  "public": false,
  "sharing_info": {
    "share_id": "VzL8wJ7BR6mCW3Yj0TEViA",
    "share_url": "https://open.spotify.com/playlist/0tUgpxMZ9lzJOsHp3zDlfk?si=VzL8wJ7BR6mCW3Yj0TEViA",
    "uri": "spotify:playlist:0tUgpxMZ9lzJOsHp3zDlfk"
  },
  "snapshot_id": "MzksY2I5ZDAzNTRhYmE2OTk0NDFhYjg4MGI2ZTNkZWI1MzBiMmE5NjE3NA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/0tUgpxMZ9lzJOsHp3zDlfk/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2020-01-30T20:49:02Z",
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
        "share_id": "IUtoLwlYQiWJX86oVLicAg",
        "share_url": "https://open.spotify.com/track/5RxpYHVbGJPOvSEATQyg9P?si=IUtoLwlYQiWJX86oVLicAg",
        "uri": "spotify:track:5RxpYHVbGJPOvSEATQyg9P"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4iMO20EPodreIaEl8qW66y"
            },
            "href": "https://api.spotify.com/v1/artists/4iMO20EPodreIaEl8qW66y",
            "id": "4iMO20EPodreIaEl8qW66y",
            "name": "Still Woozy",
            "type": "artist",
            "uri": "spotify:artist:4iMO20EPodreIaEl8qW66y"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4VPzKudemKpbuuyEHIhFSU"
          },
          "href": "https://api.spotify.com/v1/albums/4VPzKudemKpbuuyEHIhFSU",
          "id": "4VPzKudemKpbuuyEHIhFSU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27318ffd6edc9a59a7234d0347b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0218ffd6edc9a59a7234d0347b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485118ffd6edc9a59a7234d0347b",
            "width": 64
          }],
          "name": "Lucy",
          "release_date": "2018-03-22",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4VPzKudemKpbuuyEHIhFSU"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4iMO20EPodreIaEl8qW66y"
          },
          "href": "https://api.spotify.com/v1/artists/4iMO20EPodreIaEl8qW66y",
          "id": "4iMO20EPodreIaEl8qW66y",
          "name": "Still Woozy",
          "type": "artist",
          "uri": "spotify:artist:4iMO20EPodreIaEl8qW66y"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5aMIbwZQvP2MHPMVC5zCGj"
          },
          "href": "https://api.spotify.com/v1/artists/5aMIbwZQvP2MHPMVC5zCGj",
          "id": "5aMIbwZQvP2MHPMVC5zCGj",
          "name": "ODIE",
          "type": "artist",
          "uri": "spotify:artist:5aMIbwZQvP2MHPMVC5zCGj"
        }],
        "disc_number": 1,
        "duration_ms": 142500,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "QZBRF1873892"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5RxpYHVbGJPOvSEATQyg9P"
        },
        "href": "https://api.spotify.com/v1/tracks/5RxpYHVbGJPOvSEATQyg9P",
        "id": "5RxpYHVbGJPOvSEATQyg9P",
        "is_local": false,
        "is_playable": true,
        "name": "Lucy",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/6efeaa8b294157754a7d44eb8f80aca478cae7b8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5RxpYHVbGJPOvSEATQyg9P"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-30T20:49:20Z",
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
        "share_id": "4tg7CFVtSvamxt1nk95GIg",
        "share_url": "https://open.spotify.com/track/7kyiHjkFdmHcYcIJtFAdaF?si=4tg7CFVtSvamxt1nk95GIg",
        "uri": "spotify:track:7kyiHjkFdmHcYcIJtFAdaF"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/32zeX1IoVKAGWMyy1isKUq"
            },
            "href": "https://api.spotify.com/v1/artists/32zeX1IoVKAGWMyy1isKUq",
            "id": "32zeX1IoVKAGWMyy1isKUq",
            "name": "No Vacation",
            "type": "artist",
            "uri": "spotify:artist:32zeX1IoVKAGWMyy1isKUq"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/33dtgSEkkObUGGyNz2MgkH"
          },
          "href": "https://api.spotify.com/v1/albums/33dtgSEkkObUGGyNz2MgkH",
          "id": "33dtgSEkkObUGGyNz2MgkH",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27328b8850c1940ef6dbbb019f8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0228b8850c1940ef6dbbb019f8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485128b8850c1940ef6dbbb019f8",
            "width": 64
          }],
          "name": "Yam Yam",
          "release_date": "2017-05-12",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:33dtgSEkkObUGGyNz2MgkH"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/32zeX1IoVKAGWMyy1isKUq"
          },
          "href": "https://api.spotify.com/v1/artists/32zeX1IoVKAGWMyy1isKUq",
          "id": "32zeX1IoVKAGWMyy1isKUq",
          "name": "No Vacation",
          "type": "artist",
          "uri": "spotify:artist:32zeX1IoVKAGWMyy1isKUq"
        }],
        "disc_number": 1,
        "duration_ms": 216038,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEZ61716902"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7kyiHjkFdmHcYcIJtFAdaF"
        },
        "href": "https://api.spotify.com/v1/tracks/7kyiHjkFdmHcYcIJtFAdaF",
        "id": "7kyiHjkFdmHcYcIJtFAdaF",
        "is_local": false,
        "is_playable": true,
        "name": "Yam Yam",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/5f77e759794055aea4708df73a4bf4436fc9f1b9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7kyiHjkFdmHcYcIJtFAdaF"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-13T23:39:58Z",
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
        "share_id": "e3nXgBcpSj6CW7E1cKXEuw",
        "share_url": "https://open.spotify.com/track/6JdkIVtXhXh08cBDbLkimw?si=e3nXgBcpSj6CW7E1cKXEuw",
        "uri": "spotify:track:6JdkIVtXhXh08cBDbLkimw"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5QP5fl1l4e9NmKmkMUOTF5"
            },
            "href": "https://api.spotify.com/v1/artists/5QP5fl1l4e9NmKmkMUOTF5",
            "id": "5QP5fl1l4e9NmKmkMUOTF5",
            "name": "CAPYAC",
            "type": "artist",
            "uri": "spotify:artist:5QP5fl1l4e9NmKmkMUOTF5"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/59d2umUNsbJ7O2uJMQacR0"
          },
          "href": "https://api.spotify.com/v1/albums/59d2umUNsbJ7O2uJMQacR0",
          "id": "59d2umUNsbJ7O2uJMQacR0",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273216dba09035f03b6bf3dc741",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02216dba09035f03b6bf3dc741",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851216dba09035f03b6bf3dc741",
            "width": 64
          }],
          "name": "Dirty",
          "release_date": "2020-01-31",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:59d2umUNsbJ7O2uJMQacR0"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5QP5fl1l4e9NmKmkMUOTF5"
          },
          "href": "https://api.spotify.com/v1/artists/5QP5fl1l4e9NmKmkMUOTF5",
          "id": "5QP5fl1l4e9NmKmkMUOTF5",
          "name": "CAPYAC",
          "type": "artist",
          "uri": "spotify:artist:5QP5fl1l4e9NmKmkMUOTF5"
        }],
        "disc_number": 1,
        "duration_ms": 232202,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMEZE2008881"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6JdkIVtXhXh08cBDbLkimw"
        },
        "href": "https://api.spotify.com/v1/tracks/6JdkIVtXhXh08cBDbLkimw",
        "id": "6JdkIVtXhXh08cBDbLkimw",
        "is_local": false,
        "is_playable": true,
        "name": "Dirty",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/66f6d75e94d619d4cf7a4ecde3dcabd6eabe42a9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6JdkIVtXhXh08cBDbLkimw"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-30T20:49:34Z",
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
        "share_id": "HU-3TIq0Rm-xTM1dUj_PsQ",
        "share_url": "https://open.spotify.com/track/64lsIF5pw0sJY0gV5kz0RN?si=HU-3TIq0Rm-xTM1dUj_PsQ",
        "uri": "spotify:track:64lsIF5pw0sJY0gV5kz0RN"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6eJa3zG1QZLRB3xgRuyxbm"
            },
            "href": "https://api.spotify.com/v1/artists/6eJa3zG1QZLRB3xgRuyxbm",
            "id": "6eJa3zG1QZLRB3xgRuyxbm",
            "name": "Dayglow",
            "type": "artist",
            "uri": "spotify:artist:6eJa3zG1QZLRB3xgRuyxbm"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5PFzbdbZRNaoGLCHFPnmv3"
          },
          "href": "https://api.spotify.com/v1/albums/5PFzbdbZRNaoGLCHFPnmv3",
          "id": "5PFzbdbZRNaoGLCHFPnmv3",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ccd63af052f7e438c05f6c94",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ccd63af052f7e438c05f6c94",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ccd63af052f7e438c05f6c94",
            "width": 64
          }],
          "name": "Fuzzybrain",
          "release_date": "2019-11-14",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5PFzbdbZRNaoGLCHFPnmv3"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eJa3zG1QZLRB3xgRuyxbm"
          },
          "href": "https://api.spotify.com/v1/artists/6eJa3zG1QZLRB3xgRuyxbm",
          "id": "6eJa3zG1QZLRB3xgRuyxbm",
          "name": "Dayglow",
          "type": "artist",
          "uri": "spotify:artist:6eJa3zG1QZLRB3xgRuyxbm"
        }],
        "disc_number": 1,
        "duration_ms": 278769,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADL1825079"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/64lsIF5pw0sJY0gV5kz0RN"
        },
        "href": "https://api.spotify.com/v1/tracks/64lsIF5pw0sJY0gV5kz0RN",
        "id": "64lsIF5pw0sJY0gV5kz0RN",
        "is_local": false,
        "is_playable": true,
        "name": "Can I Call You Tonight?",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/1df9f9b1d2fa409883d304d9fd3b8e45110e72fc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:64lsIF5pw0sJY0gV5kz0RN"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-03T19:35:25Z",
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
        "share_id": "JaFArh8JTGSytxfVBhjnEA",
        "share_url": "https://open.spotify.com/track/1ErIa5ymCTUVIo7xKaXjgm?si=JaFArh8JTGSytxfVBhjnEA",
        "uri": "spotify:track:1ErIa5ymCTUVIo7xKaXjgm"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7ebBg3BuRFa2satTcY8whC"
            },
            "href": "https://api.spotify.com/v1/artists/7ebBg3BuRFa2satTcY8whC",
            "id": "7ebBg3BuRFa2satTcY8whC",
            "name": "Billy Lemos",
            "type": "artist",
            "uri": "spotify:artist:7ebBg3BuRFa2satTcY8whC"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2314UpIMdS8DMZyKiZ00Fs"
            },
            "href": "https://api.spotify.com/v1/artists/2314UpIMdS8DMZyKiZ00Fs",
            "id": "2314UpIMdS8DMZyKiZ00Fs",
            "name": "JJ",
            "type": "artist",
            "uri": "spotify:artist:2314UpIMdS8DMZyKiZ00Fs"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/207BLTz3BLhjemvQNxYJZA"
          },
          "href": "https://api.spotify.com/v1/albums/207BLTz3BLhjemvQNxYJZA",
          "id": "207BLTz3BLhjemvQNxYJZA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c4e9c33cfea81611629106b4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c4e9c33cfea81611629106b4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c4e9c33cfea81611629106b4",
            "width": 64
          }],
          "name": "Run Fast",
          "release_date": "2019-11-08",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:207BLTz3BLhjemvQNxYJZA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7ebBg3BuRFa2satTcY8whC"
          },
          "href": "https://api.spotify.com/v1/artists/7ebBg3BuRFa2satTcY8whC",
          "id": "7ebBg3BuRFa2satTcY8whC",
          "name": "Billy Lemos",
          "type": "artist",
          "uri": "spotify:artist:7ebBg3BuRFa2satTcY8whC"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2314UpIMdS8DMZyKiZ00Fs"
          },
          "href": "https://api.spotify.com/v1/artists/2314UpIMdS8DMZyKiZ00Fs",
          "id": "2314UpIMdS8DMZyKiZ00Fs",
          "name": "JJ",
          "type": "artist",
          "uri": "spotify:artist:2314UpIMdS8DMZyKiZ00Fs"
        }],
        "disc_number": 1,
        "duration_ms": 142263,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1969020"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1ErIa5ymCTUVIo7xKaXjgm"
        },
        "href": "https://api.spotify.com/v1/tracks/1ErIa5ymCTUVIo7xKaXjgm",
        "id": "1ErIa5ymCTUVIo7xKaXjgm",
        "is_local": false,
        "is_playable": true,
        "name": "Run Fast",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/b9180295b16ebb390b2d71be68bae97faa54aa90?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1ErIa5ymCTUVIo7xKaXjgm"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-18T21:42:52Z",
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
        "share_id": "3PauToIfRxuTbbXOzFyXAw",
        "share_url": "https://open.spotify.com/track/1175r6ZmkUjX8dRJLz9Ohk?si=3PauToIfRxuTbbXOzFyXAw",
        "uri": "spotify:track:1175r6ZmkUjX8dRJLz9Ohk"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/027TpXKGwdXP7iwbjUSpV8"
            },
            "href": "https://api.spotify.com/v1/artists/027TpXKGwdXP7iwbjUSpV8",
            "id": "027TpXKGwdXP7iwbjUSpV8",
            "name": "The Walters",
            "type": "artist",
            "uri": "spotify:artist:027TpXKGwdXP7iwbjUSpV8"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3MFTbUnA8C9T6KCBb0gpH5"
          },
          "href": "https://api.spotify.com/v1/albums/3MFTbUnA8C9T6KCBb0gpH5",
          "id": "3MFTbUnA8C9T6KCBb0gpH5",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273acf9c94f73fede70cca51d5e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02acf9c94f73fede70cca51d5e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851acf9c94f73fede70cca51d5e",
            "width": 64
          }],
          "name": "Songs for Dads",
          "release_date": "2014-11-28",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:3MFTbUnA8C9T6KCBb0gpH5"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/027TpXKGwdXP7iwbjUSpV8"
          },
          "href": "https://api.spotify.com/v1/artists/027TpXKGwdXP7iwbjUSpV8",
          "id": "027TpXKGwdXP7iwbjUSpV8",
          "name": "The Walters",
          "type": "artist",
          "uri": "spotify:artist:027TpXKGwdXP7iwbjUSpV8"
        }],
        "disc_number": 1,
        "duration_ms": 160253,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACC1438995"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1175r6ZmkUjX8dRJLz9Ohk"
        },
        "href": "https://api.spotify.com/v1/tracks/1175r6ZmkUjX8dRJLz9Ohk",
        "id": "1175r6ZmkUjX8dRJLz9Ohk",
        "is_local": false,
        "is_playable": true,
        "name": "I Love You So",
        "popularity": 70,
        "preview_url": "https://p.scdn.co/mp3-preview/2eca25fce81fa6a98f7cdb0dd3f36efe8913ff14?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1175r6ZmkUjX8dRJLz9Ohk"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-18T21:56:18Z",
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
        "share_id": "RGxqh_rbRLGg7dUgMMNElA",
        "share_url": "https://open.spotify.com/track/77iRifbhkJGvGBBRNykUwN?si=RGxqh_rbRLGg7dUgMMNElA",
        "uri": "spotify:track:77iRifbhkJGvGBBRNykUwN"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0tMnuEXTeJeHbslcV8OybJ"
            },
            "href": "https://api.spotify.com/v1/artists/0tMnuEXTeJeHbslcV8OybJ",
            "id": "0tMnuEXTeJeHbslcV8OybJ",
            "name": "Drugdealer",
            "type": "artist",
            "uri": "spotify:artist:0tMnuEXTeJeHbslcV8OybJ"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7sE5BL81qaw47AiiH9rV2H"
          },
          "href": "https://api.spotify.com/v1/albums/7sE5BL81qaw47AiiH9rV2H",
          "id": "7sE5BL81qaw47AiiH9rV2H",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273de72aa25bc01542c51c11ad6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02de72aa25bc01542c51c11ad6",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851de72aa25bc01542c51c11ad6",
            "width": 64
          }],
          "name": "The End Of Comedy",
          "release_date": "2016-09-09",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:7sE5BL81qaw47AiiH9rV2H"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0tMnuEXTeJeHbslcV8OybJ"
          },
          "href": "https://api.spotify.com/v1/artists/0tMnuEXTeJeHbslcV8OybJ",
          "id": "0tMnuEXTeJeHbslcV8OybJ",
          "name": "Drugdealer",
          "type": "artist",
          "uri": "spotify:artist:0tMnuEXTeJeHbslcV8OybJ"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3Uqu1mEdkUJxPe7s31n1M9"
          },
          "href": "https://api.spotify.com/v1/artists/3Uqu1mEdkUJxPe7s31n1M9",
          "id": "3Uqu1mEdkUJxPe7s31n1M9",
          "name": "Weyes Blood",
          "type": "artist",
          "uri": "spotify:artist:3Uqu1mEdkUJxPe7s31n1M9"
        }],
        "disc_number": 1,
        "duration_ms": 197040,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1600145"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/77iRifbhkJGvGBBRNykUwN"
        },
        "href": "https://api.spotify.com/v1/tracks/77iRifbhkJGvGBBRNykUwN",
        "id": "77iRifbhkJGvGBBRNykUwN",
        "is_local": false,
        "is_playable": true,
        "name": "Suddenly",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/06df57c8ba7fa74ea3f44794bcb98486507ef472?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:77iRifbhkJGvGBBRNykUwN"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-01T07:37:42Z",
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
        "share_id": "1s6faze1TDqj5pXDh2G5ww",
        "share_url": "https://open.spotify.com/track/2heKX4ER6T2PHePYiobPQK?si=1s6faze1TDqj5pXDh2G5ww",
        "uri": "spotify:track:2heKX4ER6T2PHePYiobPQK"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1pVkv7jJIZw6bJoQrm93v4"
            },
            "href": "https://api.spotify.com/v1/artists/1pVkv7jJIZw6bJoQrm93v4",
            "id": "1pVkv7jJIZw6bJoQrm93v4",
            "name": "Sister Screamer",
            "type": "artist",
            "uri": "spotify:artist:1pVkv7jJIZw6bJoQrm93v4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5pcnK4IDtt0toerF4J55I5"
          },
          "href": "https://api.spotify.com/v1/albums/5pcnK4IDtt0toerF4J55I5",
          "id": "5pcnK4IDtt0toerF4J55I5",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27305b1f4f3d398b00122c59fef",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0205b1f4f3d398b00122c59fef",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485105b1f4f3d398b00122c59fef",
            "width": 64
          }],
          "name": "The One That You Love",
          "release_date": "2019-05-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5pcnK4IDtt0toerF4J55I5"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1pVkv7jJIZw6bJoQrm93v4"
          },
          "href": "https://api.spotify.com/v1/artists/1pVkv7jJIZw6bJoQrm93v4",
          "id": "1pVkv7jJIZw6bJoQrm93v4",
          "name": "Sister Screamer",
          "type": "artist",
          "uri": "spotify:artist:1pVkv7jJIZw6bJoQrm93v4"
        }],
        "disc_number": 1,
        "duration_ms": 209448,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZFYW1903017"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2heKX4ER6T2PHePYiobPQK"
        },
        "href": "https://api.spotify.com/v1/tracks/2heKX4ER6T2PHePYiobPQK",
        "id": "2heKX4ER6T2PHePYiobPQK",
        "is_local": false,
        "is_playable": true,
        "name": "The One That You Love",
        "popularity": 0,
        "preview_url": "https://p.scdn.co/mp3-preview/68496b7a2af2d6f12a95e9e58f9370f0585e0b53?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2heKX4ER6T2PHePYiobPQK"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-18T21:48:26Z",
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
        "share_id": "0Kvsi0y_RB-Dr7m3gDbK6g",
        "share_url": "https://open.spotify.com/track/5FgpFaq1XmeUvZJXK2atOT?si=0Kvsi0y_RB-Dr7m3gDbK6g",
        "uri": "spotify:track:5FgpFaq1XmeUvZJXK2atOT"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5uTJLo3c4ZHpH8oEwGxYUN"
            },
            "href": "https://api.spotify.com/v1/artists/5uTJLo3c4ZHpH8oEwGxYUN",
            "id": "5uTJLo3c4ZHpH8oEwGxYUN",
            "name": "Lower Dens",
            "type": "artist",
            "uri": "spotify:artist:5uTJLo3c4ZHpH8oEwGxYUN"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6rx96PrG4n2r80W391kTfZ"
          },
          "href": "https://api.spotify.com/v1/albums/6rx96PrG4n2r80W391kTfZ",
          "id": "6rx96PrG4n2r80W391kTfZ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c1d7a9cda9fe67220eaea5bd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c1d7a9cda9fe67220eaea5bd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c1d7a9cda9fe67220eaea5bd",
            "width": 64
          }],
          "name": "The Competition",
          "release_date": "2019-09-06",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6rx96PrG4n2r80W391kTfZ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5uTJLo3c4ZHpH8oEwGxYUN"
          },
          "href": "https://api.spotify.com/v1/artists/5uTJLo3c4ZHpH8oEwGxYUN",
          "id": "5uTJLo3c4ZHpH8oEwGxYUN",
          "name": "Lower Dens",
          "type": "artist",
          "uri": "spotify:artist:5uTJLo3c4ZHpH8oEwGxYUN"
        }],
        "disc_number": 1,
        "duration_ms": 224114,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1900005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5FgpFaq1XmeUvZJXK2atOT"
        },
        "href": "https://api.spotify.com/v1/tracks/5FgpFaq1XmeUvZJXK2atOT",
        "id": "5FgpFaq1XmeUvZJXK2atOT",
        "is_local": false,
        "is_playable": true,
        "name": "Young Republicans",
        "popularity": 26,
        "preview_url": "https://p.scdn.co/mp3-preview/c4d394785d8afec0a699735b6a26d3156683da38?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:5FgpFaq1XmeUvZJXK2atOT"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-19T00:48:25Z",
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
        "share_id": "iO38VURmTZmZsmpnrLms9A",
        "share_url": "https://open.spotify.com/track/5p9xOmhxI3NF0wkevq65Fr?si=iO38VURmTZmZsmpnrLms9A",
        "uri": "spotify:track:5p9xOmhxI3NF0wkevq65Fr"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2Tcg8ur8LDClHZG1I11iN8"
            },
            "href": "https://api.spotify.com/v1/artists/2Tcg8ur8LDClHZG1I11iN8",
            "id": "2Tcg8ur8LDClHZG1I11iN8",
            "name": "Mr. Gnome",
            "type": "artist",
            "uri": "spotify:artist:2Tcg8ur8LDClHZG1I11iN8"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/15SymFdxEwELZEe0DpRdzQ"
          },
          "href": "https://api.spotify.com/v1/albums/15SymFdxEwELZEe0DpRdzQ",
          "id": "15SymFdxEwELZEe0DpRdzQ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27308c5f74c7aaf6991a9c0fef2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0208c5f74c7aaf6991a9c0fef2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485108c5f74c7aaf6991a9c0fef2",
            "width": 64
          }],
          "name": "The Heart of a Dark Star",
          "release_date": "2014-11-18",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:15SymFdxEwELZEe0DpRdzQ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2Tcg8ur8LDClHZG1I11iN8"
          },
          "href": "https://api.spotify.com/v1/artists/2Tcg8ur8LDClHZG1I11iN8",
          "id": "2Tcg8ur8LDClHZG1I11iN8",
          "name": "Mr. Gnome",
          "type": "artist",
          "uri": "spotify:artist:2Tcg8ur8LDClHZG1I11iN8"
        }],
        "disc_number": 1,
        "duration_ms": 234400,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "ushm81469336"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5p9xOmhxI3NF0wkevq65Fr"
        },
        "href": "https://api.spotify.com/v1/tracks/5p9xOmhxI3NF0wkevq65Fr",
        "id": "5p9xOmhxI3NF0wkevq65Fr",
        "is_local": false,
        "is_playable": true,
        "name": "Melted Rainbow",
        "popularity": 20,
        "preview_url": "https://p.scdn.co/mp3-preview/9131e72778a843add8f0aa90d59a75d8a63bbd29?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5p9xOmhxI3NF0wkevq65Fr"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-19T17:20:32Z",
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
        "share_id": "XGn5k0EeTayLzF-rqWsT6Q",
        "share_url": "https://open.spotify.com/track/0AM6sRCaSrMzyqWwlIIy56?si=XGn5k0EeTayLzF-rqWsT6Q",
        "uri": "spotify:track:0AM6sRCaSrMzyqWwlIIy56"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1mSJCvDX0W7Dn7S9C6vmvI"
            },
            "href": "https://api.spotify.com/v1/artists/1mSJCvDX0W7Dn7S9C6vmvI",
            "id": "1mSJCvDX0W7Dn7S9C6vmvI",
            "name": "Anna of the North",
            "type": "artist",
            "uri": "spotify:artist:1mSJCvDX0W7Dn7S9C6vmvI"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5zn3hu6uk2DVnPF5yWfw0H"
          },
          "href": "https://api.spotify.com/v1/albums/5zn3hu6uk2DVnPF5yWfw0H",
          "id": "5zn3hu6uk2DVnPF5yWfw0H",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273385e670cd3eb3cd45607a344",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02385e670cd3eb3cd45607a344",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851385e670cd3eb3cd45607a344",
            "width": 64
          }],
          "name": "Dream Girl",
          "release_date": "2019-10-25",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:5zn3hu6uk2DVnPF5yWfw0H"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1mSJCvDX0W7Dn7S9C6vmvI"
          },
          "href": "https://api.spotify.com/v1/artists/1mSJCvDX0W7Dn7S9C6vmvI",
          "id": "1mSJCvDX0W7Dn7S9C6vmvI",
          "name": "Anna of the North",
          "type": "artist",
          "uri": "spotify:artist:1mSJCvDX0W7Dn7S9C6vmvI"
        }],
        "disc_number": 1,
        "duration_ms": 221680,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMCE31902424"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0AM6sRCaSrMzyqWwlIIy56"
        },
        "href": "https://api.spotify.com/v1/tracks/0AM6sRCaSrMzyqWwlIIy56",
        "id": "0AM6sRCaSrMzyqWwlIIy56",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3akpDdQJUVckqG4r1bmR25"
          },
          "href": "https://api.spotify.com/v1/tracks/3akpDdQJUVckqG4r1bmR25",
          "id": "3akpDdQJUVckqG4r1bmR25",
          "type": "track",
          "uri": "spotify:track:3akpDdQJUVckqG4r1bmR25"
        },
        "name": "My Love",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/dbc842622d551773dc8a397472e59071f9b8f6c7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0AM6sRCaSrMzyqWwlIIy56"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-20T01:57:34Z",
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
        "share_id": "Yb4iXQnqTn6PPPGV5_lSGg",
        "share_url": "https://open.spotify.com/track/5crhbtfcOWIfN5NbkqQRql?si=Yb4iXQnqTn6PPPGV5_lSGg",
        "uri": "spotify:track:5crhbtfcOWIfN5NbkqQRql"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
            },
            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
            "id": "0LyfQWJT6nXafLPZqxe9Of",
            "name": "Various Artists",
            "type": "artist",
            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/32ypMgv8eQ7ACVd2uBaPG7"
          },
          "href": "https://api.spotify.com/v1/albums/32ypMgv8eQ7ACVd2uBaPG7",
          "id": "32ypMgv8eQ7ACVd2uBaPG7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736611af661e35cbf4f6adf96f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026611af661e35cbf4f6adf96f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516611af661e35cbf4f6adf96f",
            "width": 64
          }],
          "name": "Söngvakeppnin 2020",
          "release_date": "2020-01-18",
          "release_date_precision": "day",
          "total_tracks": 32,
          "type": "album",
          "uri": "spotify:album:32ypMgv8eQ7ACVd2uBaPG7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3Hb64DQZIhDCgyHKrzBXOL"
          },
          "href": "https://api.spotify.com/v1/artists/3Hb64DQZIhDCgyHKrzBXOL",
          "id": "3Hb64DQZIhDCgyHKrzBXOL",
          "name": "Daði Freyr",
          "type": "artist",
          "uri": "spotify:artist:3Hb64DQZIhDCgyHKrzBXOL"
        }],
        "disc_number": 1,
        "duration_ms": 173386,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "ISV442002312"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5crhbtfcOWIfN5NbkqQRql"
        },
        "href": "https://api.spotify.com/v1/tracks/5crhbtfcOWIfN5NbkqQRql",
        "id": "5crhbtfcOWIfN5NbkqQRql",
        "is_local": false,
        "is_playable": true,
        "name": "Think About Things",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/675d56458ceb207b73588d25f5aae06b0010ed30?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 12,
        "type": "track",
        "uri": "spotify:track:5crhbtfcOWIfN5NbkqQRql"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-25T19:41:07Z",
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
        "share_id": "_cnLFsHTRtKhCisiYK1FVw",
        "share_url": "https://open.spotify.com/track/5Nuf5uErDlIRWUYHiXKpXN?si=_cnLFsHTRtKhCisiYK1FVw",
        "uri": "spotify:track:5Nuf5uErDlIRWUYHiXKpXN"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/574ERIqzZ5yZU9JhIf3Ysf"
            },
            "href": "https://api.spotify.com/v1/artists/574ERIqzZ5yZU9JhIf3Ysf",
            "id": "574ERIqzZ5yZU9JhIf3Ysf",
            "name": "Angie McMahon",
            "type": "artist",
            "uri": "spotify:artist:574ERIqzZ5yZU9JhIf3Ysf"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ALvcYeRWEyQ5CMh0OtMcY"
          },
          "href": "https://api.spotify.com/v1/albums/2ALvcYeRWEyQ5CMh0OtMcY",
          "id": "2ALvcYeRWEyQ5CMh0OtMcY",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730d8d14879eee56f4c35f436e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020d8d14879eee56f4c35f436e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510d8d14879eee56f4c35f436e",
            "width": 64
          }],
          "name": "Salt",
          "release_date": "2019-07-26",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2ALvcYeRWEyQ5CMh0OtMcY"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/574ERIqzZ5yZU9JhIf3Ysf"
          },
          "href": "https://api.spotify.com/v1/artists/574ERIqzZ5yZU9JhIf3Ysf",
          "id": "574ERIqzZ5yZU9JhIf3Ysf",
          "name": "Angie McMahon",
          "type": "artist",
          "uri": "spotify:artist:574ERIqzZ5yZU9JhIf3Ysf"
        }],
        "disc_number": 1,
        "duration_ms": 211760,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1812982"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5Nuf5uErDlIRWUYHiXKpXN"
        },
        "href": "https://api.spotify.com/v1/tracks/5Nuf5uErDlIRWUYHiXKpXN",
        "id": "5Nuf5uErDlIRWUYHiXKpXN",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6RaiL2wUD0685ktWv5GEqJ"
          },
          "href": "https://api.spotify.com/v1/tracks/6RaiL2wUD0685ktWv5GEqJ",
          "id": "6RaiL2wUD0685ktWv5GEqJ",
          "type": "track",
          "uri": "spotify:track:6RaiL2wUD0685ktWv5GEqJ"
        },
        "name": "Keeping Time",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/c5c1e84eaa921f1017716c4d61b6dc9ac1a5919e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5Nuf5uErDlIRWUYHiXKpXN"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-25T20:09:58Z",
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
        "share_id": "reHVTjGaR_WsLa_3J6n2Qw",
        "share_url": "https://open.spotify.com/track/3r28S7cMvpe9xDTmzizIny?si=reHVTjGaR_WsLa_3J6n2Qw",
        "uri": "spotify:track:3r28S7cMvpe9xDTmzizIny"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0pNaVvqSvldpJl7pHpNoM9"
            },
            "href": "https://api.spotify.com/v1/artists/0pNaVvqSvldpJl7pHpNoM9",
            "id": "0pNaVvqSvldpJl7pHpNoM9",
            "name": "Archers Of Loaf",
            "type": "artist",
            "uri": "spotify:artist:0pNaVvqSvldpJl7pHpNoM9"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5RextWEmys1aNOEslWXrsR"
          },
          "href": "https://api.spotify.com/v1/albums/5RextWEmys1aNOEslWXrsR",
          "id": "5RextWEmys1aNOEslWXrsR",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f3888e49581661794bcac1b2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f3888e49581661794bcac1b2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f3888e49581661794bcac1b2",
            "width": 64
          }],
          "name": "Raleigh Days",
          "release_date": "2020-02-20",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5RextWEmys1aNOEslWXrsR"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0pNaVvqSvldpJl7pHpNoM9"
          },
          "href": "https://api.spotify.com/v1/artists/0pNaVvqSvldpJl7pHpNoM9",
          "id": "0pNaVvqSvldpJl7pHpNoM9",
          "name": "Archers Of Loaf",
          "type": "artist",
          "uri": "spotify:artist:0pNaVvqSvldpJl7pHpNoM9"
        }],
        "disc_number": 1,
        "duration_ms": 140970,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMRG2072401"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3r28S7cMvpe9xDTmzizIny"
        },
        "href": "https://api.spotify.com/v1/tracks/3r28S7cMvpe9xDTmzizIny",
        "id": "3r28S7cMvpe9xDTmzizIny",
        "is_local": false,
        "is_playable": true,
        "name": "Raleigh Days",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/8eb91a57dad1f5fa77a6d1749a0227a6439620f9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3r28S7cMvpe9xDTmzizIny"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-02-18T21:50:03Z",
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
        "share_id": "CdwL4olkR7uGnufz1-TBhA",
        "share_url": "https://open.spotify.com/track/6bJJwROSFncNgccIDB2BQk?si=CdwL4olkR7uGnufz1-TBhA",
        "uri": "spotify:track:6bJJwROSFncNgccIDB2BQk"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5uTJLo3c4ZHpH8oEwGxYUN"
            },
            "href": "https://api.spotify.com/v1/artists/5uTJLo3c4ZHpH8oEwGxYUN",
            "id": "5uTJLo3c4ZHpH8oEwGxYUN",
            "name": "Lower Dens",
            "type": "artist",
            "uri": "spotify:artist:5uTJLo3c4ZHpH8oEwGxYUN"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6rx96PrG4n2r80W391kTfZ"
          },
          "href": "https://api.spotify.com/v1/albums/6rx96PrG4n2r80W391kTfZ",
          "id": "6rx96PrG4n2r80W391kTfZ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c1d7a9cda9fe67220eaea5bd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c1d7a9cda9fe67220eaea5bd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c1d7a9cda9fe67220eaea5bd",
            "width": 64
          }],
          "name": "The Competition",
          "release_date": "2019-09-06",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6rx96PrG4n2r80W391kTfZ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5uTJLo3c4ZHpH8oEwGxYUN"
          },
          "href": "https://api.spotify.com/v1/artists/5uTJLo3c4ZHpH8oEwGxYUN",
          "id": "5uTJLo3c4ZHpH8oEwGxYUN",
          "name": "Lower Dens",
          "type": "artist",
          "uri": "spotify:artist:5uTJLo3c4ZHpH8oEwGxYUN"
        }],
        "disc_number": 1,
        "duration_ms": 203158,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1900011"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6bJJwROSFncNgccIDB2BQk"
        },
        "href": "https://api.spotify.com/v1/tracks/6bJJwROSFncNgccIDB2BQk",
        "id": "6bJJwROSFncNgccIDB2BQk",
        "is_local": false,
        "is_playable": true,
        "name": "In Your House",
        "popularity": 14,
        "preview_url": "https://p.scdn.co/mp3-preview/3f310136386d00eb2ffb7105b606a1d3105c24fa?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:6bJJwROSFncNgccIDB2BQk"
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
  "uri": "spotify:playlist:0tUgpxMZ9lzJOsHp3zDlfk"
};

/***/ })

/******/ });