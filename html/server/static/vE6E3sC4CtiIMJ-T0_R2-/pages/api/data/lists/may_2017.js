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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hpBs");


/***/ }),

/***/ "hpBs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/532omIrUJr4iNzwLcVAFz4"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/532omIrUJr4iNzwLcVAFz4?type=track,episode",
  "id": "532omIrUJr4iNzwLcVAFz4",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731840abe94a048671b4ddc667ab67616d0000b2731958a7ceff316ea14d306a51ab67616d0000b27322f44d558338aa1e1e86391bab67616d0000b27386c0692e9fe6128a9ef6a7e8",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731840abe94a048671b4ddc667ab67616d0000b2731958a7ceff316ea14d306a51ab67616d0000b27322f44d558338aa1e1e86391bab67616d0000b27386c0692e9fe6128a9ef6a7e8",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731840abe94a048671b4ddc667ab67616d0000b2731958a7ceff316ea14d306a51ab67616d0000b27322f44d558338aa1e1e86391bab67616d0000b27386c0692e9fe6128a9ef6a7e8",
    "width": 60
  }],
  "name": "May 2017",
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
    "share_id": "CGXtzPJkQ9G3XPaA3gdnPA",
    "share_url": "https://open.spotify.com/playlist/532omIrUJr4iNzwLcVAFz4?si=CGXtzPJkQ9G3XPaA3gdnPA",
    "uri": "spotify:playlist:532omIrUJr4iNzwLcVAFz4"
  },
  "snapshot_id": "NjMsOGExY2E4YTMyNzAxZjkzNDBlYTIyMzRiZjBjZmI0Yjg4NTM4NGQzMg==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/532omIrUJr4iNzwLcVAFz4/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2017-04-21T17:44:54Z",
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
        "share_id": "aMFguS0pQ7WjuU9JIWutoA",
        "share_url": "https://open.spotify.com/track/7qk0JiIuL72IDeADaj1nSY?si=aMFguS0pQ7WjuU9JIWutoA",
        "uri": "spotify:track:7qk0JiIuL72IDeADaj1nSY"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7mZgBMpvaBziYQfc9TbJH5"
            },
            "href": "https://api.spotify.com/v1/artists/7mZgBMpvaBziYQfc9TbJH5",
            "id": "7mZgBMpvaBziYQfc9TbJH5",
            "name": "Benjamin Booker",
            "type": "artist",
            "uri": "spotify:artist:7mZgBMpvaBziYQfc9TbJH5"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3jkf9bFHemgq4Gt46DWBnY"
          },
          "href": "https://api.spotify.com/v1/albums/3jkf9bFHemgq4Gt46DWBnY",
          "id": "3jkf9bFHemgq4Gt46DWBnY",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731958a7ceff316ea14d306a51",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021958a7ceff316ea14d306a51",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511958a7ceff316ea14d306a51",
            "width": 64
          }],
          "name": "Witness",
          "release_date": "2017-06-02",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:3jkf9bFHemgq4Gt46DWBnY"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7mZgBMpvaBziYQfc9TbJH5"
          },
          "href": "https://api.spotify.com/v1/artists/7mZgBMpvaBziYQfc9TbJH5",
          "id": "7mZgBMpvaBziYQfc9TbJH5",
          "name": "Benjamin Booker",
          "type": "artist",
          "uri": "spotify:artist:7mZgBMpvaBziYQfc9TbJH5"
        }],
        "disc_number": 1,
        "duration_ms": 177005,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USATO1700022"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7qk0JiIuL72IDeADaj1nSY"
        },
        "href": "https://api.spotify.com/v1/tracks/7qk0JiIuL72IDeADaj1nSY",
        "id": "7qk0JiIuL72IDeADaj1nSY",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1LdPEMcaQ2YV3qS53CbOVN"
          },
          "href": "https://api.spotify.com/v1/tracks/1LdPEMcaQ2YV3qS53CbOVN",
          "id": "1LdPEMcaQ2YV3qS53CbOVN",
          "type": "track",
          "uri": "spotify:track:1LdPEMcaQ2YV3qS53CbOVN"
        },
        "name": "Witness",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/c4c02df2662ada0e667f365e648bcf594eb8fbe6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:7qk0JiIuL72IDeADaj1nSY"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-21T17:38:58Z",
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
        "share_id": "r66e3TPEQpO9c2QqFueosg",
        "share_url": "https://open.spotify.com/track/3Z7zpPpjEacqPMcB2DGQRu?si=r66e3TPEQpO9c2QqFueosg",
        "uri": "spotify:track:3Z7zpPpjEacqPMcB2DGQRu"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/17czHqI0Lwj2V3htvm8afG"
            },
            "href": "https://api.spotify.com/v1/artists/17czHqI0Lwj2V3htvm8afG",
            "id": "17czHqI0Lwj2V3htvm8afG",
            "name": "Gavin Turek",
            "type": "artist",
            "uri": "spotify:artist:17czHqI0Lwj2V3htvm8afG"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/635tIaLbz7r79C4u8aaFdK"
          },
          "href": "https://api.spotify.com/v1/albums/635tIaLbz7r79C4u8aaFdK",
          "id": "635tIaLbz7r79C4u8aaFdK",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27322f44d558338aa1e1e86391b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0222f44d558338aa1e1e86391b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485122f44d558338aa1e1e86391b",
            "width": 64
          }],
          "name": "Good Look for You",
          "release_date": "2016-11-18",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:635tIaLbz7r79C4u8aaFdK"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/17czHqI0Lwj2V3htvm8afG"
          },
          "href": "https://api.spotify.com/v1/artists/17czHqI0Lwj2V3htvm8afG",
          "id": "17czHqI0Lwj2V3htvm8afG",
          "name": "Gavin Turek",
          "type": "artist",
          "uri": "spotify:artist:17czHqI0Lwj2V3htvm8afG"
        }],
        "disc_number": 1,
        "duration_ms": 221341,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FR96X1676614"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3Z7zpPpjEacqPMcB2DGQRu"
        },
        "href": "https://api.spotify.com/v1/tracks/3Z7zpPpjEacqPMcB2DGQRu",
        "id": "3Z7zpPpjEacqPMcB2DGQRu",
        "is_local": false,
        "is_playable": true,
        "name": "Good Look for You",
        "popularity": 22,
        "preview_url": "https://p.scdn.co/mp3-preview/440de5f9926dc1a122882af7422db3e7988c94d9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3Z7zpPpjEacqPMcB2DGQRu"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-21T17:44:36Z",
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
        "share_id": "VXyqcX0-S-eJIzScd9xVGw",
        "share_url": "https://open.spotify.com/track/7AXxufpUTufkNE8uXL3ZRr?si=VXyqcX0-S-eJIzScd9xVGw",
        "uri": "spotify:track:7AXxufpUTufkNE8uXL3ZRr"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl"
            },
            "href": "https://api.spotify.com/v1/artists/536BYVgOnRky0xjsPT96zl",
            "id": "536BYVgOnRky0xjsPT96zl",
            "name": "Two Door Cinema Club",
            "type": "artist",
            "uri": "spotify:artist:536BYVgOnRky0xjsPT96zl"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2u9Ey2oXoSagjN7f9WK2lw"
          },
          "href": "https://api.spotify.com/v1/albums/2u9Ey2oXoSagjN7f9WK2lw",
          "id": "2u9Ey2oXoSagjN7f9WK2lw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731840abe94a048671b4ddc667",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021840abe94a048671b4ddc667",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511840abe94a048671b4ddc667",
            "width": 64
          }],
          "name": "Gameshow",
          "release_date": "2016-10-14",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2u9Ey2oXoSagjN7f9WK2lw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl"
          },
          "href": "https://api.spotify.com/v1/artists/536BYVgOnRky0xjsPT96zl",
          "id": "536BYVgOnRky0xjsPT96zl",
          "name": "Two Door Cinema Club",
          "type": "artist",
          "uri": "spotify:artist:536BYVgOnRky0xjsPT96zl"
        }],
        "disc_number": 1,
        "duration_ms": 297786,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE1600972"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7AXxufpUTufkNE8uXL3ZRr"
        },
        "href": "https://api.spotify.com/v1/tracks/7AXxufpUTufkNE8uXL3ZRr",
        "id": "7AXxufpUTufkNE8uXL3ZRr",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3S0HgYaRFtzkteQ1OsIDhg"
          },
          "href": "https://api.spotify.com/v1/tracks/3S0HgYaRFtzkteQ1OsIDhg",
          "id": "3S0HgYaRFtzkteQ1OsIDhg",
          "type": "track",
          "uri": "spotify:track:3S0HgYaRFtzkteQ1OsIDhg"
        },
        "name": "Bad Decisions",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/93cf695126fda9249322b3ef086bc050f3b8333a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7AXxufpUTufkNE8uXL3ZRr"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-03T17:54:30Z",
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
        "share_id": "dQClo_YrR8azt1FK8R4_JQ",
        "share_url": "https://open.spotify.com/track/6dBKhVgg0BzXvGv4r141G8?si=dQClo_YrR8azt1FK8R4_JQ",
        "uri": "spotify:track:6dBKhVgg0BzXvGv4r141G8"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1mmehjf7eHA10uHMisZGJg"
            },
            "href": "https://api.spotify.com/v1/artists/1mmehjf7eHA10uHMisZGJg",
            "id": "1mmehjf7eHA10uHMisZGJg",
            "name": "!!!",
            "type": "artist",
            "uri": "spotify:artist:1mmehjf7eHA10uHMisZGJg"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7Hti2fAXa04TXh3vZQJBI2"
          },
          "href": "https://api.spotify.com/v1/albums/7Hti2fAXa04TXh3vZQJBI2",
          "id": "7Hti2fAXa04TXh3vZQJBI2",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27386c0692e9fe6128a9ef6a7e8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0286c0692e9fe6128a9ef6a7e8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485186c0692e9fe6128a9ef6a7e8",
            "width": 64
          }],
          "name": "Dancing Is The Best Revenge",
          "release_date": "2017-05-04",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7Hti2fAXa04TXh3vZQJBI2"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1mmehjf7eHA10uHMisZGJg"
          },
          "href": "https://api.spotify.com/v1/artists/1mmehjf7eHA10uHMisZGJg",
          "id": "1mmehjf7eHA10uHMisZGJg",
          "name": "!!!",
          "type": "artist",
          "uri": "spotify:artist:1mmehjf7eHA10uHMisZGJg"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2rr4WqfAdv4xEi5YyXdPQb"
          },
          "href": "https://api.spotify.com/v1/artists/2rr4WqfAdv4xEi5YyXdPQb",
          "id": "2rr4WqfAdv4xEi5YyXdPQb",
          "name": "Lea Lea",
          "type": "artist",
          "uri": "spotify:artist:2rr4WqfAdv4xEi5YyXdPQb"
        }],
        "disc_number": 1,
        "duration_ms": 281557,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBPW1700014"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6dBKhVgg0BzXvGv4r141G8"
        },
        "href": "https://api.spotify.com/v1/tracks/6dBKhVgg0BzXvGv4r141G8",
        "id": "6dBKhVgg0BzXvGv4r141G8",
        "is_local": false,
        "is_playable": true,
        "name": "Dancing Is The Best Revenge",
        "popularity": 17,
        "preview_url": "https://p.scdn.co/mp3-preview/3dd3bde1d9515ae14993474c24e0d654111c1865?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6dBKhVgg0BzXvGv4r141G8"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-04T00:09:29Z",
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
        "share_id": "wN9Qfk5wSN2h3_h8aFFMng",
        "share_url": "https://open.spotify.com/track/1URrxnBSnx5AVgF1qrKXMU?si=wN9Qfk5wSN2h3_h8aFFMng",
        "uri": "spotify:track:1URrxnBSnx5AVgF1qrKXMU"
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
            "spotify": "https://open.spotify.com/album/0UPpOFTnmWZZzMFpczRUwV"
          },
          "href": "https://api.spotify.com/v1/albums/0UPpOFTnmWZZzMFpczRUwV",
          "id": "0UPpOFTnmWZZzMFpczRUwV",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737fc65d2a5c929cbaf694d649",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027fc65d2a5c929cbaf694d649",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517fc65d2a5c929cbaf694d649",
            "width": 64
          }],
          "name": "Love Synthesizers",
          "release_date": "2017-04-30",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:0UPpOFTnmWZZzMFpczRUwV"
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
        "duration_ms": 205161,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMPKX1710115"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1URrxnBSnx5AVgF1qrKXMU"
        },
        "href": "https://api.spotify.com/v1/tracks/1URrxnBSnx5AVgF1qrKXMU",
        "id": "1URrxnBSnx5AVgF1qrKXMU",
        "is_local": false,
        "is_playable": true,
        "name": "Now It's Time to Begin",
        "popularity": 2,
        "preview_url": "https://p.scdn.co/mp3-preview/eaf13710bff155fbacc3bcbaf46fda6faea71a31?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:1URrxnBSnx5AVgF1qrKXMU"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-21T17:42:06Z",
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
        "share_id": "aJJgOH9NRu-OqwdvQ20_qg",
        "share_url": "https://open.spotify.com/track/3REzEumDuXBpQH45WEHAr6?si=aJJgOH9NRu-OqwdvQ20_qg",
        "uri": "spotify:track:3REzEumDuXBpQH45WEHAr6"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/586uxXMyD5ObPuzjtrzO1Q"
            },
            "href": "https://api.spotify.com/v1/artists/586uxXMyD5ObPuzjtrzO1Q",
            "id": "586uxXMyD5ObPuzjtrzO1Q",
            "name": "Sofi Tukker",
            "type": "artist",
            "uri": "spotify:artist:586uxXMyD5ObPuzjtrzO1Q"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/37Tazx3nMYc8ajIdsFgW7G"
          },
          "href": "https://api.spotify.com/v1/albums/37Tazx3nMYc8ajIdsFgW7G",
          "id": "37Tazx3nMYc8ajIdsFgW7G",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b1179c0608e0529d705cf3e2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b1179c0608e0529d705cf3e2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b1179c0608e0529d705cf3e2",
            "width": 64
          }],
          "name": "Soft Animals",
          "release_date": "2016-07-08",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:37Tazx3nMYc8ajIdsFgW7G"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/586uxXMyD5ObPuzjtrzO1Q"
          },
          "href": "https://api.spotify.com/v1/artists/586uxXMyD5ObPuzjtrzO1Q",
          "id": "586uxXMyD5ObPuzjtrzO1Q",
          "name": "Sofi Tukker",
          "type": "artist",
          "uri": "spotify:artist:586uxXMyD5ObPuzjtrzO1Q"
        }],
        "disc_number": 1,
        "duration_ms": 299294,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACG1507830"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3REzEumDuXBpQH45WEHAr6"
        },
        "href": "https://api.spotify.com/v1/tracks/3REzEumDuXBpQH45WEHAr6",
        "id": "3REzEumDuXBpQH45WEHAr6",
        "is_local": false,
        "is_playable": true,
        "name": "Drinkee",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/f23e5eafd191437c8d9462403f3d8f32c9826f6b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3REzEumDuXBpQH45WEHAr6"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-13T03:55:26Z",
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
        "share_id": "QwJTTvTDTMqjEoPY4t5cGg",
        "share_url": "https://open.spotify.com/track/4B1BnoMpRbe0ps4Bs8BLk8?si=QwJTTvTDTMqjEoPY4t5cGg",
        "uri": "spotify:track:4B1BnoMpRbe0ps4Bs8BLk8"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5CE2IfdYZEQGIDsfiRm8SI"
            },
            "href": "https://api.spotify.com/v1/artists/5CE2IfdYZEQGIDsfiRm8SI",
            "id": "5CE2IfdYZEQGIDsfiRm8SI",
            "name": "DJ Shadow",
            "type": "artist",
            "uri": "spotify:artist:5CE2IfdYZEQGIDsfiRm8SI"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6zzaAtQTf75DpyaaoA3LN5"
          },
          "href": "https://api.spotify.com/v1/albums/6zzaAtQTf75DpyaaoA3LN5",
          "id": "6zzaAtQTf75DpyaaoA3LN5",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27393db626898446ae8564e1536",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0293db626898446ae8564e1536",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485193db626898446ae8564e1536",
            "width": 64
          }],
          "name": "The Mountain Has Fallen",
          "release_date": "2017-07-07",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:6zzaAtQTf75DpyaaoA3LN5"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5CE2IfdYZEQGIDsfiRm8SI"
          },
          "href": "https://api.spotify.com/v1/artists/5CE2IfdYZEQGIDsfiRm8SI",
          "id": "5CE2IfdYZEQGIDsfiRm8SI",
          "name": "DJ Shadow",
          "type": "artist",
          "uri": "spotify:artist:5CE2IfdYZEQGIDsfiRm8SI"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/20qISvAhX20dpIbOOzGK3q"
          },
          "href": "https://api.spotify.com/v1/artists/20qISvAhX20dpIbOOzGK3q",
          "id": "20qISvAhX20dpIbOOzGK3q",
          "name": "Nas",
          "type": "artist",
          "uri": "spotify:artist:20qISvAhX20dpIbOOzGK3q"
        }],
        "disc_number": 1,
        "duration_ms": 205000,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "QM8RL1400470"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4B1BnoMpRbe0ps4Bs8BLk8"
        },
        "href": "https://api.spotify.com/v1/tracks/4B1BnoMpRbe0ps4Bs8BLk8",
        "id": "4B1BnoMpRbe0ps4Bs8BLk8",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6pWEpHYjx4cNDJf46g0plZ"
          },
          "href": "https://api.spotify.com/v1/tracks/6pWEpHYjx4cNDJf46g0plZ",
          "id": "6pWEpHYjx4cNDJf46g0plZ",
          "type": "track",
          "uri": "spotify:track:6pWEpHYjx4cNDJf46g0plZ"
        },
        "name": "Systematic",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/3c652cab1f6c4b3dda3b3d732a4c63774877b11c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4B1BnoMpRbe0ps4Bs8BLk8"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-15T23:36:54Z",
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
        "share_id": "2LwbZwy-QMKxnJPE-ZkNVA",
        "share_url": "https://open.spotify.com/track/55Mdgaa4Cp54Pbwg2emKJ2?si=2LwbZwy-QMKxnJPE-ZkNVA",
        "uri": "spotify:track:55Mdgaa4Cp54Pbwg2emKJ2"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1D0ulc9Z5jJV7Gtuw7t33U"
            },
            "href": "https://api.spotify.com/v1/artists/1D0ulc9Z5jJV7Gtuw7t33U",
            "id": "1D0ulc9Z5jJV7Gtuw7t33U",
            "name": "Old Man Saxon",
            "type": "artist",
            "uri": "spotify:artist:1D0ulc9Z5jJV7Gtuw7t33U"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7wvzwMxihmIeOZTXsFot8K"
          },
          "href": "https://api.spotify.com/v1/albums/7wvzwMxihmIeOZTXsFot8K",
          "id": "7wvzwMxihmIeOZTXsFot8K",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b1ab63e4532b31d877b8d676",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b1ab63e4532b31d877b8d676",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b1ab63e4532b31d877b8d676",
            "width": 64
          }],
          "name": "On Point",
          "release_date": "2013-07-24",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7wvzwMxihmIeOZTXsFot8K"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1D0ulc9Z5jJV7Gtuw7t33U"
          },
          "href": "https://api.spotify.com/v1/artists/1D0ulc9Z5jJV7Gtuw7t33U",
          "id": "1D0ulc9Z5jJV7Gtuw7t33U",
          "name": "Old Man Saxon",
          "type": "artist",
          "uri": "spotify:artist:1D0ulc9Z5jJV7Gtuw7t33U"
        }],
        "disc_number": 1,
        "duration_ms": 202079,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "ushm81316915"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/55Mdgaa4Cp54Pbwg2emKJ2"
        },
        "href": "https://api.spotify.com/v1/tracks/55Mdgaa4Cp54Pbwg2emKJ2",
        "id": "55Mdgaa4Cp54Pbwg2emKJ2",
        "is_local": false,
        "is_playable": true,
        "name": "On Point",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/cfb895aa1ac81467249b100e804c428674c1c919?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:55Mdgaa4Cp54Pbwg2emKJ2"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-21T17:40:32Z",
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
        "share_id": "Ft_CjLW8Ra6ObE1OWi9Dww",
        "share_url": "https://open.spotify.com/track/43XJBifrtbhuCA3JfN3BRf?si=Ft_CjLW8Ra6ObE1OWi9Dww",
        "uri": "spotify:track:43XJBifrtbhuCA3JfN3BRf"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4c2ighP1wj8E5dVGJDCOiB"
            },
            "href": "https://api.spotify.com/v1/artists/4c2ighP1wj8E5dVGJDCOiB",
            "id": "4c2ighP1wj8E5dVGJDCOiB",
            "name": "Kari Faux",
            "type": "artist",
            "uri": "spotify:artist:4c2ighP1wj8E5dVGJDCOiB"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4IABYaauP9ZVkwrOvZ8k8N"
          },
          "href": "https://api.spotify.com/v1/albums/4IABYaauP9ZVkwrOvZ8k8N",
          "id": "4IABYaauP9ZVkwrOvZ8k8N",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738f40f347dd375e048cbc3c72",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028f40f347dd375e048cbc3c72",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518f40f347dd375e048cbc3c72",
            "width": 64
          }],
          "name": "Lost En Los Angeles",
          "release_date": "2016-04-08",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4IABYaauP9ZVkwrOvZ8k8N"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4c2ighP1wj8E5dVGJDCOiB"
          },
          "href": "https://api.spotify.com/v1/artists/4c2ighP1wj8E5dVGJDCOiB",
          "id": "4c2ighP1wj8E5dVGJDCOiB",
          "name": "Kari Faux",
          "type": "artist",
          "uri": "spotify:artist:4c2ighP1wj8E5dVGJDCOiB"
        }],
        "disc_number": 1,
        "duration_ms": 186666,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US39N1691202"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/43XJBifrtbhuCA3JfN3BRf"
        },
        "href": "https://api.spotify.com/v1/tracks/43XJBifrtbhuCA3JfN3BRf",
        "id": "43XJBifrtbhuCA3JfN3BRf",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1vq530tl9TszyHB3S5CMDU"
          },
          "href": "https://api.spotify.com/v1/tracks/1vq530tl9TszyHB3S5CMDU",
          "id": "1vq530tl9TszyHB3S5CMDU",
          "type": "track",
          "uri": "spotify:track:1vq530tl9TszyHB3S5CMDU"
        },
        "name": "Lost En Los Angeles",
        "popularity": 22,
        "preview_url": "https://p.scdn.co/mp3-preview/d2f382cd9637738e2e6fb7c548281b7e34638c1f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:43XJBifrtbhuCA3JfN3BRf"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-13T03:50:34Z",
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
        "share_id": "Vyxm65EESWCok1ivDIxHgA",
        "share_url": "https://open.spotify.com/track/59NksqJvS6shLtpo2Ky7b1?si=Vyxm65EESWCok1ivDIxHgA",
        "uri": "spotify:track:59NksqJvS6shLtpo2Ky7b1"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ZhjJOJXXwnPS8PrXdmjLw"
            },
            "href": "https://api.spotify.com/v1/artists/6ZhjJOJXXwnPS8PrXdmjLw",
            "id": "6ZhjJOJXXwnPS8PrXdmjLw",
            "name": "UGK",
            "type": "artist",
            "uri": "spotify:artist:6ZhjJOJXXwnPS8PrXdmjLw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6Q7TCZ31DUdPr4wOYi8lPG"
          },
          "href": "https://api.spotify.com/v1/albums/6Q7TCZ31DUdPr4wOYi8lPG",
          "id": "6Q7TCZ31DUdPr4wOYi8lPG",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f30ead1f890e9d9b38bff46d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f30ead1f890e9d9b38bff46d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f30ead1f890e9d9b38bff46d",
            "width": 64
          }],
          "name": "Best of UGK",
          "release_date": "2003-06-12",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:6Q7TCZ31DUdPr4wOYi8lPG"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6ZhjJOJXXwnPS8PrXdmjLw"
          },
          "href": "https://api.spotify.com/v1/artists/6ZhjJOJXXwnPS8PrXdmjLw",
          "id": "6ZhjJOJXXwnPS8PrXdmjLw",
          "name": "UGK",
          "type": "artist",
          "uri": "spotify:artist:6ZhjJOJXXwnPS8PrXdmjLw"
        }],
        "disc_number": 1,
        "duration_ms": 303200,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USJI10300102"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/59NksqJvS6shLtpo2Ky7b1"
        },
        "href": "https://api.spotify.com/v1/tracks/59NksqJvS6shLtpo2Ky7b1",
        "id": "59NksqJvS6shLtpo2Ky7b1",
        "is_local": false,
        "is_playable": true,
        "name": "Pocket Full of Stones",
        "popularity": 27,
        "preview_url": "https://p.scdn.co/mp3-preview/27a86b176065bb407d45d34d50a0603d0d70d686?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:59NksqJvS6shLtpo2Ky7b1"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-04-21T22:15:11Z",
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
        "share_id": "rM0fiJxgR4O6ffMv-aOgYQ",
        "share_url": "https://open.spotify.com/track/6myCSm2QEXMrgtUxVN313f?si=rM0fiJxgR4O6ffMv-aOgYQ",
        "uri": "spotify:track:6myCSm2QEXMrgtUxVN313f"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5fpQ5Qt2BKgoVBSMw4Z17Z"
            },
            "href": "https://api.spotify.com/v1/artists/5fpQ5Qt2BKgoVBSMw4Z17Z",
            "id": "5fpQ5Qt2BKgoVBSMw4Z17Z",
            "name": "Songhoy Blues",
            "type": "artist",
            "uri": "spotify:artist:5fpQ5Qt2BKgoVBSMw4Z17Z"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5zpmNObCgAASco8nNJXIkb"
          },
          "href": "https://api.spotify.com/v1/albums/5zpmNObCgAASco8nNJXIkb",
          "id": "5zpmNObCgAASco8nNJXIkb",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734d4255e3fab8ac0daece41e5",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024d4255e3fab8ac0daece41e5",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514d4255e3fab8ac0daece41e5",
            "width": 64
          }],
          "name": "Music In Exile",
          "release_date": "2015-02-24",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:5zpmNObCgAASco8nNJXIkb"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5fpQ5Qt2BKgoVBSMw4Z17Z"
          },
          "href": "https://api.spotify.com/v1/artists/5fpQ5Qt2BKgoVBSMw4Z17Z",
          "id": "5fpQ5Qt2BKgoVBSMw4Z17Z",
          "name": "Songhoy Blues",
          "type": "artist",
          "uri": "spotify:artist:5fpQ5Qt2BKgoVBSMw4Z17Z"
        }],
        "disc_number": 1,
        "duration_ms": 212306,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKZV1425021"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6myCSm2QEXMrgtUxVN313f"
        },
        "href": "https://api.spotify.com/v1/tracks/6myCSm2QEXMrgtUxVN313f",
        "id": "6myCSm2QEXMrgtUxVN313f",
        "is_local": false,
        "is_playable": true,
        "name": "Soubour",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/1a3c25f2b9b4298eeb19b2d15c935a793c54d352?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6myCSm2QEXMrgtUxVN313f"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-04T00:22:33Z",
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
        "share_id": "YhalcQSJT-K7pMHmVymJkA",
        "share_url": "https://open.spotify.com/track/5QHgrEGREKCvH9W8BgEpmS?si=YhalcQSJT-K7pMHmVymJkA",
        "uri": "spotify:track:5QHgrEGREKCvH9W8BgEpmS"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ear0DN4B8mHwITDtmHMe0"
            },
            "href": "https://api.spotify.com/v1/artists/6ear0DN4B8mHwITDtmHMe0",
            "id": "6ear0DN4B8mHwITDtmHMe0",
            "name": "Young Rival",
            "type": "artist",
            "uri": "spotify:artist:6ear0DN4B8mHwITDtmHMe0"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3ajiLr5t50Sa6faCr6VwDW"
          },
          "href": "https://api.spotify.com/v1/albums/3ajiLr5t50Sa6faCr6VwDW",
          "id": "3ajiLr5t50Sa6faCr6VwDW",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732991a56d9161fcb120716ebf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022991a56d9161fcb120716ebf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512991a56d9161fcb120716ebf",
            "width": 64
          }],
          "name": "Interior Light",
          "release_date": "2015-10-16",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3ajiLr5t50Sa6faCr6VwDW"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6ear0DN4B8mHwITDtmHMe0"
          },
          "href": "https://api.spotify.com/v1/artists/6ear0DN4B8mHwITDtmHMe0",
          "id": "6ear0DN4B8mHwITDtmHMe0",
          "name": "Young Rival",
          "type": "artist",
          "uri": "spotify:artist:6ear0DN4B8mHwITDtmHMe0"
        }],
        "disc_number": 1,
        "duration_ms": 200104,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAP431501202"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5QHgrEGREKCvH9W8BgEpmS"
        },
        "href": "https://api.spotify.com/v1/tracks/5QHgrEGREKCvH9W8BgEpmS",
        "id": "5QHgrEGREKCvH9W8BgEpmS",
        "is_local": false,
        "is_playable": true,
        "name": "Carry the Weight",
        "popularity": 6,
        "preview_url": "https://p.scdn.co/mp3-preview/727d893d511e021a7dcc1d332d5dcf203d6455df?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5QHgrEGREKCvH9W8BgEpmS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-05T16:29:41Z",
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
        "share_id": "8qN3rAMkQ6a7Tj2s2oBWEQ",
        "share_url": "https://open.spotify.com/track/7Gb6xu4ptMWvUx78lhwpZC?si=8qN3rAMkQ6a7Tj2s2oBWEQ",
        "uri": "spotify:track:7Gb6xu4ptMWvUx78lhwpZC"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7y8lzaGqtadGmtAtg2SGv4"
            },
            "href": "https://api.spotify.com/v1/artists/7y8lzaGqtadGmtAtg2SGv4",
            "id": "7y8lzaGqtadGmtAtg2SGv4",
            "name": "Beth Ditto",
            "type": "artist",
            "uri": "spotify:artist:7y8lzaGqtadGmtAtg2SGv4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2PjJXeTOqUHHAfJ4J65E49"
          },
          "href": "https://api.spotify.com/v1/albums/2PjJXeTOqUHHAfJ4J65E49",
          "id": "2PjJXeTOqUHHAfJ4J65E49",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a9d9cd2c716cfb7dab6f8467",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a9d9cd2c716cfb7dab6f8467",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a9d9cd2c716cfb7dab6f8467",
            "width": 64
          }],
          "name": "Fake Sugar",
          "release_date": "2017-06-16",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2PjJXeTOqUHHAfJ4J65E49"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7y8lzaGqtadGmtAtg2SGv4"
          },
          "href": "https://api.spotify.com/v1/artists/7y8lzaGqtadGmtAtg2SGv4",
          "id": "7y8lzaGqtadGmtAtg2SGv4",
          "name": "Beth Ditto",
          "type": "artist",
          "uri": "spotify:artist:7y8lzaGqtadGmtAtg2SGv4"
        }],
        "disc_number": 1,
        "duration_ms": 224666,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUG11700279"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7Gb6xu4ptMWvUx78lhwpZC"
        },
        "href": "https://api.spotify.com/v1/tracks/7Gb6xu4ptMWvUx78lhwpZC",
        "id": "7Gb6xu4ptMWvUx78lhwpZC",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7K12ISmP9JlQbauj58bYyR"
          },
          "href": "https://api.spotify.com/v1/tracks/7K12ISmP9JlQbauj58bYyR",
          "id": "7K12ISmP9JlQbauj58bYyR",
          "type": "track",
          "uri": "spotify:track:7K12ISmP9JlQbauj58bYyR"
        },
        "name": "Oo La La",
        "popularity": 28,
        "preview_url": "https://p.scdn.co/mp3-preview/5e84b6b015520423a93789e468997276e80dec67?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7Gb6xu4ptMWvUx78lhwpZC"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-04T00:26:04Z",
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
        "share_id": "QU-6i91vRtKtfv7JJ9xATg",
        "share_url": "https://open.spotify.com/track/5wokn9ia6HcvKiHhwGjOhc?si=QU-6i91vRtKtfv7JJ9xATg",
        "uri": "spotify:track:5wokn9ia6HcvKiHhwGjOhc"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0RdRumkn2UydUjqytNJ2Cp"
            },
            "href": "https://api.spotify.com/v1/artists/0RdRumkn2UydUjqytNJ2Cp",
            "id": "0RdRumkn2UydUjqytNJ2Cp",
            "name": "White Denim",
            "type": "artist",
            "uri": "spotify:artist:0RdRumkn2UydUjqytNJ2Cp"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5R2nwgdeqXb9VD3JpQSkuU"
          },
          "href": "https://api.spotify.com/v1/albums/5R2nwgdeqXb9VD3JpQSkuU",
          "id": "5R2nwgdeqXb9VD3JpQSkuU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730616a2ecc94520adcf610dd0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020616a2ecc94520adcf610dd0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510616a2ecc94520adcf610dd0",
            "width": 64
          }],
          "name": "Stiff",
          "release_date": "2016-03-25",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:5R2nwgdeqXb9VD3JpQSkuU"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0RdRumkn2UydUjqytNJ2Cp"
          },
          "href": "https://api.spotify.com/v1/artists/0RdRumkn2UydUjqytNJ2Cp",
          "id": "0RdRumkn2UydUjqytNJ2Cp",
          "name": "White Denim",
          "type": "artist",
          "uri": "spotify:artist:0RdRumkn2UydUjqytNJ2Cp"
        }],
        "disc_number": 1,
        "duration_ms": 233960,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USCJ81501375"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5wokn9ia6HcvKiHhwGjOhc"
        },
        "href": "https://api.spotify.com/v1/tracks/5wokn9ia6HcvKiHhwGjOhc",
        "id": "5wokn9ia6HcvKiHhwGjOhc",
        "is_local": false,
        "is_playable": true,
        "name": "Ha Ha Ha Ha (Yeah)",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/3fc8ec4a1b513770e6d2c285acb8441f2109a650?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5wokn9ia6HcvKiHhwGjOhc"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-15T23:40:36Z",
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
        "share_id": "jv2rZTyVQMaCtMYMiG90gg",
        "share_url": "https://open.spotify.com/track/00BewNzph6p90JLNda4s7E?si=jv2rZTyVQMaCtMYMiG90gg",
        "uri": "spotify:track:00BewNzph6p90JLNda4s7E"
      },
      "track": {
        "album": {
          "album_type": "single",
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
            "spotify": "https://open.spotify.com/album/5qtyEYZQfJSoDoyjqp7NG5"
          },
          "href": "https://api.spotify.com/v1/albums/5qtyEYZQfJSoDoyjqp7NG5",
          "id": "5qtyEYZQfJSoDoyjqp7NG5",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731b4bbcd38752977b515b9e75",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021b4bbcd38752977b515b9e75",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511b4bbcd38752977b515b9e75",
            "width": 64
          }],
          "name": "Real Thing",
          "release_date": "2016-09-13",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5qtyEYZQfJSoDoyjqp7NG5"
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
        "duration_ms": 256791,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1600360"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/00BewNzph6p90JLNda4s7E"
        },
        "href": "https://api.spotify.com/v1/tracks/00BewNzph6p90JLNda4s7E",
        "id": "00BewNzph6p90JLNda4s7E",
        "is_local": false,
        "is_playable": true,
        "name": "Real Thing",
        "popularity": 30,
        "preview_url": "https://p.scdn.co/mp3-preview/9e91a1141159cee522e1a24b2461326ad0c72564?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:00BewNzph6p90JLNda4s7E"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-15T23:41:08Z",
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
        "share_id": "xxYZKpOFQ_WJIvRCmb1WDA",
        "share_url": "https://open.spotify.com/track/4Lz7zvtWOXJlJ591pSo7Tu?si=xxYZKpOFQ_WJIvRCmb1WDA",
        "uri": "spotify:track:4Lz7zvtWOXJlJ591pSo7Tu"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0yNLKJebCb8Aueb54LYya3"
            },
            "href": "https://api.spotify.com/v1/artists/0yNLKJebCb8Aueb54LYya3",
            "id": "0yNLKJebCb8Aueb54LYya3",
            "name": "New Order",
            "type": "artist",
            "uri": "spotify:artist:0yNLKJebCb8Aueb54LYya3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ODAEaYlqS88SU4ZZu1bI6"
          },
          "href": "https://api.spotify.com/v1/albums/2ODAEaYlqS88SU4ZZu1bI6",
          "id": "2ODAEaYlqS88SU4ZZu1bI6",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f142205e336ec0af3e1a4eb0",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f142205e336ec0af3e1a4eb0",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f142205e336ec0af3e1a4eb0",
            "width": 64
          }],
          "name": "Singles (2016 Remaster)",
          "release_date": "2005-12-06",
          "release_date_precision": "day",
          "total_tracks": 32,
          "type": "album",
          "uri": "spotify:album:2ODAEaYlqS88SU4ZZu1bI6"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0yNLKJebCb8Aueb54LYya3"
          },
          "href": "https://api.spotify.com/v1/artists/0yNLKJebCb8Aueb54LYya3",
          "id": "0yNLKJebCb8Aueb54LYya3",
          "name": "New Order",
          "type": "artist",
          "uri": "spotify:artist:0yNLKJebCb8Aueb54LYya3"
        }],
        "disc_number": 1,
        "duration_ms": 324413,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAAP1500065"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4Lz7zvtWOXJlJ591pSo7Tu"
        },
        "href": "https://api.spotify.com/v1/tracks/4Lz7zvtWOXJlJ591pSo7Tu",
        "id": "4Lz7zvtWOXJlJ591pSo7Tu",
        "is_local": false,
        "is_playable": true,
        "name": "Temptation - 7\" Version; 2015 Remaster",
        "popularity": 51,
        "preview_url": "https://p.scdn.co/mp3-preview/241fc9e561b5fbf29bd695a28b13bfd9b6e931d4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:4Lz7zvtWOXJlJ591pSo7Tu"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-17T23:29:09Z",
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
        "share_id": "NlukVC4lTUio7O41uJDZiQ",
        "share_url": "https://open.spotify.com/track/0vQc8V1CCXfBOL7Mz1Bh49?si=NlukVC4lTUio7O41uJDZiQ",
        "uri": "spotify:track:0vQc8V1CCXfBOL7Mz1Bh49"
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
            "spotify": "https://open.spotify.com/album/5poGKgbvPr7xzMNY4XXZyl"
          },
          "href": "https://api.spotify.com/v1/albums/5poGKgbvPr7xzMNY4XXZyl",
          "id": "5poGKgbvPr7xzMNY4XXZyl",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ea6bdc655c3745a9d4403ab8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ea6bdc655c3745a9d4403ab8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ea6bdc655c3745a9d4403ab8",
            "width": 64
          }],
          "name": "After All",
          "release_date": "2016-05-06",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5poGKgbvPr7xzMNY4XXZyl"
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
        "duration_ms": 252245,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAK471602101"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0vQc8V1CCXfBOL7Mz1Bh49"
        },
        "href": "https://api.spotify.com/v1/tracks/0vQc8V1CCXfBOL7Mz1Bh49",
        "id": "0vQc8V1CCXfBOL7Mz1Bh49",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2DimIJn89H02I2L1e546MJ"
          },
          "href": "https://api.spotify.com/v1/tracks/2DimIJn89H02I2L1e546MJ",
          "id": "2DimIJn89H02I2L1e546MJ",
          "type": "track",
          "uri": "spotify:track:2DimIJn89H02I2L1e546MJ"
        },
        "name": "After All",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/a3b07efe01a3745fcdeed9fb2b3511cd50ff8ea8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0vQc8V1CCXfBOL7Mz1Bh49"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-22T05:31:29Z",
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
        "share_id": "CnVpHdjtTc29zDp3NaxZWg",
        "share_url": "https://open.spotify.com/track/7E4A4C0GkJxBNTbH5GGK9m?si=CnVpHdjtTc29zDp3NaxZWg",
        "uri": "spotify:track:7E4A4C0GkJxBNTbH5GGK9m"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7DEseTqRODmSu3C7jxCHl5"
            },
            "href": "https://api.spotify.com/v1/artists/7DEseTqRODmSu3C7jxCHl5",
            "id": "7DEseTqRODmSu3C7jxCHl5",
            "name": "The Boxer Rebellion",
            "type": "artist",
            "uri": "spotify:artist:7DEseTqRODmSu3C7jxCHl5"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1S2ryIhicWRq8XE1e3rv6j"
          },
          "href": "https://api.spotify.com/v1/albums/1S2ryIhicWRq8XE1e3rv6j",
          "id": "1S2ryIhicWRq8XE1e3rv6j",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273862dd36a20672a903f71bd9e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02862dd36a20672a903f71bd9e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851862dd36a20672a903f71bd9e",
            "width": 64
          }],
          "name": "Big Ideas",
          "release_date": "2016-03-03",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1S2ryIhicWRq8XE1e3rv6j"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7DEseTqRODmSu3C7jxCHl5"
          },
          "href": "https://api.spotify.com/v1/artists/7DEseTqRODmSu3C7jxCHl5",
          "id": "7DEseTqRODmSu3C7jxCHl5",
          "name": "The Boxer Rebellion",
          "type": "artist",
          "uri": "spotify:artist:7DEseTqRODmSu3C7jxCHl5"
        }],
        "disc_number": 1,
        "duration_ms": 266906,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBWWP1501485"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7E4A4C0GkJxBNTbH5GGK9m"
        },
        "href": "https://api.spotify.com/v1/tracks/7E4A4C0GkJxBNTbH5GGK9m",
        "id": "7E4A4C0GkJxBNTbH5GGK9m",
        "is_local": false,
        "is_playable": true,
        "name": "Big Ideas",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/426fa4747af2bffd65ca76f034be34eb75148ab8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7E4A4C0GkJxBNTbH5GGK9m"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-22T06:01:16Z",
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
        "share_id": "xqriiPfiTYSeEVVh2O3Q8g",
        "share_url": "https://open.spotify.com/track/72DTGt2tVAL6ATVhzVjvkk?si=xqriiPfiTYSeEVVh2O3Q8g",
        "uri": "spotify:track:72DTGt2tVAL6ATVhzVjvkk"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6eO95BjZhrWHREMfwC4vVN"
            },
            "href": "https://api.spotify.com/v1/artists/6eO95BjZhrWHREMfwC4vVN",
            "id": "6eO95BjZhrWHREMfwC4vVN",
            "name": "Girls",
            "type": "artist",
            "uri": "spotify:artist:6eO95BjZhrWHREMfwC4vVN"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2d2nOfrJxU2Wpzc1AAZewC"
          },
          "href": "https://api.spotify.com/v1/albums/2d2nOfrJxU2Wpzc1AAZewC",
          "id": "2d2nOfrJxU2Wpzc1AAZewC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273520def888b157ef2da6c4b09",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02520def888b157ef2da6c4b09",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851520def888b157ef2da6c4b09",
            "width": 64
          }],
          "name": "Album",
          "release_date": "2009-09-22",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2d2nOfrJxU2Wpzc1AAZewC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eO95BjZhrWHREMfwC4vVN"
          },
          "href": "https://api.spotify.com/v1/artists/6eO95BjZhrWHREMfwC4vVN",
          "id": "6eO95BjZhrWHREMfwC4vVN",
          "name": "Girls",
          "type": "artist",
          "uri": "spotify:artist:6eO95BjZhrWHREMfwC4vVN"
        }],
        "disc_number": 1,
        "duration_ms": 145293,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "GBYPZ0900101"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/72DTGt2tVAL6ATVhzVjvkk"
        },
        "href": "https://api.spotify.com/v1/tracks/72DTGt2tVAL6ATVhzVjvkk",
        "id": "72DTGt2tVAL6ATVhzVjvkk",
        "is_local": false,
        "is_playable": true,
        "name": "Lust For Life",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/255a8f51af8391152c5c4ac0a4befa83dda30153?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:72DTGt2tVAL6ATVhzVjvkk"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-22T16:30:04Z",
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
        "share_id": "lnqXXDI9Rdy1GQYlYeHwwg",
        "share_url": "https://open.spotify.com/track/5eyTSlaihupr5Evo1pigNw?si=lnqXXDI9Rdy1GQYlYeHwwg",
        "uri": "spotify:track:5eyTSlaihupr5Evo1pigNw"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7lOJ7WXyopaxri0dbOiZkd"
            },
            "href": "https://api.spotify.com/v1/artists/7lOJ7WXyopaxri0dbOiZkd",
            "id": "7lOJ7WXyopaxri0dbOiZkd",
            "name": "Broken Social Scene",
            "type": "artist",
            "uri": "spotify:artist:7lOJ7WXyopaxri0dbOiZkd"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6oPAq3tPMGIvlpjoscQP4g"
          },
          "href": "https://api.spotify.com/v1/albums/6oPAq3tPMGIvlpjoscQP4g",
          "id": "6oPAq3tPMGIvlpjoscQP4g",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273660c949f94693353bb955b1e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02660c949f94693353bb955b1e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851660c949f94693353bb955b1e",
            "width": 64
          }],
          "name": "Hug Of Thunder",
          "release_date": "2017-07-07",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:6oPAq3tPMGIvlpjoscQP4g"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7lOJ7WXyopaxri0dbOiZkd"
          },
          "href": "https://api.spotify.com/v1/artists/7lOJ7WXyopaxri0dbOiZkd",
          "id": "7lOJ7WXyopaxri0dbOiZkd",
          "name": "Broken Social Scene",
          "type": "artist",
          "uri": "spotify:artist:7lOJ7WXyopaxri0dbOiZkd"
        }],
        "disc_number": 1,
        "duration_ms": 294920,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CAAA11713507"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5eyTSlaihupr5Evo1pigNw"
        },
        "href": "https://api.spotify.com/v1/tracks/5eyTSlaihupr5Evo1pigNw",
        "id": "5eyTSlaihupr5Evo1pigNw",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3DyCegGAvjdqw85ZE68zHJ"
          },
          "href": "https://api.spotify.com/v1/tracks/3DyCegGAvjdqw85ZE68zHJ",
          "id": "3DyCegGAvjdqw85ZE68zHJ",
          "type": "track",
          "uri": "spotify:track:3DyCegGAvjdqw85ZE68zHJ"
        },
        "name": "Hug Of Thunder",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/b8ea268a499e0d48c54d38b6c05b112eee92d325?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:5eyTSlaihupr5Evo1pigNw"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2017-05-22T17:31:59Z",
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
        "share_id": "1FWvaEzJSv6_RNBuYuJ6Pw",
        "share_url": "https://open.spotify.com/track/6FJxtTYhgDxRplJsJrjYna?si=1FWvaEzJSv6_RNBuYuJ6Pw",
        "uri": "spotify:track:6FJxtTYhgDxRplJsJrjYna"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5gcDZA9xXCOspWgQilUYIu"
            },
            "href": "https://api.spotify.com/v1/artists/5gcDZA9xXCOspWgQilUYIu",
            "id": "5gcDZA9xXCOspWgQilUYIu",
            "name": "The Preatures",
            "type": "artist",
            "uri": "spotify:artist:5gcDZA9xXCOspWgQilUYIu"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2bxPYefpgel4G7dVksKokD"
          },
          "href": "https://api.spotify.com/v1/albums/2bxPYefpgel4G7dVksKokD",
          "id": "2bxPYefpgel4G7dVksKokD",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d11649a638d2af9e440c3fac",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d11649a638d2af9e440c3fac",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d11649a638d2af9e440c3fac",
            "width": 64
          }],
          "name": "Blue Planet Eyes",
          "release_date": "2014-01-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2bxPYefpgel4G7dVksKokD"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5gcDZA9xXCOspWgQilUYIu"
          },
          "href": "https://api.spotify.com/v1/artists/5gcDZA9xXCOspWgQilUYIu",
          "id": "5gcDZA9xXCOspWgQilUYIu",
          "name": "The Preatures",
          "type": "artist",
          "uri": "spotify:artist:5gcDZA9xXCOspWgQilUYIu"
        }],
        "disc_number": 1,
        "duration_ms": 230453,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AUUM71401127"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6FJxtTYhgDxRplJsJrjYna"
        },
        "href": "https://api.spotify.com/v1/tracks/6FJxtTYhgDxRplJsJrjYna",
        "id": "6FJxtTYhgDxRplJsJrjYna",
        "is_local": false,
        "is_playable": true,
        "name": "Rock And Roll Rave",
        "popularity": 17,
        "preview_url": "https://p.scdn.co/mp3-preview/5b2c74de4c9010c1cb51836b3daa97cbab1c4381?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:6FJxtTYhgDxRplJsJrjYna"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 21
  },
  "type": "playlist",
  "uri": "spotify:playlist:532omIrUJr4iNzwLcVAFz4"
};

/***/ })

/******/ });