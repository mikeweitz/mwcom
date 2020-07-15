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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+6Bi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/3uujRWNtbmH5tfkCXYJgcV"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/3uujRWNtbmH5tfkCXYJgcV?type=track,episode",
  "id": "3uujRWNtbmH5tfkCXYJgcV",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b273565de94e4c5306556f798dfdab67616d0000b273ac7b2fea4090330372dddb01ab67616d0000b273c2b10a6dda58884f88c62fd5ab67616d0000b273c567bf68aaa980e6d238a88c",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b273565de94e4c5306556f798dfdab67616d0000b273ac7b2fea4090330372dddb01ab67616d0000b273c2b10a6dda58884f88c62fd5ab67616d0000b273c567bf68aaa980e6d238a88c",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b273565de94e4c5306556f798dfdab67616d0000b273ac7b2fea4090330372dddb01ab67616d0000b273c2b10a6dda58884f88c62fd5ab67616d0000b273c567bf68aaa980e6d238a88c",
    "width": 60
  }],
  "name": "December 2018",
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
    "share_id": "ZB-dcuAAQ-K1ayB6XE59ww",
    "share_url": "https://open.spotify.com/playlist/3uujRWNtbmH5tfkCXYJgcV?si=ZB-dcuAAQ-K1ayB6XE59ww",
    "uri": "spotify:playlist:3uujRWNtbmH5tfkCXYJgcV"
  },
  "snapshot_id": "MjgsYjc1YTM1YWQxOWIyNGE1N2RkZDNjNmYyZWNjNTYzNzY1MjhkZjg5MA==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/3uujRWNtbmH5tfkCXYJgcV/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2019-01-03T17:12:12Z",
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
        "share_id": "ITgGOrZLTcqNRO6q4pjTyA",
        "share_url": "https://open.spotify.com/track/7FLSC7sUXSDAlD1xNtUxQp?si=ITgGOrZLTcqNRO6q4pjTyA",
        "uri": "spotify:track:7FLSC7sUXSDAlD1xNtUxQp"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2dPIBvg7mU59dCTGjhPylV"
            },
            "href": "https://api.spotify.com/v1/artists/2dPIBvg7mU59dCTGjhPylV",
            "id": "2dPIBvg7mU59dCTGjhPylV",
            "name": "Foxwarren",
            "type": "artist",
            "uri": "spotify:artist:2dPIBvg7mU59dCTGjhPylV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/27NP9XgsqFi9sfV9RZaqOa"
          },
          "href": "https://api.spotify.com/v1/albums/27NP9XgsqFi9sfV9RZaqOa",
          "id": "27NP9XgsqFi9sfV9RZaqOa",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c567bf68aaa980e6d238a88c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c567bf68aaa980e6d238a88c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c567bf68aaa980e6d238a88c",
            "width": 64
          }],
          "name": "Foxwarren",
          "release_date": "2018-11-30",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:27NP9XgsqFi9sfV9RZaqOa"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2dPIBvg7mU59dCTGjhPylV"
          },
          "href": "https://api.spotify.com/v1/artists/2dPIBvg7mU59dCTGjhPylV",
          "id": "2dPIBvg7mU59dCTGjhPylV",
          "name": "Foxwarren",
          "type": "artist",
          "uri": "spotify:artist:2dPIBvg7mU59dCTGjhPylV"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5mFKYdmiYwNJTDtSzgFyQx"
          },
          "href": "https://api.spotify.com/v1/artists/5mFKYdmiYwNJTDtSzgFyQx",
          "id": "5mFKYdmiYwNJTDtSzgFyQx",
          "name": "Andy Shauf",
          "type": "artist",
          "uri": "spotify:artist:5mFKYdmiYwNJTDtSzgFyQx"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6coAF2s4RTHN78t4UO50MM"
          },
          "href": "https://api.spotify.com/v1/artists/6coAF2s4RTHN78t4UO50MM",
          "id": "6coAF2s4RTHN78t4UO50MM",
          "name": "D. A. Kissick",
          "type": "artist",
          "uri": "spotify:artist:6coAF2s4RTHN78t4UO50MM"
        }],
        "disc_number": 1,
        "duration_ms": 179256,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEP41841004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7FLSC7sUXSDAlD1xNtUxQp"
        },
        "href": "https://api.spotify.com/v1/tracks/7FLSC7sUXSDAlD1xNtUxQp",
        "id": "7FLSC7sUXSDAlD1xNtUxQp",
        "is_local": false,
        "is_playable": true,
        "name": "In Another Life",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/e20a325b68117208ef1ed951ddc04026db3e2df9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:7FLSC7sUXSDAlD1xNtUxQp"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-04T20:19:51Z",
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
        "share_id": "SQdQVG6bSf2rBnDp96--2g",
        "share_url": "https://open.spotify.com/track/4EoG31Znc97ZWaOhw9htai?si=SQdQVG6bSf2rBnDp96--2g",
        "uri": "spotify:track:4EoG31Znc97ZWaOhw9htai"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/47meGvCz0CZklN50dgzjmL"
            },
            "href": "https://api.spotify.com/v1/artists/47meGvCz0CZklN50dgzjmL",
            "id": "47meGvCz0CZklN50dgzjmL",
            "name": "She Drew The Gun",
            "type": "artist",
            "uri": "spotify:artist:47meGvCz0CZklN50dgzjmL"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6e2bsmyWrTGGaZWmwZzdZe"
          },
          "href": "https://api.spotify.com/v1/albums/6e2bsmyWrTGGaZWmwZzdZe",
          "id": "6e2bsmyWrTGGaZWmwZzdZe",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c2b10a6dda58884f88c62fd5",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c2b10a6dda58884f88c62fd5",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c2b10a6dda58884f88c62fd5",
            "width": 64
          }],
          "name": "Memories Of Another Future (Deluxe)",
          "release_date": "2016-04-29",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:6e2bsmyWrTGGaZWmwZzdZe"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/47meGvCz0CZklN50dgzjmL"
          },
          "href": "https://api.spotify.com/v1/artists/47meGvCz0CZklN50dgzjmL",
          "id": "47meGvCz0CZklN50dgzjmL",
          "name": "She Drew The Gun",
          "type": "artist",
          "uri": "spotify:artist:47meGvCz0CZklN50dgzjmL"
        }],
        "disc_number": 1,
        "duration_ms": 225466,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBB4T1600002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4EoG31Znc97ZWaOhw9htai"
        },
        "href": "https://api.spotify.com/v1/tracks/4EoG31Znc97ZWaOhw9htai",
        "id": "4EoG31Znc97ZWaOhw9htai",
        "is_local": false,
        "is_playable": true,
        "name": "Since You Were Not Mine",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/9369ac1cf5781a0dfe5922bf7059d16612d3518d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4EoG31Znc97ZWaOhw9htai"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-04T20:07:19Z",
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
        "share_id": "lU-Fji_4QmCDCq0xBm9YAw",
        "share_url": "https://open.spotify.com/track/4PQJcyOjVSurR2fRZ4MNVE?si=lU-Fji_4QmCDCq0xBm9YAw",
        "uri": "spotify:track:4PQJcyOjVSurR2fRZ4MNVE"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4xnihxcoXWK3UqryOSnbw5"
            },
            "href": "https://api.spotify.com/v1/artists/4xnihxcoXWK3UqryOSnbw5",
            "id": "4xnihxcoXWK3UqryOSnbw5",
            "name": "Sasha Sloan",
            "type": "artist",
            "uri": "spotify:artist:4xnihxcoXWK3UqryOSnbw5"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7qUpf1A0w5hh4Do5SLRYjP"
          },
          "href": "https://api.spotify.com/v1/albums/7qUpf1A0w5hh4Do5SLRYjP",
          "id": "7qUpf1A0w5hh4Do5SLRYjP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ac7b2fea4090330372dddb01",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ac7b2fea4090330372dddb01",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ac7b2fea4090330372dddb01",
            "width": 64
          }],
          "name": "Loser",
          "release_date": "2018-11-29",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:7qUpf1A0w5hh4Do5SLRYjP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4xnihxcoXWK3UqryOSnbw5"
          },
          "href": "https://api.spotify.com/v1/artists/4xnihxcoXWK3UqryOSnbw5",
          "id": "4xnihxcoXWK3UqryOSnbw5",
          "name": "Sasha Sloan",
          "type": "artist",
          "uri": "spotify:artist:4xnihxcoXWK3UqryOSnbw5"
        }],
        "disc_number": 1,
        "duration_ms": 162248,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC11803489"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4PQJcyOjVSurR2fRZ4MNVE"
        },
        "href": "https://api.spotify.com/v1/tracks/4PQJcyOjVSurR2fRZ4MNVE",
        "id": "4PQJcyOjVSurR2fRZ4MNVE",
        "is_local": false,
        "is_playable": true,
        "name": "Chasing Parties",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/48f3dbe0189a2c36b94d7cf38aed2c60b3371b03?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:4PQJcyOjVSurR2fRZ4MNVE"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-04T20:19:42Z",
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
        "share_id": "2rsJo8-ITWGJyzJV1ZnXiw",
        "share_url": "https://open.spotify.com/track/7hM6bEVBz7UwutAlkLr5K4?si=2rsJo8-ITWGJyzJV1ZnXiw",
        "uri": "spotify:track:7hM6bEVBz7UwutAlkLr5K4"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3wrtQM9ICPPeHwoc1GWiyV"
            },
            "href": "https://api.spotify.com/v1/artists/3wrtQM9ICPPeHwoc1GWiyV",
            "id": "3wrtQM9ICPPeHwoc1GWiyV",
            "name": "Teleman",
            "type": "artist",
            "uri": "spotify:artist:3wrtQM9ICPPeHwoc1GWiyV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3m3I5DFdtKZlNTHUBGCLzX"
          },
          "href": "https://api.spotify.com/v1/albums/3m3I5DFdtKZlNTHUBGCLzX",
          "id": "3m3I5DFdtKZlNTHUBGCLzX",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273565de94e4c5306556f798dfd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02565de94e4c5306556f798dfd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851565de94e4c5306556f798dfd",
            "width": 64
          }],
          "name": "Cactus",
          "release_date": "2018-05-15",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3m3I5DFdtKZlNTHUBGCLzX"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3wrtQM9ICPPeHwoc1GWiyV"
          },
          "href": "https://api.spotify.com/v1/artists/3wrtQM9ICPPeHwoc1GWiyV",
          "id": "3wrtQM9ICPPeHwoc1GWiyV",
          "name": "Teleman",
          "type": "artist",
          "uri": "spotify:artist:3wrtQM9ICPPeHwoc1GWiyV"
        }],
        "disc_number": 1,
        "duration_ms": 293142,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBGEY1800017"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7hM6bEVBz7UwutAlkLr5K4"
        },
        "href": "https://api.spotify.com/v1/tracks/7hM6bEVBz7UwutAlkLr5K4",
        "id": "7hM6bEVBz7UwutAlkLr5K4",
        "is_local": false,
        "is_playable": true,
        "name": "Cactus",
        "popularity": 10,
        "preview_url": "https://p.scdn.co/mp3-preview/b3eec600f96eb3ee54d7d9f8f48bbd5e32e3aaa3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7hM6bEVBz7UwutAlkLr5K4"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-04T20:07:29Z",
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
        "share_id": "DOq3Ox8xQzKxaJm4MEaYsA",
        "share_url": "https://open.spotify.com/track/31I75JxymlPofqUfCcf54P?si=DOq3Ox8xQzKxaJm4MEaYsA",
        "uri": "spotify:track:31I75JxymlPofqUfCcf54P"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2ePIzx9NjxplS724QMZtsf"
            },
            "href": "https://api.spotify.com/v1/artists/2ePIzx9NjxplS724QMZtsf",
            "id": "2ePIzx9NjxplS724QMZtsf",
            "name": "Yuksek",
            "type": "artist",
            "uri": "spotify:artist:2ePIzx9NjxplS724QMZtsf"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FUnmKrWPoBZMDQ57er6dr"
            },
            "href": "https://api.spotify.com/v1/artists/6FUnmKrWPoBZMDQ57er6dr",
            "id": "6FUnmKrWPoBZMDQ57er6dr",
            "name": "Villa",
            "type": "artist",
            "uri": "spotify:artist:6FUnmKrWPoBZMDQ57er6dr"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1HuRN5eCcbekkmhz3tBxoS"
          },
          "href": "https://api.spotify.com/v1/albums/1HuRN5eCcbekkmhz3tBxoS",
          "id": "1HuRN5eCcbekkmhz3tBxoS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273703cbfd9b68c501c5f5f16d0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02703cbfd9b68c501c5f5f16d0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851703cbfd9b68c501c5f5f16d0",
            "width": 64
          }],
          "name": "Showbiz",
          "release_date": "2018-10-26",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1HuRN5eCcbekkmhz3tBxoS"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2ePIzx9NjxplS724QMZtsf"
          },
          "href": "https://api.spotify.com/v1/artists/2ePIzx9NjxplS724QMZtsf",
          "id": "2ePIzx9NjxplS724QMZtsf",
          "name": "Yuksek",
          "type": "artist",
          "uri": "spotify:artist:2ePIzx9NjxplS724QMZtsf"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6FUnmKrWPoBZMDQ57er6dr"
          },
          "href": "https://api.spotify.com/v1/artists/6FUnmKrWPoBZMDQ57er6dr",
          "id": "6FUnmKrWPoBZMDQ57er6dr",
          "name": "Villa",
          "type": "artist",
          "uri": "spotify:artist:6FUnmKrWPoBZMDQ57er6dr"
        }],
        "disc_number": 1,
        "duration_ms": 307984,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FRPHR1800110"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/31I75JxymlPofqUfCcf54P"
        },
        "href": "https://api.spotify.com/v1/tracks/31I75JxymlPofqUfCcf54P",
        "id": "31I75JxymlPofqUfCcf54P",
        "is_local": false,
        "is_playable": true,
        "name": "Showbiz",
        "popularity": 28,
        "preview_url": "https://p.scdn.co/mp3-preview/31ce31214dea4da58daee35b2daf5b1cf5621139?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:31I75JxymlPofqUfCcf54P"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-04T20:07:29Z",
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
        "share_id": "M8TOMscsQBmp_pGeAgFvTw",
        "share_url": "https://open.spotify.com/track/5hRkInDMxslZd6KTkIkNYd?si=M8TOMscsQBmp_pGeAgFvTw",
        "uri": "spotify:track:5hRkInDMxslZd6KTkIkNYd"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4EENT7N7rCBwrddM3s0vFS"
            },
            "href": "https://api.spotify.com/v1/artists/4EENT7N7rCBwrddM3s0vFS",
            "id": "4EENT7N7rCBwrddM3s0vFS",
            "name": "Cut Copy",
            "type": "artist",
            "uri": "spotify:artist:4EENT7N7rCBwrddM3s0vFS"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0ZAIhaogTtkZemcGccw9DE"
          },
          "href": "https://api.spotify.com/v1/albums/0ZAIhaogTtkZemcGccw9DE",
          "id": "0ZAIhaogTtkZemcGccw9DE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27352920d2f066862f105de819b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0252920d2f066862f105de819b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485152920d2f066862f105de819b",
            "width": 64
          }],
          "name": "Ocean Blue",
          "release_date": "2018-11-01",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0ZAIhaogTtkZemcGccw9DE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4EENT7N7rCBwrddM3s0vFS"
          },
          "href": "https://api.spotify.com/v1/artists/4EENT7N7rCBwrddM3s0vFS",
          "id": "4EENT7N7rCBwrddM3s0vFS",
          "name": "Cut Copy",
          "type": "artist",
          "uri": "spotify:artist:4EENT7N7rCBwrddM3s0vFS"
        }],
        "disc_number": 1,
        "duration_ms": 263080,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AUQJ31800381"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5hRkInDMxslZd6KTkIkNYd"
        },
        "href": "https://api.spotify.com/v1/tracks/5hRkInDMxslZd6KTkIkNYd",
        "id": "5hRkInDMxslZd6KTkIkNYd",
        "is_local": false,
        "is_playable": true,
        "name": "Ocean Blue",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/0e0ce2b784d27ccac295838dcd33c75985e7cd88?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5hRkInDMxslZd6KTkIkNYd"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-11T17:52:38Z",
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
        "share_id": "uLP-DEd-TWCRbkp9jJ9mog",
        "share_url": "https://open.spotify.com/track/2LQb3iYBzoxbxct2IexjBc?si=uLP-DEd-TWCRbkp9jJ9mog",
        "uri": "spotify:track:2LQb3iYBzoxbxct2IexjBc"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3A5tHz1SfngyOZM2gItYKu"
            },
            "href": "https://api.spotify.com/v1/artists/3A5tHz1SfngyOZM2gItYKu",
            "id": "3A5tHz1SfngyOZM2gItYKu",
            "name": "Earl Sweatshirt",
            "type": "artist",
            "uri": "spotify:artist:3A5tHz1SfngyOZM2gItYKu"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/66at85wgO2pu5CccvqUF6i"
          },
          "href": "https://api.spotify.com/v1/albums/66at85wgO2pu5CccvqUF6i",
          "id": "66at85wgO2pu5CccvqUF6i",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732b688ab63b1a5f281cfdf451",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022b688ab63b1a5f281cfdf451",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512b688ab63b1a5f281cfdf451",
            "width": 64
          }],
          "name": "Some Rap Songs",
          "release_date": "2018-11-30",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:66at85wgO2pu5CccvqUF6i"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3A5tHz1SfngyOZM2gItYKu"
          },
          "href": "https://api.spotify.com/v1/artists/3A5tHz1SfngyOZM2gItYKu",
          "id": "3A5tHz1SfngyOZM2gItYKu",
          "name": "Earl Sweatshirt",
          "type": "artist",
          "uri": "spotify:artist:3A5tHz1SfngyOZM2gItYKu"
        }],
        "disc_number": 1,
        "duration_ms": 141000,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USQX91802510"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2LQb3iYBzoxbxct2IexjBc"
        },
        "href": "https://api.spotify.com/v1/tracks/2LQb3iYBzoxbxct2IexjBc",
        "id": "2LQb3iYBzoxbxct2IexjBc",
        "is_local": false,
        "is_playable": true,
        "name": "Shattered Dreams",
        "popularity": 59,
        "preview_url": "https://p.scdn.co/mp3-preview/7cdaa57525556e252a6f009bc71f00bf51b2ec90?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2LQb3iYBzoxbxct2IexjBc"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-11T18:09:28Z",
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
        "share_id": "3wMBJV-zSWCpYSfWiYewqA",
        "share_url": "https://open.spotify.com/track/3CbegDfjjxNYtvXr95bNKe?si=3wMBJV-zSWCpYSfWiYewqA",
        "uri": "spotify:track:3CbegDfjjxNYtvXr95bNKe"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2Tglaf8nvDzwSQnpSrjLHP"
            },
            "href": "https://api.spotify.com/v1/artists/2Tglaf8nvDzwSQnpSrjLHP",
            "id": "2Tglaf8nvDzwSQnpSrjLHP",
            "name": "Cuco",
            "type": "artist",
            "uri": "spotify:artist:2Tglaf8nvDzwSQnpSrjLHP"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7szoQl8nGvRzUb2A7MJY7q"
          },
          "href": "https://api.spotify.com/v1/albums/7szoQl8nGvRzUb2A7MJY7q",
          "id": "7szoQl8nGvRzUb2A7MJY7q",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27364c72bf3ddfa7f26dbe046f4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0264c72bf3ddfa7f26dbe046f4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485164c72bf3ddfa7f26dbe046f4",
            "width": 64
          }],
          "name": "Melting",
          "release_date": "2018-11-19",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7szoQl8nGvRzUb2A7MJY7q"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2Tglaf8nvDzwSQnpSrjLHP"
          },
          "href": "https://api.spotify.com/v1/artists/2Tglaf8nvDzwSQnpSrjLHP",
          "id": "2Tglaf8nvDzwSQnpSrjLHP",
          "name": "Cuco",
          "type": "artist",
          "uri": "spotify:artist:2Tglaf8nvDzwSQnpSrjLHP"
        }],
        "disc_number": 1,
        "duration_ms": 200412,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AEA0Q1800524"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3CbegDfjjxNYtvXr95bNKe"
        },
        "href": "https://api.spotify.com/v1/tracks/3CbegDfjjxNYtvXr95bNKe",
        "id": "3CbegDfjjxNYtvXr95bNKe",
        "is_local": false,
        "is_playable": false,
        "name": "Melting",
        "popularity": 0,
        "preview_url": null,
        "restrictions": {
          "reason": "market"
        },
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3CbegDfjjxNYtvXr95bNKe"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-12T20:50:39Z",
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
        "share_id": "lKMZNm7eTiCnJkYJl3e2EQ",
        "share_url": "https://open.spotify.com/track/47Oyiyjgeel4s5OZF64exy?si=lKMZNm7eTiCnJkYJl3e2EQ",
        "uri": "spotify:track:47Oyiyjgeel4s5OZF64exy"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7pt1EL2DIGAZeqgnXBXYxM"
            },
            "href": "https://api.spotify.com/v1/artists/7pt1EL2DIGAZeqgnXBXYxM",
            "id": "7pt1EL2DIGAZeqgnXBXYxM",
            "name": "Nolan Garrett",
            "type": "artist",
            "uri": "spotify:artist:7pt1EL2DIGAZeqgnXBXYxM"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4PL4V1HrFJ7NwPO1FEZiMC"
          },
          "href": "https://api.spotify.com/v1/albums/4PL4V1HrFJ7NwPO1FEZiMC",
          "id": "4PL4V1HrFJ7NwPO1FEZiMC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734e512af3c6f9dc8998626afd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024e512af3c6f9dc8998626afd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514e512af3c6f9dc8998626afd",
            "width": 64
          }],
          "name": "Morning",
          "release_date": "2017-12-01",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4PL4V1HrFJ7NwPO1FEZiMC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7pt1EL2DIGAZeqgnXBXYxM"
          },
          "href": "https://api.spotify.com/v1/artists/7pt1EL2DIGAZeqgnXBXYxM",
          "id": "7pt1EL2DIGAZeqgnXBXYxM",
          "name": "Nolan Garrett",
          "type": "artist",
          "uri": "spotify:artist:7pt1EL2DIGAZeqgnXBXYxM"
        }],
        "disc_number": 1,
        "duration_ms": 212159,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "ushm91763707"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/47Oyiyjgeel4s5OZF64exy"
        },
        "href": "https://api.spotify.com/v1/tracks/47Oyiyjgeel4s5OZF64exy",
        "id": "47Oyiyjgeel4s5OZF64exy",
        "is_local": false,
        "is_playable": true,
        "name": "Morning",
        "popularity": 30,
        "preview_url": "https://p.scdn.co/mp3-preview/66139cf928e357efddc61446ab35087c5de374d4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:47Oyiyjgeel4s5OZF64exy"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-02T17:38:03Z",
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
        "share_id": "j1woL4UeSgGKUjkmIFpODA",
        "share_url": "https://open.spotify.com/track/1oRIrJIz2ijCG3NYqFLHuo?si=j1woL4UeSgGKUjkmIFpODA",
        "uri": "spotify:track:1oRIrJIz2ijCG3NYqFLHuo"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4ApdWjZjftqD77Vh6qDbCr"
            },
            "href": "https://api.spotify.com/v1/artists/4ApdWjZjftqD77Vh6qDbCr",
            "id": "4ApdWjZjftqD77Vh6qDbCr",
            "name": "Pedro The Lion",
            "type": "artist",
            "uri": "spotify:artist:4ApdWjZjftqD77Vh6qDbCr"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5u76A4Ereo3ABD3E7yXAge"
          },
          "href": "https://api.spotify.com/v1/albums/5u76A4Ereo3ABD3E7yXAge",
          "id": "5u76A4Ereo3ABD3E7yXAge",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27330ceac5614d63f5b87ddabf2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0230ceac5614d63f5b87ddabf2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485130ceac5614d63f5b87ddabf2",
            "width": 64
          }],
          "name": "Phoenix",
          "release_date": "2019-01-18",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:5u76A4Ereo3ABD3E7yXAge"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4ApdWjZjftqD77Vh6qDbCr"
          },
          "href": "https://api.spotify.com/v1/artists/4ApdWjZjftqD77Vh6qDbCr",
          "id": "4ApdWjZjftqD77Vh6qDbCr",
          "name": "Pedro The Lion",
          "type": "artist",
          "uri": "spotify:artist:4ApdWjZjftqD77Vh6qDbCr"
        }],
        "disc_number": 1,
        "duration_ms": 233717,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US3R41937002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1oRIrJIz2ijCG3NYqFLHuo"
        },
        "href": "https://api.spotify.com/v1/tracks/1oRIrJIz2ijCG3NYqFLHuo",
        "id": "1oRIrJIz2ijCG3NYqFLHuo",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5sBmpL4tJEd75UnvGrfvUD"
          },
          "href": "https://api.spotify.com/v1/tracks/5sBmpL4tJEd75UnvGrfvUD",
          "id": "5sBmpL4tJEd75UnvGrfvUD",
          "type": "track",
          "uri": "spotify:track:5sBmpL4tJEd75UnvGrfvUD"
        },
        "name": "Yellow Bike",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/e64f35f30d8d589056e5332c9076235f34592add?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1oRIrJIz2ijCG3NYqFLHuo"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-12-04T20:07:29Z",
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
        "share_id": "A3DEoIQfS7GaNqKbMsqM_Q",
        "share_url": "https://open.spotify.com/track/5gObGWiyCUTMdl560Nz46u?si=A3DEoIQfS7GaNqKbMsqM_Q",
        "uri": "spotify:track:5gObGWiyCUTMdl560Nz46u"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/58XGUNsRNu3cVOIOYk5chx"
            },
            "href": "https://api.spotify.com/v1/artists/58XGUNsRNu3cVOIOYk5chx",
            "id": "58XGUNsRNu3cVOIOYk5chx",
            "name": "Ty Segall",
            "type": "artist",
            "uri": "spotify:artist:58XGUNsRNu3cVOIOYk5chx"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3DSA6rDV2HqxmPnjngocEw"
          },
          "href": "https://api.spotify.com/v1/albums/3DSA6rDV2HqxmPnjngocEw",
          "id": "3DSA6rDV2HqxmPnjngocEw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735725b69371cd71bcdc9e5c96",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025725b69371cd71bcdc9e5c96",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515725b69371cd71bcdc9e5c96",
            "width": 64
          }],
          "name": "Fudge Sandwich",
          "release_date": "2018-10-26",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3DSA6rDV2HqxmPnjngocEw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/58XGUNsRNu3cVOIOYk5chx"
          },
          "href": "https://api.spotify.com/v1/artists/58XGUNsRNu3cVOIOYk5chx",
          "id": "58XGUNsRNu3cVOIOYk5chx",
          "name": "Ty Segall",
          "type": "artist",
          "uri": "spotify:artist:58XGUNsRNu3cVOIOYk5chx"
        }],
        "disc_number": 1,
        "duration_ms": 187853,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USA3D1832602"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5gObGWiyCUTMdl560Nz46u"
        },
        "href": "https://api.spotify.com/v1/tracks/5gObGWiyCUTMdl560Nz46u",
        "id": "5gObGWiyCUTMdl560Nz46u",
        "is_local": false,
        "is_playable": true,
        "name": "I'm a Man",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/cb66af89621a5a450b94793e3b68fd86a35884be?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5gObGWiyCUTMdl560Nz46u"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-03T17:08:31Z",
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
        "share_id": "Q17sK1z3QH-_hVyzzaytRA",
        "share_url": "https://open.spotify.com/track/2sNGaLOMBIkyVFPsQqPQdW?si=Q17sK1z3QH-_hVyzzaytRA",
        "uri": "spotify:track:2sNGaLOMBIkyVFPsQqPQdW"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1P6U1dCeHxPui5pIrGmndZ"
            },
            "href": "https://api.spotify.com/v1/artists/1P6U1dCeHxPui5pIrGmndZ",
            "id": "1P6U1dCeHxPui5pIrGmndZ",
            "name": "Air",
            "type": "artist",
            "uri": "spotify:artist:1P6U1dCeHxPui5pIrGmndZ"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0hQOqvZv1nQvPiBjzyn363"
          },
          "href": "https://api.spotify.com/v1/albums/0hQOqvZv1nQvPiBjzyn363",
          "id": "0hQOqvZv1nQvPiBjzyn363",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736400fab74f28e90759ac8815",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026400fab74f28e90759ac8815",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516400fab74f28e90759ac8815",
            "width": 64
          }],
          "name": "Talkie Walkie",
          "release_date": "2004-01-26",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0hQOqvZv1nQvPiBjzyn363"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1P6U1dCeHxPui5pIrGmndZ"
          },
          "href": "https://api.spotify.com/v1/artists/1P6U1dCeHxPui5pIrGmndZ",
          "id": "1P6U1dCeHxPui5pIrGmndZ",
          "name": "Air",
          "type": "artist",
          "uri": "spotify:artist:1P6U1dCeHxPui5pIrGmndZ"
        }],
        "disc_number": 1,
        "duration_ms": 279773,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FRS630300096"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2sNGaLOMBIkyVFPsQqPQdW"
        },
        "href": "https://api.spotify.com/v1/tracks/2sNGaLOMBIkyVFPsQqPQdW",
        "id": "2sNGaLOMBIkyVFPsQqPQdW",
        "is_local": false,
        "is_playable": true,
        "name": "Alpha Beta Gaga",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/f17e6cdf990227535872a21416d7ae28aa846af9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:2sNGaLOMBIkyVFPsQqPQdW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-14T18:07:18Z",
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
        "share_id": "XCc5JphdSha7DIC8p0Vfmg",
        "share_url": "https://open.spotify.com/track/6HXmDLXNP1AVpv1fRObqo3?si=XCc5JphdSha7DIC8p0Vfmg",
        "uri": "spotify:track:6HXmDLXNP1AVpv1fRObqo3"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1I9HNoVK6kOQGVZfulXVnm"
            },
            "href": "https://api.spotify.com/v1/artists/1I9HNoVK6kOQGVZfulXVnm",
            "id": "1I9HNoVK6kOQGVZfulXVnm",
            "name": "TENDER",
            "type": "artist",
            "uri": "spotify:artist:1I9HNoVK6kOQGVZfulXVnm"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5Rlh2buRRtTyJeu3fEK0rE"
          },
          "href": "https://api.spotify.com/v1/albums/5Rlh2buRRtTyJeu3fEK0rE",
          "id": "5Rlh2buRRtTyJeu3fEK0rE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734ad49ccd5cb221745f58a54a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024ad49ccd5cb221745f58a54a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514ad49ccd5cb221745f58a54a",
            "width": 64
          }],
          "name": "Closer Still / Fear of Falling Asleep",
          "release_date": "2018-10-31",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:5Rlh2buRRtTyJeu3fEK0rE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1I9HNoVK6kOQGVZfulXVnm"
          },
          "href": "https://api.spotify.com/v1/artists/1I9HNoVK6kOQGVZfulXVnm",
          "id": "1I9HNoVK6kOQGVZfulXVnm",
          "name": "TENDER",
          "type": "artist",
          "uri": "spotify:artist:1I9HNoVK6kOQGVZfulXVnm"
        }],
        "disc_number": 1,
        "duration_ms": 250548,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USBQU1800172"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6HXmDLXNP1AVpv1fRObqo3"
        },
        "href": "https://api.spotify.com/v1/tracks/6HXmDLXNP1AVpv1fRObqo3",
        "id": "6HXmDLXNP1AVpv1fRObqo3",
        "is_local": false,
        "is_playable": true,
        "name": "Closer Still",
        "popularity": 16,
        "preview_url": "https://p.scdn.co/mp3-preview/21550ba7a819c43aff6267b7dd442c29803b3e75?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6HXmDLXNP1AVpv1fRObqo3"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-03T17:08:42Z",
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
        "share_id": "xY_tB4d7TliS2JkHCd3gpA",
        "share_url": "https://open.spotify.com/track/3ghgwo0BTPm329zGMQRfn7?si=xY_tB4d7TliS2JkHCd3gpA",
        "uri": "spotify:track:3ghgwo0BTPm329zGMQRfn7"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6CWTBjOJK75cTE8Xv8u1kj"
            },
            "href": "https://api.spotify.com/v1/artists/6CWTBjOJK75cTE8Xv8u1kj",
            "id": "6CWTBjOJK75cTE8Xv8u1kj",
            "name": "Feist",
            "type": "artist",
            "uri": "spotify:artist:6CWTBjOJK75cTE8Xv8u1kj"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7bTdGfczXffzzNE9ssJj4Z"
          },
          "href": "https://api.spotify.com/v1/albums/7bTdGfczXffzzNE9ssJj4Z",
          "id": "7bTdGfczXffzzNE9ssJj4Z",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b17d3cdd360973516ade9e6d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b17d3cdd360973516ade9e6d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b17d3cdd360973516ade9e6d",
            "width": 64
          }],
          "name": "The Reminder",
          "release_date": "2007-01-01",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:7bTdGfczXffzzNE9ssJj4Z"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6CWTBjOJK75cTE8Xv8u1kj"
          },
          "href": "https://api.spotify.com/v1/artists/6CWTBjOJK75cTE8Xv8u1kj",
          "id": "6CWTBjOJK75cTE8Xv8u1kj",
          "name": "Feist",
          "type": "artist",
          "uri": "spotify:artist:6CWTBjOJK75cTE8Xv8u1kj"
        }],
        "disc_number": 1,
        "duration_ms": 219480,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FRUM70600208"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3ghgwo0BTPm329zGMQRfn7"
        },
        "href": "https://api.spotify.com/v1/tracks/3ghgwo0BTPm329zGMQRfn7",
        "id": "3ghgwo0BTPm329zGMQRfn7",
        "is_local": false,
        "is_playable": true,
        "name": "I Feel It All",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/1ec0f27a26f9c8af4807ca576804c989ccd28647?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3ghgwo0BTPm329zGMQRfn7"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-03T17:08:57Z",
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
        "share_id": "rG7hWy1aRC2H2fiY8wFdeg",
        "share_url": "https://open.spotify.com/track/106HaWxxfJIMQmADCIJkyn?si=rG7hWy1aRC2H2fiY8wFdeg",
        "uri": "spotify:track:106HaWxxfJIMQmADCIJkyn"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nn9uUq4K1vStqxe8t1CD4"
            },
            "href": "https://api.spotify.com/v1/artists/4nn9uUq4K1vStqxe8t1CD4",
            "id": "4nn9uUq4K1vStqxe8t1CD4",
            "name": "Corridor",
            "type": "artist",
            "uri": "spotify:artist:4nn9uUq4K1vStqxe8t1CD4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2d9sRDbb3g46M3pufQwsiK"
          },
          "href": "https://api.spotify.com/v1/albums/2d9sRDbb3g46M3pufQwsiK",
          "id": "2d9sRDbb3g46M3pufQwsiK",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273682ad66fa4ccc4aaa00e181c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02682ad66fa4ccc4aaa00e181c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851682ad66fa4ccc4aaa00e181c",
            "width": 64
          }],
          "name": "Supermercado",
          "release_date": "2017-05-26",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2d9sRDbb3g46M3pufQwsiK"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4nn9uUq4K1vStqxe8t1CD4"
          },
          "href": "https://api.spotify.com/v1/artists/4nn9uUq4K1vStqxe8t1CD4",
          "id": "4nn9uUq4K1vStqxe8t1CD4",
          "name": "Corridor",
          "type": "artist",
          "uri": "spotify:artist:4nn9uUq4K1vStqxe8t1CD4"
        }],
        "disc_number": 1,
        "duration_ms": 160820,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAUD81700011"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/106HaWxxfJIMQmADCIJkyn"
        },
        "href": "https://api.spotify.com/v1/tracks/106HaWxxfJIMQmADCIJkyn",
        "id": "106HaWxxfJIMQmADCIJkyn",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3e7aTbuPWO5SMIqM4DcjrJ"
          },
          "href": "https://api.spotify.com/v1/tracks/3e7aTbuPWO5SMIqM4DcjrJ",
          "id": "3e7aTbuPWO5SMIqM4DcjrJ",
          "type": "track",
          "uri": "spotify:track:3e7aTbuPWO5SMIqM4DcjrJ"
        },
        "name": "L'histoire populaire de Jonathan Cadeau",
        "popularity": 13,
        "preview_url": "https://p.scdn.co/mp3-preview/402f0cef14310bcd4b4a741e946bc2e2367e2e81?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:106HaWxxfJIMQmADCIJkyn"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-11T20:23:35Z",
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
        "share_id": "QfN4OMRSSlGL5dTtbCQu6w",
        "share_url": "https://open.spotify.com/track/1zDKbCCIrsYJLxzwxZvrTo?si=QfN4OMRSSlGL5dTtbCQu6w",
        "uri": "spotify:track:1zDKbCCIrsYJLxzwxZvrTo"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7lmde7T1WJPFwv1eR6melP"
            },
            "href": "https://api.spotify.com/v1/artists/7lmde7T1WJPFwv1eR6melP",
            "id": "7lmde7T1WJPFwv1eR6melP",
            "name": "Superchunk",
            "type": "artist",
            "uri": "spotify:artist:7lmde7T1WJPFwv1eR6melP"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5VHuyZga0JSRlJrVusWfR7"
          },
          "href": "https://api.spotify.com/v1/albums/5VHuyZga0JSRlJrVusWfR7",
          "id": "5VHuyZga0JSRlJrVusWfR7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273fec0b77cc8d63eb46789b6d4",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02fec0b77cc8d63eb46789b6d4",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851fec0b77cc8d63eb46789b6d4",
            "width": 64
          }],
          "name": "What a Time to Be Alive",
          "release_date": "2018-02-16",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:5VHuyZga0JSRlJrVusWfR7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7lmde7T1WJPFwv1eR6melP"
          },
          "href": "https://api.spotify.com/v1/artists/7lmde7T1WJPFwv1eR6melP",
          "id": "7lmde7T1WJPFwv1eR6melP",
          "name": "Superchunk",
          "type": "artist",
          "uri": "spotify:artist:7lmde7T1WJPFwv1eR6melP"
        }],
        "disc_number": 1,
        "duration_ms": 225468,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMRG1862001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1zDKbCCIrsYJLxzwxZvrTo"
        },
        "href": "https://api.spotify.com/v1/tracks/1zDKbCCIrsYJLxzwxZvrTo",
        "id": "1zDKbCCIrsYJLxzwxZvrTo",
        "is_local": false,
        "is_playable": true,
        "name": "What a Time to Be Alive",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/a511700df932db143b9be72fea7392c7dbbc2c0f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1zDKbCCIrsYJLxzwxZvrTo"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-01-03T17:10:01Z",
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
        "share_id": "3-pzveSdSEeLgAD8fjJVjA",
        "share_url": "https://open.spotify.com/track/4YvOkz9IrldHkWiDZremSr?si=3-pzveSdSEeLgAD8fjJVjA",
        "uri": "spotify:track:4YvOkz9IrldHkWiDZremSr"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2dPIBvg7mU59dCTGjhPylV"
            },
            "href": "https://api.spotify.com/v1/artists/2dPIBvg7mU59dCTGjhPylV",
            "id": "2dPIBvg7mU59dCTGjhPylV",
            "name": "Foxwarren",
            "type": "artist",
            "uri": "spotify:artist:2dPIBvg7mU59dCTGjhPylV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/27NP9XgsqFi9sfV9RZaqOa"
          },
          "href": "https://api.spotify.com/v1/albums/27NP9XgsqFi9sfV9RZaqOa",
          "id": "27NP9XgsqFi9sfV9RZaqOa",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c567bf68aaa980e6d238a88c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c567bf68aaa980e6d238a88c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c567bf68aaa980e6d238a88c",
            "width": 64
          }],
          "name": "Foxwarren",
          "release_date": "2018-11-30",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:27NP9XgsqFi9sfV9RZaqOa"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2dPIBvg7mU59dCTGjhPylV"
          },
          "href": "https://api.spotify.com/v1/artists/2dPIBvg7mU59dCTGjhPylV",
          "id": "2dPIBvg7mU59dCTGjhPylV",
          "name": "Foxwarren",
          "type": "artist",
          "uri": "spotify:artist:2dPIBvg7mU59dCTGjhPylV"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5mFKYdmiYwNJTDtSzgFyQx"
          },
          "href": "https://api.spotify.com/v1/artists/5mFKYdmiYwNJTDtSzgFyQx",
          "id": "5mFKYdmiYwNJTDtSzgFyQx",
          "name": "Andy Shauf",
          "type": "artist",
          "uri": "spotify:artist:5mFKYdmiYwNJTDtSzgFyQx"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6coAF2s4RTHN78t4UO50MM"
          },
          "href": "https://api.spotify.com/v1/artists/6coAF2s4RTHN78t4UO50MM",
          "id": "6coAF2s4RTHN78t4UO50MM",
          "name": "D. A. Kissick",
          "type": "artist",
          "uri": "spotify:artist:6coAF2s4RTHN78t4UO50MM"
        }],
        "disc_number": 1,
        "duration_ms": 260090,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEP41841008"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4YvOkz9IrldHkWiDZremSr"
        },
        "href": "https://api.spotify.com/v1/tracks/4YvOkz9IrldHkWiDZremSr",
        "id": "4YvOkz9IrldHkWiDZremSr",
        "is_local": false,
        "is_playable": true,
        "name": "Sunset Canyon",
        "popularity": 54,
        "preview_url": "https://p.scdn.co/mp3-preview/b6a25d733ade15061c488dda7e3e207112dc32c7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:4YvOkz9IrldHkWiDZremSr"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 17
  },
  "type": "playlist",
  "uri": "spotify:playlist:3uujRWNtbmH5tfkCXYJgcV"
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+6Bi");


/***/ })

/******/ });