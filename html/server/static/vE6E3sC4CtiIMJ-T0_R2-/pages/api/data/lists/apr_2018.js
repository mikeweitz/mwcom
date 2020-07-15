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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SyBS");


/***/ }),

/***/ "SyBS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/72mQfEidYOYCM5hUqqMKlp"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/72mQfEidYOYCM5hUqqMKlp?type=track,episode",
  "id": "72mQfEidYOYCM5hUqqMKlp",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b27304c4bd6f3b84eb7302d694cfab67616d0000b27357b7f789d328c205b4d15893ab67616d0000b27382f614e9a1555d5aa78fbce1ab67616d0000b273ad9c3a961b3badb46dd95e09",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b27304c4bd6f3b84eb7302d694cfab67616d0000b27357b7f789d328c205b4d15893ab67616d0000b27382f614e9a1555d5aa78fbce1ab67616d0000b273ad9c3a961b3badb46dd95e09",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b27304c4bd6f3b84eb7302d694cfab67616d0000b27357b7f789d328c205b4d15893ab67616d0000b27382f614e9a1555d5aa78fbce1ab67616d0000b273ad9c3a961b3badb46dd95e09",
    "width": 60
  }],
  "name": "April 2018",
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
    "share_id": "CmiEuVueT3qUaXTUuDQqBA",
    "share_url": "https://open.spotify.com/playlist/72mQfEidYOYCM5hUqqMKlp?si=CmiEuVueT3qUaXTUuDQqBA",
    "uri": "spotify:playlist:72mQfEidYOYCM5hUqqMKlp"
  },
  "snapshot_id": "NDEsMDI3ZGMyOTgyOTE1NDIyZGYxMTVjNGU3OGQxMDQxYTU0MThlMjBmNw==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/72mQfEidYOYCM5hUqqMKlp/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2018-03-08T18:03:05Z",
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
        "share_id": "5AoInEOHQFahI3SoYZD5eQ",
        "share_url": "https://open.spotify.com/track/5sHecmVKk5pCXO1JApAkt7?si=5AoInEOHQFahI3SoYZD5eQ",
        "uri": "spotify:track:5sHecmVKk5pCXO1JApAkt7"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5vBrKGOjN10BMwB0cJADj4"
            },
            "href": "https://api.spotify.com/v1/artists/5vBrKGOjN10BMwB0cJADj4",
            "id": "5vBrKGOjN10BMwB0cJADj4",
            "name": "bülow",
            "type": "artist",
            "uri": "spotify:artist:5vBrKGOjN10BMwB0cJADj4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5bXNAkjUFzkJNLZ5JmAq2m"
          },
          "href": "https://api.spotify.com/v1/albums/5bXNAkjUFzkJNLZ5JmAq2m",
          "id": "5bXNAkjUFzkJNLZ5JmAq2m",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27304c4bd6f3b84eb7302d694cf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0204c4bd6f3b84eb7302d694cf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485104c4bd6f3b84eb7302d694cf",
            "width": 64
          }],
          "name": "Damaged Vol. 1",
          "release_date": "2017-11-03",
          "release_date_precision": "day",
          "total_tracks": 3,
          "type": "album",
          "uri": "spotify:album:5bXNAkjUFzkJNLZ5JmAq2m"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5vBrKGOjN10BMwB0cJADj4"
          },
          "href": "https://api.spotify.com/v1/artists/5vBrKGOjN10BMwB0cJADj4",
          "id": "5vBrKGOjN10BMwB0cJADj4",
          "name": "bülow",
          "type": "artist",
          "uri": "spotify:artist:5vBrKGOjN10BMwB0cJADj4"
        }],
        "disc_number": 1,
        "duration_ms": 201480,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "CA0K51700017"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5sHecmVKk5pCXO1JApAkt7"
        },
        "href": "https://api.spotify.com/v1/tracks/5sHecmVKk5pCXO1JApAkt7",
        "id": "5sHecmVKk5pCXO1JApAkt7",
        "is_local": false,
        "is_playable": true,
        "name": "Lines",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/f27a24c42f6394e3fc30aa38c2c3ed00bd85e100?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5sHecmVKk5pCXO1JApAkt7"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-12T16:31:22Z",
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
        "share_id": "aUBQHqcTT8yHW3e5IlRt5g",
        "share_url": "https://open.spotify.com/track/12YYFvwwuYiw010ONgfYlW?si=aUBQHqcTT8yHW3e5IlRt5g",
        "uri": "spotify:track:12YYFvwwuYiw010ONgfYlW"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4NpFxQe2UvRCAjto3JqlSl"
            },
            "href": "https://api.spotify.com/v1/artists/4NpFxQe2UvRCAjto3JqlSl",
            "id": "4NpFxQe2UvRCAjto3JqlSl",
            "name": "Greta Van Fleet",
            "type": "artist",
            "uri": "spotify:artist:4NpFxQe2UvRCAjto3JqlSl"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6uSnHSIBGKUiW1uKQLYZ7w"
          },
          "href": "https://api.spotify.com/v1/albums/6uSnHSIBGKUiW1uKQLYZ7w",
          "id": "6uSnHSIBGKUiW1uKQLYZ7w",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27357b7f789d328c205b4d15893",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0257b7f789d328c205b4d15893",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485157b7f789d328c205b4d15893",
            "width": 64
          }],
          "name": "From The Fires",
          "release_date": "2017-11-10",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:6uSnHSIBGKUiW1uKQLYZ7w"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4NpFxQe2UvRCAjto3JqlSl"
          },
          "href": "https://api.spotify.com/v1/artists/4NpFxQe2UvRCAjto3JqlSl",
          "id": "4NpFxQe2UvRCAjto3JqlSl",
          "name": "Greta Van Fleet",
          "type": "artist",
          "uri": "spotify:artist:4NpFxQe2UvRCAjto3JqlSl"
        }],
        "disc_number": 1,
        "duration_ms": 197080,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71711571"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/12YYFvwwuYiw010ONgfYlW"
        },
        "href": "https://api.spotify.com/v1/tracks/12YYFvwwuYiw010ONgfYlW",
        "id": "12YYFvwwuYiw010ONgfYlW",
        "is_local": false,
        "is_playable": true,
        "name": "A Change Is Gonna Come",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/89e1373045f3b3b9bc5f599af00f34b92e52c670?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:12YYFvwwuYiw010ONgfYlW"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-08T18:11:47Z",
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
        "share_id": "BMInUCcyQKCcjXRmWCHRww",
        "share_url": "https://open.spotify.com/track/2GAvCh5XRUcadG2xScude5?si=BMInUCcyQKCcjXRmWCHRww",
        "uri": "spotify:track:2GAvCh5XRUcadG2xScude5"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1LeVJ5GPeYDOVUjxx1y7Rp"
            },
            "href": "https://api.spotify.com/v1/artists/1LeVJ5GPeYDOVUjxx1y7Rp",
            "id": "1LeVJ5GPeYDOVUjxx1y7Rp",
            "name": "Unknown Mortal Orchestra",
            "type": "artist",
            "uri": "spotify:artist:1LeVJ5GPeYDOVUjxx1y7Rp"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5g62OA1J2qxRVkoTILVpLs"
          },
          "href": "https://api.spotify.com/v1/albums/5g62OA1J2qxRVkoTILVpLs",
          "id": "5g62OA1J2qxRVkoTILVpLs",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ad9c3a961b3badb46dd95e09",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ad9c3a961b3badb46dd95e09",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ad9c3a961b3badb46dd95e09",
            "width": 64
          }],
          "name": "Not in Love We’re Just High",
          "release_date": "2018-02-28",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5g62OA1J2qxRVkoTILVpLs"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1LeVJ5GPeYDOVUjxx1y7Rp"
          },
          "href": "https://api.spotify.com/v1/artists/1LeVJ5GPeYDOVUjxx1y7Rp",
          "id": "1LeVJ5GPeYDOVUjxx1y7Rp",
          "name": "Unknown Mortal Orchestra",
          "type": "artist",
          "uri": "spotify:artist:1LeVJ5GPeYDOVUjxx1y7Rp"
        }],
        "disc_number": 1,
        "duration_ms": 217986,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US38Y1832211"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2GAvCh5XRUcadG2xScude5"
        },
        "href": "https://api.spotify.com/v1/tracks/2GAvCh5XRUcadG2xScude5",
        "id": "2GAvCh5XRUcadG2xScude5",
        "is_local": false,
        "is_playable": true,
        "name": "Not in Love We’re Just High",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/ff5846fbba4a1f5fdfa8ecf9d8f77b45273c732f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2GAvCh5XRUcadG2xScude5"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-08T18:12:16Z",
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
        "share_id": "U3kNHOhsQBuqXG0zeU2CTQ",
        "share_url": "https://open.spotify.com/track/29B1YhgEMfudHof8RJAlA4?si=U3kNHOhsQBuqXG0zeU2CTQ",
        "uri": "spotify:track:29B1YhgEMfudHof8RJAlA4"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/776Uo845nYHJpNaStv1Ds4"
            },
            "href": "https://api.spotify.com/v1/artists/776Uo845nYHJpNaStv1Ds4",
            "id": "776Uo845nYHJpNaStv1Ds4",
            "name": "Jimi Hendrix",
            "type": "artist",
            "uri": "spotify:artist:776Uo845nYHJpNaStv1Ds4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/333CW1FJG5ijNi30C45xcB"
          },
          "href": "https://api.spotify.com/v1/albums/333CW1FJG5ijNi30C45xcB",
          "id": "333CW1FJG5ijNi30C45xcB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27382f614e9a1555d5aa78fbce1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0282f614e9a1555d5aa78fbce1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485182f614e9a1555d5aa78fbce1",
            "width": 64
          }],
          "name": "Winterland",
          "release_date": "2011-09-13",
          "release_date_precision": "day",
          "total_tracks": 36,
          "type": "album",
          "uri": "spotify:album:333CW1FJG5ijNi30C45xcB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/776Uo845nYHJpNaStv1Ds4"
          },
          "href": "https://api.spotify.com/v1/artists/776Uo845nYHJpNaStv1Ds4",
          "id": "776Uo845nYHJpNaStv1Ds4",
          "name": "Jimi Hendrix",
          "type": "artist",
          "uri": "spotify:artist:776Uo845nYHJpNaStv1Ds4"
        }],
        "disc_number": 3,
        "duration_ms": 241346,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USQX91100779"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/29B1YhgEMfudHof8RJAlA4"
        },
        "href": "https://api.spotify.com/v1/tracks/29B1YhgEMfudHof8RJAlA4",
        "id": "29B1YhgEMfudHof8RJAlA4",
        "is_local": false,
        "is_playable": true,
        "name": "Little Wing - Live",
        "popularity": 28,
        "preview_url": "https://p.scdn.co/mp3-preview/9a7483643e3571e9d141b20c9e60d0cb7a1dcf95?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:29B1YhgEMfudHof8RJAlA4"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-08T18:14:59Z",
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
        "share_id": "_wvWOwZvT5-8ApcACoqVaQ",
        "share_url": "https://open.spotify.com/track/6IA0gt1G76qAoVEfTJAY4P?si=_wvWOwZvT5-8ApcACoqVaQ",
        "uri": "spotify:track:6IA0gt1G76qAoVEfTJAY4P"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2DxlS3lTLFIq70S7ap5H3y"
            },
            "href": "https://api.spotify.com/v1/artists/2DxlS3lTLFIq70S7ap5H3y",
            "id": "2DxlS3lTLFIq70S7ap5H3y",
            "name": "Buzzcocks",
            "type": "artist",
            "uri": "spotify:artist:2DxlS3lTLFIq70S7ap5H3y"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0quiuy6CHhWNzILNiFFOSw"
          },
          "href": "https://api.spotify.com/v1/albums/0quiuy6CHhWNzILNiFFOSw",
          "id": "0quiuy6CHhWNzILNiFFOSw",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273be5cb045edd1f58b67620b35",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02be5cb045edd1f58b67620b35",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851be5cb045edd1f58b67620b35",
            "width": 64
          }],
          "name": "A Different Compilation",
          "release_date": "2011-06-01",
          "release_date_precision": "day",
          "total_tracks": 24,
          "type": "album",
          "uri": "spotify:album:0quiuy6CHhWNzILNiFFOSw"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2DxlS3lTLFIq70S7ap5H3y"
          },
          "href": "https://api.spotify.com/v1/artists/2DxlS3lTLFIq70S7ap5H3y",
          "id": "2DxlS3lTLFIq70S7ap5H3y",
          "name": "Buzzcocks",
          "type": "artist",
          "uri": "spotify:artist:2DxlS3lTLFIq70S7ap5H3y"
        }],
        "disc_number": 1,
        "duration_ms": 254213,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBLY2000893"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6IA0gt1G76qAoVEfTJAY4P"
        },
        "href": "https://api.spotify.com/v1/tracks/6IA0gt1G76qAoVEfTJAY4P",
        "id": "6IA0gt1G76qAoVEfTJAY4P",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3AjsOGb5VObgBuaIzsWinF"
          },
          "href": "https://api.spotify.com/v1/tracks/3AjsOGb5VObgBuaIzsWinF",
          "id": "3AjsOGb5VObgBuaIzsWinF",
          "type": "track",
          "uri": "spotify:track:3AjsOGb5VObgBuaIzsWinF"
        },
        "name": "Why Can't I Touch It?",
        "popularity": 12,
        "preview_url": "https://p.scdn.co/mp3-preview/e33a75822b6347ad41f5eb4aba79a03d0464c79f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:6IA0gt1G76qAoVEfTJAY4P"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-08T18:18:08Z",
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
        "share_id": "Rwkv4fZPTuiziMyiPz1A2g",
        "share_url": "https://open.spotify.com/track/47WQL53Sjbp87dd3wjUozR?si=Rwkv4fZPTuiziMyiPz1A2g",
        "uri": "spotify:track:47WQL53Sjbp87dd3wjUozR"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2v2cdjqYIpT8ZBpflNTttY"
            },
            "href": "https://api.spotify.com/v1/artists/2v2cdjqYIpT8ZBpflNTttY",
            "id": "2v2cdjqYIpT8ZBpflNTttY",
            "name": "The Allergies",
            "type": "artist",
            "uri": "spotify:artist:2v2cdjqYIpT8ZBpflNTttY"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0fk2eCwU5fQ3dEjEPTtpJM"
          },
          "href": "https://api.spotify.com/v1/albums/0fk2eCwU5fQ3dEjEPTtpJM",
          "id": "0fk2eCwU5fQ3dEjEPTtpJM",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27376a75559004137afe3a58c06",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0276a75559004137afe3a58c06",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485176a75559004137afe3a58c06",
            "width": 64
          }],
          "name": "As We Do Our Thing",
          "release_date": "2016-05-13",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:0fk2eCwU5fQ3dEjEPTtpJM"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2v2cdjqYIpT8ZBpflNTttY"
          },
          "href": "https://api.spotify.com/v1/artists/2v2cdjqYIpT8ZBpflNTttY",
          "id": "2v2cdjqYIpT8ZBpflNTttY",
          "name": "The Allergies",
          "type": "artist",
          "uri": "spotify:artist:2v2cdjqYIpT8ZBpflNTttY"
        }],
        "disc_number": 1,
        "duration_ms": 195437,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBFBC1501356"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/47WQL53Sjbp87dd3wjUozR"
        },
        "href": "https://api.spotify.com/v1/tracks/47WQL53Sjbp87dd3wjUozR",
        "id": "47WQL53Sjbp87dd3wjUozR",
        "is_local": false,
        "is_playable": true,
        "name": "Love's Supposed to Be",
        "popularity": 26,
        "preview_url": "https://p.scdn.co/mp3-preview/8fa82af98ab6605fe23684da80dd532ca6bea5e9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 13,
        "type": "track",
        "uri": "spotify:track:47WQL53Sjbp87dd3wjUozR"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-27T22:12:35Z",
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
        "share_id": "kAFduXFjTQ6gjvQtY7mAdg",
        "share_url": "https://open.spotify.com/track/0XGvIbNObhYmxvCuovyhrq?si=kAFduXFjTQ6gjvQtY7mAdg",
        "uri": "spotify:track:0XGvIbNObhYmxvCuovyhrq"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0whKRM4VqhEv6jnBoo3qK3"
            },
            "href": "https://api.spotify.com/v1/artists/0whKRM4VqhEv6jnBoo3qK3",
            "id": "0whKRM4VqhEv6jnBoo3qK3",
            "name": "Tayla",
            "type": "artist",
            "uri": "spotify:artist:0whKRM4VqhEv6jnBoo3qK3"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7GOwmJZpnmxNIT1SNWLpXS"
          },
          "href": "https://api.spotify.com/v1/albums/7GOwmJZpnmxNIT1SNWLpXS",
          "id": "7GOwmJZpnmxNIT1SNWLpXS",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735646bb4a6d9a08d53de56cd7",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025646bb4a6d9a08d53de56cd7",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515646bb4a6d9a08d53de56cd7",
            "width": 64
          }],
          "name": "Coming Back Around",
          "release_date": "2017-06-16",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7GOwmJZpnmxNIT1SNWLpXS"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0whKRM4VqhEv6jnBoo3qK3"
          },
          "href": "https://api.spotify.com/v1/artists/0whKRM4VqhEv6jnBoo3qK3",
          "id": "0whKRM4VqhEv6jnBoo3qK3",
          "name": "Tayla",
          "type": "artist",
          "uri": "spotify:artist:0whKRM4VqhEv6jnBoo3qK3"
        }],
        "disc_number": 1,
        "duration_ms": 156036,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBLFP1739212"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0XGvIbNObhYmxvCuovyhrq"
        },
        "href": "https://api.spotify.com/v1/tracks/0XGvIbNObhYmxvCuovyhrq",
        "id": "0XGvIbNObhYmxvCuovyhrq",
        "is_local": false,
        "is_playable": true,
        "name": "Coming Back Around",
        "popularity": 13,
        "preview_url": "https://p.scdn.co/mp3-preview/fe186580b4a25cd5d124aa461fa74810a472d6c9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0XGvIbNObhYmxvCuovyhrq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-27T22:11:14Z",
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
        "share_id": "AnwbnYuYQ960pYHbA1OT4Q",
        "share_url": "https://open.spotify.com/track/12Eg39q87Bi9FN99roiI11?si=AnwbnYuYQ960pYHbA1OT4Q",
        "uri": "spotify:track:12Eg39q87Bi9FN99roiI11"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4QkSD9TRUnMtI8Fq1jXJJe"
            },
            "href": "https://api.spotify.com/v1/artists/4QkSD9TRUnMtI8Fq1jXJJe",
            "id": "4QkSD9TRUnMtI8Fq1jXJJe",
            "name": "Snail Mail",
            "type": "artist",
            "uri": "spotify:artist:4QkSD9TRUnMtI8Fq1jXJJe"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1EjRNhbVxDEPXDwKmusDyj"
          },
          "href": "https://api.spotify.com/v1/albums/1EjRNhbVxDEPXDwKmusDyj",
          "id": "1EjRNhbVxDEPXDwKmusDyj",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ffd6b95ec7e8398d83a65235",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ffd6b95ec7e8398d83a65235",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ffd6b95ec7e8398d83a65235",
            "width": 64
          }],
          "name": "Habit",
          "release_date": "2016",
          "release_date_precision": "year",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:1EjRNhbVxDEPXDwKmusDyj"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4QkSD9TRUnMtI8Fq1jXJJe"
          },
          "href": "https://api.spotify.com/v1/artists/4QkSD9TRUnMtI8Fq1jXJJe",
          "id": "4QkSD9TRUnMtI8Fq1jXJJe",
          "name": "Snail Mail",
          "type": "artist",
          "uri": "spotify:artist:4QkSD9TRUnMtI8Fq1jXJJe"
        }],
        "disc_number": 1,
        "duration_ms": 203746,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACQ1614234"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/12Eg39q87Bi9FN99roiI11"
        },
        "href": "https://api.spotify.com/v1/tracks/12Eg39q87Bi9FN99roiI11",
        "id": "12Eg39q87Bi9FN99roiI11",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7h9Bx7Y0NuP71mMI4FLqlA"
          },
          "href": "https://api.spotify.com/v1/tracks/7h9Bx7Y0NuP71mMI4FLqlA",
          "id": "7h9Bx7Y0NuP71mMI4FLqlA",
          "type": "track",
          "uri": "spotify:track:7h9Bx7Y0NuP71mMI4FLqlA"
        },
        "name": "Thinning",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/c82581329615b647eb666700171009031fb55c08?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:12Eg39q87Bi9FN99roiI11"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-09T17:19:46Z",
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
        "share_id": "EHQvXlqQTCexGijxjuVSYQ",
        "share_url": "https://open.spotify.com/track/7BDbyDs5FUmnh955RABFd7?si=EHQvXlqQTCexGijxjuVSYQ",
        "uri": "spotify:track:7BDbyDs5FUmnh955RABFd7"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3nuc29fYGlQbIrwh4yrNWd"
            },
            "href": "https://api.spotify.com/v1/artists/3nuc29fYGlQbIrwh4yrNWd",
            "id": "3nuc29fYGlQbIrwh4yrNWd",
            "name": "Lake Street Dive",
            "type": "artist",
            "uri": "spotify:artist:3nuc29fYGlQbIrwh4yrNWd"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1eWP4CbLwVsVuC44utXBOD"
          },
          "href": "https://api.spotify.com/v1/albums/1eWP4CbLwVsVuC44utXBOD",
          "id": "1eWP4CbLwVsVuC44utXBOD",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737563abd8344a283666509e75",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027563abd8344a283666509e75",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517563abd8344a283666509e75",
            "width": 64
          }],
          "name": "Free Yourself Up",
          "release_date": "2018-05-04",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1eWP4CbLwVsVuC44utXBOD"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3nuc29fYGlQbIrwh4yrNWd"
          },
          "href": "https://api.spotify.com/v1/artists/3nuc29fYGlQbIrwh4yrNWd",
          "id": "3nuc29fYGlQbIrwh4yrNWd",
          "name": "Lake Street Dive",
          "type": "artist",
          "uri": "spotify:artist:3nuc29fYGlQbIrwh4yrNWd"
        }],
        "disc_number": 1,
        "duration_ms": 218493,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USNO11800108"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7BDbyDs5FUmnh955RABFd7"
        },
        "href": "https://api.spotify.com/v1/tracks/7BDbyDs5FUmnh955RABFd7",
        "id": "7BDbyDs5FUmnh955RABFd7",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4PcNBh7bpbk5kpe4rwllY5"
          },
          "href": "https://api.spotify.com/v1/tracks/4PcNBh7bpbk5kpe4rwllY5",
          "id": "4PcNBh7bpbk5kpe4rwllY5",
          "type": "track",
          "uri": "spotify:track:4PcNBh7bpbk5kpe4rwllY5"
        },
        "name": "Good Kisser",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/df9d2ef942660f7ba1df3d9186ecb2d5143d3d9c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:7BDbyDs5FUmnh955RABFd7"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-27T17:10:28Z",
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
        "share_id": "8SCIbnJ2SyyOTkUecdLKEA",
        "share_url": "https://open.spotify.com/track/4ptJWBbwjOEFeQ0CenOgVU?si=8SCIbnJ2SyyOTkUecdLKEA",
        "uri": "spotify:track:4ptJWBbwjOEFeQ0CenOgVU"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3HZgaiR960RFqx9d4LPraD"
            },
            "href": "https://api.spotify.com/v1/artists/3HZgaiR960RFqx9d4LPraD",
            "id": "3HZgaiR960RFqx9d4LPraD",
            "name": "The Districts",
            "type": "artist",
            "uri": "spotify:artist:3HZgaiR960RFqx9d4LPraD"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1CPY8oTfBQiYSAskOYdNIj"
          },
          "href": "https://api.spotify.com/v1/albums/1CPY8oTfBQiYSAskOYdNIj",
          "id": "1CPY8oTfBQiYSAskOYdNIj",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f26ee65d97abebbf82d4f326",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f26ee65d97abebbf82d4f326",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f26ee65d97abebbf82d4f326",
            "width": 64
          }],
          "name": "Nighttime Girls / Soft Auxiliary",
          "release_date": "2018-03-09",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:1CPY8oTfBQiYSAskOYdNIj"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3HZgaiR960RFqx9d4LPraD"
          },
          "href": "https://api.spotify.com/v1/artists/3HZgaiR960RFqx9d4LPraD",
          "id": "3HZgaiR960RFqx9d4LPraD",
          "name": "The Districts",
          "type": "artist",
          "uri": "spotify:artist:3HZgaiR960RFqx9d4LPraD"
        }],
        "disc_number": 1,
        "duration_ms": 228809,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP71865701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4ptJWBbwjOEFeQ0CenOgVU"
        },
        "href": "https://api.spotify.com/v1/tracks/4ptJWBbwjOEFeQ0CenOgVU",
        "id": "4ptJWBbwjOEFeQ0CenOgVU",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3typDlnoH7DNoFXUaXq3Jr"
          },
          "href": "https://api.spotify.com/v1/tracks/3typDlnoH7DNoFXUaXq3Jr",
          "id": "3typDlnoH7DNoFXUaXq3Jr",
          "type": "track",
          "uri": "spotify:track:3typDlnoH7DNoFXUaXq3Jr"
        },
        "name": "Nighttime Girls",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/4ba9086b10d74079aaee68f9f2d3025fefda8923?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4ptJWBbwjOEFeQ0CenOgVU"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-27T22:10:59Z",
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
        "share_id": "eNeyy8nAS6OvQKlsOcofVA",
        "share_url": "https://open.spotify.com/track/5kVuwpCtLAqAfND2X7x7tg?si=eNeyy8nAS6OvQKlsOcofVA",
        "uri": "spotify:track:5kVuwpCtLAqAfND2X7x7tg"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/73YLmyaazO66GncUVHP0KV"
            },
            "href": "https://api.spotify.com/v1/artists/73YLmyaazO66GncUVHP0KV",
            "id": "73YLmyaazO66GncUVHP0KV",
            "name": "Marshall Crenshaw",
            "type": "artist",
            "uri": "spotify:artist:73YLmyaazO66GncUVHP0KV"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0oohsbntkqm4Et3bT7WZFd"
          },
          "href": "https://api.spotify.com/v1/albums/0oohsbntkqm4Et3bT7WZFd",
          "id": "0oohsbntkqm4Et3bT7WZFd",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27326433e90ce7fae3f91623b85",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0226433e90ce7fae3f91623b85",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485126433e90ce7fae3f91623b85",
            "width": 64
          }],
          "name": "This Is Easy: The Best Of Marshall Crenshaw",
          "release_date": "2000-08-15",
          "release_date_precision": "day",
          "total_tracks": 18,
          "type": "album",
          "uri": "spotify:album:0oohsbntkqm4Et3bT7WZFd"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/08ZyQ4ecPfFpweo8EvBRYb"
          },
          "href": "https://api.spotify.com/v1/artists/08ZyQ4ecPfFpweo8EvBRYb",
          "id": "08ZyQ4ecPfFpweo8EvBRYb",
          "name": "Marshall Crenshaw & The Handsome, Ruthless and Stupid Band",
          "type": "artist",
          "uri": "spotify:artist:08ZyQ4ecPfFpweo8EvBRYb"
        }],
        "disc_number": 1,
        "duration_ms": 158360,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB10302943"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5kVuwpCtLAqAfND2X7x7tg"
        },
        "href": "https://api.spotify.com/v1/tracks/5kVuwpCtLAqAfND2X7x7tg",
        "id": "5kVuwpCtLAqAfND2X7x7tg",
        "is_local": false,
        "is_playable": true,
        "name": "You're My Favorite Waste of Time - Remastered Version",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/37187f6763ae9d9c3ea84e88c39d697db674f291?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:5kVuwpCtLAqAfND2X7x7tg"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-27T22:13:31Z",
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
        "share_id": "jeYdnJaITB2QEFn2FVbRSA",
        "share_url": "https://open.spotify.com/track/4LMlviHZfDUXWIZhvGEAKi?si=jeYdnJaITB2QEFn2FVbRSA",
        "uri": "spotify:track:4LMlviHZfDUXWIZhvGEAKi"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0x4xCoWaOFd3WsKarzaxnW"
            },
            "href": "https://api.spotify.com/v1/artists/0x4xCoWaOFd3WsKarzaxnW",
            "id": "0x4xCoWaOFd3WsKarzaxnW",
            "name": "Frankie Cosmos",
            "type": "artist",
            "uri": "spotify:artist:0x4xCoWaOFd3WsKarzaxnW"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2HBmYLBJ125pj7Dbss21tJ"
          },
          "href": "https://api.spotify.com/v1/albums/2HBmYLBJ125pj7Dbss21tJ",
          "id": "2HBmYLBJ125pj7Dbss21tJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27311121149d689c07e8a033849",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0211121149d689c07e8a033849",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485111121149d689c07e8a033849",
            "width": 64
          }],
          "name": "Fit Me In",
          "release_date": "2015-11-13",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:2HBmYLBJ125pj7Dbss21tJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0x4xCoWaOFd3WsKarzaxnW"
          },
          "href": "https://api.spotify.com/v1/artists/0x4xCoWaOFd3WsKarzaxnW",
          "id": "0x4xCoWaOFd3WsKarzaxnW",
          "name": "Frankie Cosmos",
          "type": "artist",
          "uri": "spotify:artist:0x4xCoWaOFd3WsKarzaxnW"
        }],
        "disc_number": 1,
        "duration_ms": 122298,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM6YT1500802"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4LMlviHZfDUXWIZhvGEAKi"
        },
        "href": "https://api.spotify.com/v1/tracks/4LMlviHZfDUXWIZhvGEAKi",
        "id": "4LMlviHZfDUXWIZhvGEAKi",
        "is_local": false,
        "is_playable": true,
        "name": "Young",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/e270a92f21add76fd6d8483bdb64f8f246570586?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4LMlviHZfDUXWIZhvGEAKi"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-27T22:32:42Z",
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
        "share_id": "Qqv9_OfgQiW3KZhSkja9Cw",
        "share_url": "https://open.spotify.com/track/3nYFh1YqIzXibyCB7edcNB?si=Qqv9_OfgQiW3KZhSkja9Cw",
        "uri": "spotify:track:3nYFh1YqIzXibyCB7edcNB"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7r2alhL2KKfbhgGuqL9LGg"
            },
            "href": "https://api.spotify.com/v1/artists/7r2alhL2KKfbhgGuqL9LGg",
            "id": "7r2alhL2KKfbhgGuqL9LGg",
            "name": "Fly Golden Eagle",
            "type": "artist",
            "uri": "spotify:artist:7r2alhL2KKfbhgGuqL9LGg"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6wy9mPh8BQnILZ4GEqm3CM"
          },
          "href": "https://api.spotify.com/v1/albums/6wy9mPh8BQnILZ4GEqm3CM",
          "id": "6wy9mPh8BQnILZ4GEqm3CM",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739a755a574095e5c6d827b6b7",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029a755a574095e5c6d827b6b7",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519a755a574095e5c6d827b6b7",
            "width": 64
          }],
          "name": "Swagger",
          "release_date": "2011-11-25",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6wy9mPh8BQnILZ4GEqm3CM"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7r2alhL2KKfbhgGuqL9LGg"
          },
          "href": "https://api.spotify.com/v1/artists/7r2alhL2KKfbhgGuqL9LGg",
          "id": "7r2alhL2KKfbhgGuqL9LGg",
          "name": "Fly Golden Eagle",
          "type": "artist",
          "uri": "spotify:artist:7r2alhL2KKfbhgGuqL9LGg"
        }],
        "disc_number": 1,
        "duration_ms": 250586,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCABB1193944"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3nYFh1YqIzXibyCB7edcNB"
        },
        "href": "https://api.spotify.com/v1/tracks/3nYFh1YqIzXibyCB7edcNB",
        "id": "3nYFh1YqIzXibyCB7edcNB",
        "is_local": false,
        "is_playable": true,
        "name": "Psyche's Dagger",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/a5dec4fc50081d3ddd86a5d23382214527eaee47?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:3nYFh1YqIzXibyCB7edcNB"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-03-30T00:52:55Z",
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
        "share_id": "-9sHATCLT4qG7PHgm94E9w",
        "share_url": "https://open.spotify.com/track/5uY21prnvof5RvOrGzoMnf?si=-9sHATCLT4qG7PHgm94E9w",
        "uri": "spotify:track:5uY21prnvof5RvOrGzoMnf"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6TVVIyd0fsRDGg6WzHKyTP"
            },
            "href": "https://api.spotify.com/v1/artists/6TVVIyd0fsRDGg6WzHKyTP",
            "id": "6TVVIyd0fsRDGg6WzHKyTP",
            "name": "Durand Jones & The Indications",
            "type": "artist",
            "uri": "spotify:artist:6TVVIyd0fsRDGg6WzHKyTP"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0CzFk2RSGJjhXLEGhk6K1E"
          },
          "href": "https://api.spotify.com/v1/albums/0CzFk2RSGJjhXLEGhk6K1E",
          "id": "0CzFk2RSGJjhXLEGhk6K1E",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737ba1ba0c076eb928950e44bd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027ba1ba0c076eb928950e44bd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517ba1ba0c076eb928950e44bd",
            "width": 64
          }],
          "name": "Durand Jones & The Indications (Deluxe Edition)",
          "release_date": "2018-03-16",
          "release_date_precision": "day",
          "total_tracks": 18,
          "type": "album",
          "uri": "spotify:album:0CzFk2RSGJjhXLEGhk6K1E"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6TVVIyd0fsRDGg6WzHKyTP"
          },
          "href": "https://api.spotify.com/v1/artists/6TVVIyd0fsRDGg6WzHKyTP",
          "id": "6TVVIyd0fsRDGg6WzHKyTP",
          "name": "Durand Jones & The Indications",
          "type": "artist",
          "uri": "spotify:artist:6TVVIyd0fsRDGg6WzHKyTP"
        }],
        "disc_number": 1,
        "duration_ms": 259064,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMFME1589846"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5uY21prnvof5RvOrGzoMnf"
        },
        "href": "https://api.spotify.com/v1/tracks/5uY21prnvof5RvOrGzoMnf",
        "id": "5uY21prnvof5RvOrGzoMnf",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6L49F9vPYBOtZiEiHGBrdu"
          },
          "href": "https://api.spotify.com/v1/tracks/6L49F9vPYBOtZiEiHGBrdu",
          "id": "6L49F9vPYBOtZiEiHGBrdu",
          "type": "track",
          "uri": "spotify:track:6L49F9vPYBOtZiEiHGBrdu"
        },
        "name": "Can't Keep My Cool",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/a67910a7a943425d4b53eee48af1141c8d6cd47a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5uY21prnvof5RvOrGzoMnf"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-03T21:11:30Z",
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
        "share_id": "P1HIiah9RtWDvEE0ChPTpQ",
        "share_url": "https://open.spotify.com/track/4CdfFYzaAJ0y0beKzmgJSn?si=P1HIiah9RtWDvEE0ChPTpQ",
        "uri": "spotify:track:4CdfFYzaAJ0y0beKzmgJSn"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7f0OLhGgBMX9fUjm1dcPip"
            },
            "href": "https://api.spotify.com/v1/artists/7f0OLhGgBMX9fUjm1dcPip",
            "id": "7f0OLhGgBMX9fUjm1dcPip",
            "name": "Alice Merton",
            "type": "artist",
            "uri": "spotify:artist:7f0OLhGgBMX9fUjm1dcPip"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3zGtZAOCr1SnHjl1pshNQA"
          },
          "href": "https://api.spotify.com/v1/albums/3zGtZAOCr1SnHjl1pshNQA",
          "id": "3zGtZAOCr1SnHjl1pshNQA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2732ddeff249efc594c59d25bcc",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e022ddeff249efc594c59d25bcc",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048512ddeff249efc594c59d25bcc",
            "width": 64
          }],
          "name": "No Roots",
          "release_date": "2017-08-04",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3zGtZAOCr1SnHjl1pshNQA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7f0OLhGgBMX9fUjm1dcPip"
          },
          "href": "https://api.spotify.com/v1/artists/7f0OLhGgBMX9fUjm1dcPip",
          "id": "7f0OLhGgBMX9fUjm1dcPip",
          "name": "Alice Merton",
          "type": "artist",
          "uri": "spotify:artist:7f0OLhGgBMX9fUjm1dcPip"
        }],
        "disc_number": 1,
        "duration_ms": 235813,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DEVQ71600001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4CdfFYzaAJ0y0beKzmgJSn"
        },
        "href": "https://api.spotify.com/v1/tracks/4CdfFYzaAJ0y0beKzmgJSn",
        "id": "4CdfFYzaAJ0y0beKzmgJSn",
        "is_local": false,
        "is_playable": true,
        "name": "No Roots",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/b2fdeb1d219d018f1fb9eeff52bd2e06c1511209?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4CdfFYzaAJ0y0beKzmgJSn"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-03T21:13:49Z",
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
        "share_id": "2vpOUDa3R3mxd2Gdpovcfg",
        "share_url": "https://open.spotify.com/track/4WKpepmFkrE8HwWwE5VQFM?si=2vpOUDa3R3mxd2Gdpovcfg",
        "uri": "spotify:track:4WKpepmFkrE8HwWwE5VQFM"
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
            "spotify": "https://open.spotify.com/album/7CjJWkimFaZ1oDMx9jaaVz"
          },
          "href": "https://api.spotify.com/v1/albums/7CjJWkimFaZ1oDMx9jaaVz",
          "id": "7CjJWkimFaZ1oDMx9jaaVz",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b1edee435c5d5a7404290b37",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b1edee435c5d5a7404290b37",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b1edee435c5d5a7404290b37",
            "width": 64
          }],
          "name": "Love Yourself",
          "release_date": "2017-11-03",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7CjJWkimFaZ1oDMx9jaaVz"
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
        "duration_ms": 233814,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GB4BB1700347"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4WKpepmFkrE8HwWwE5VQFM"
        },
        "href": "https://api.spotify.com/v1/tracks/4WKpepmFkrE8HwWwE5VQFM",
        "id": "4WKpepmFkrE8HwWwE5VQFM",
        "is_local": false,
        "is_playable": true,
        "name": "Love Yourself",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/0ebc7ee7722dff35e4c66bf07a10613972232c19?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4WKpepmFkrE8HwWwE5VQFM"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-06T04:13:56Z",
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
        "share_id": "tmPttyxCRXa6OgoV_VINng",
        "share_url": "https://open.spotify.com/track/5h1WO9jqXhQ9e1vs63ctxZ?si=tmPttyxCRXa6OgoV_VINng",
        "uri": "spotify:track:5h1WO9jqXhQ9e1vs63ctxZ"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6fxk3UXHTFYET8qCT9WlBF"
            },
            "href": "https://api.spotify.com/v1/artists/6fxk3UXHTFYET8qCT9WlBF",
            "id": "6fxk3UXHTFYET8qCT9WlBF",
            "name": "Kevin Morby",
            "type": "artist",
            "uri": "spotify:artist:6fxk3UXHTFYET8qCT9WlBF"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2vBwQxoey9MJ7CApSpGya9"
          },
          "href": "https://api.spotify.com/v1/albums/2vBwQxoey9MJ7CApSpGya9",
          "id": "2vBwQxoey9MJ7CApSpGya9",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c88257b85d988d6069bebce9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c88257b85d988d6069bebce9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c88257b85d988d6069bebce9",
            "width": 64
          }],
          "name": "City Music",
          "release_date": "2017-06-16",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2vBwQxoey9MJ7CApSpGya9"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6fxk3UXHTFYET8qCT9WlBF"
          },
          "href": "https://api.spotify.com/v1/artists/6fxk3UXHTFYET8qCT9WlBF",
          "id": "6fxk3UXHTFYET8qCT9WlBF",
          "name": "Kevin Morby",
          "type": "artist",
          "uri": "spotify:artist:6fxk3UXHTFYET8qCT9WlBF"
        }],
        "disc_number": 1,
        "duration_ms": 291080,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G1713101"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5h1WO9jqXhQ9e1vs63ctxZ"
        },
        "href": "https://api.spotify.com/v1/tracks/5h1WO9jqXhQ9e1vs63ctxZ",
        "id": "5h1WO9jqXhQ9e1vs63ctxZ",
        "is_local": false,
        "is_playable": true,
        "name": "Come to Me Now",
        "popularity": 54,
        "preview_url": "https://p.scdn.co/mp3-preview/e8f6bdd7dedfd789924eb08c1db5e59bc08ea079?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5h1WO9jqXhQ9e1vs63ctxZ"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-03T21:17:09Z",
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
        "share_id": "fW4FFyfNRfCaYX8M7eIleQ",
        "share_url": "https://open.spotify.com/track/698loPvVvRJWhhVb93D4y8?si=fW4FFyfNRfCaYX8M7eIleQ",
        "uri": "spotify:track:698loPvVvRJWhhVb93D4y8"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2TpAfGX0XNikAg5QjrbbvE"
            },
            "href": "https://api.spotify.com/v1/artists/2TpAfGX0XNikAg5QjrbbvE",
            "id": "2TpAfGX0XNikAg5QjrbbvE",
            "name": "Nils Lofgren",
            "type": "artist",
            "uri": "spotify:artist:2TpAfGX0XNikAg5QjrbbvE"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1QQ1TmYVLLJEQdEectU5O3"
          },
          "href": "https://api.spotify.com/v1/albums/1QQ1TmYVLLJEQdEectU5O3",
          "id": "1QQ1TmYVLLJEQdEectU5O3",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733fce24154aa20359c9c3837a",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023fce24154aa20359c9c3837a",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513fce24154aa20359c9c3837a",
            "width": 64
          }],
          "name": "The Best",
          "release_date": "1979-01-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1QQ1TmYVLLJEQdEectU5O3"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2TpAfGX0XNikAg5QjrbbvE"
          },
          "href": "https://api.spotify.com/v1/artists/2TpAfGX0XNikAg5QjrbbvE",
          "id": "2TpAfGX0XNikAg5QjrbbvE",
          "name": "Nils Lofgren",
          "type": "artist",
          "uri": "spotify:artist:2TpAfGX0XNikAg5QjrbbvE"
        }],
        "disc_number": 1,
        "duration_ms": 258000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAM17300307"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/698loPvVvRJWhhVb93D4y8"
        },
        "href": "https://api.spotify.com/v1/tracks/698loPvVvRJWhhVb93D4y8",
        "id": "698loPvVvRJWhhVb93D4y8",
        "is_local": false,
        "is_playable": true,
        "name": "Beggar's Day (Eulogy To Danny Whitten)",
        "popularity": 2,
        "preview_url": "https://p.scdn.co/mp3-preview/f6cfd1ecefa2cbc642e48104d39ce21227dee01b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:698loPvVvRJWhhVb93D4y8"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-03T21:12:26Z",
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
        "share_id": "xCYCEma-StSLneyxNxHtVQ",
        "share_url": "https://open.spotify.com/track/589lM1mnc6YiM8c8jQ7wRl?si=xCYCEma-StSLneyxNxHtVQ",
        "uri": "spotify:track:589lM1mnc6YiM8c8jQ7wRl"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Lhxlge1CR1DrgDAje8Qaw"
            },
            "href": "https://api.spotify.com/v1/artists/5Lhxlge1CR1DrgDAje8Qaw",
            "id": "5Lhxlge1CR1DrgDAje8Qaw",
            "name": "NoMBe",
            "type": "artist",
            "uri": "spotify:artist:5Lhxlge1CR1DrgDAje8Qaw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4DYlqTiUl96D7ZTXiqn3t1"
          },
          "href": "https://api.spotify.com/v1/albums/4DYlqTiUl96D7ZTXiqn3t1",
          "id": "4DYlqTiUl96D7ZTXiqn3t1",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273febb64ee78237bb1e6fd7fab",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02febb64ee78237bb1e6fd7fab",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851febb64ee78237bb1e6fd7fab",
            "width": 64
          }],
          "name": "They Might've Even Loved Me",
          "release_date": "2018-03-23",
          "release_date_precision": "day",
          "total_tracks": 18,
          "type": "album",
          "uri": "spotify:album:4DYlqTiUl96D7ZTXiqn3t1"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Lhxlge1CR1DrgDAje8Qaw"
          },
          "href": "https://api.spotify.com/v1/artists/5Lhxlge1CR1DrgDAje8Qaw",
          "id": "5Lhxlge1CR1DrgDAje8Qaw",
          "name": "NoMBe",
          "type": "artist",
          "uri": "spotify:artist:5Lhxlge1CR1DrgDAje8Qaw"
        }],
        "disc_number": 1,
        "duration_ms": 176889,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCACZ1718380"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/589lM1mnc6YiM8c8jQ7wRl"
        },
        "href": "https://api.spotify.com/v1/tracks/589lM1mnc6YiM8c8jQ7wRl",
        "id": "589lM1mnc6YiM8c8jQ7wRl",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6tnVrxzyQPbtV1IG8BbpxD"
          },
          "href": "https://api.spotify.com/v1/tracks/6tnVrxzyQPbtV1IG8BbpxD",
          "id": "6tnVrxzyQPbtV1IG8BbpxD",
          "type": "track",
          "uri": "spotify:track:6tnVrxzyQPbtV1IG8BbpxD"
        },
        "name": "Freak Like Me",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/9479c34e49d8b3ae77375243eb48dbc7041110d3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:589lM1mnc6YiM8c8jQ7wRl"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2018-04-04T00:01:12Z",
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
        "share_id": "b07NJ6GVSmCwI5lrTAJAnA",
        "share_url": "https://open.spotify.com/track/4zlRCThoy7Wops9GF11kQX?si=b07NJ6GVSmCwI5lrTAJAnA",
        "uri": "spotify:track:4zlRCThoy7Wops9GF11kQX"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0fgYKF9Avljex0L9Wt5b8Z"
            },
            "href": "https://api.spotify.com/v1/artists/0fgYKF9Avljex0L9Wt5b8Z",
            "id": "0fgYKF9Avljex0L9Wt5b8Z",
            "name": "Echo & the Bunnymen",
            "type": "artist",
            "uri": "spotify:artist:0fgYKF9Avljex0L9Wt5b8Z"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7ynWqEk1YxxZ2TYf1v6imE"
          },
          "href": "https://api.spotify.com/v1/albums/7ynWqEk1YxxZ2TYf1v6imE",
          "id": "7ynWqEk1YxxZ2TYf1v6imE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bfbbe64130d22d2ed233bf46",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bfbbe64130d22d2ed233bf46",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bfbbe64130d22d2ed233bf46",
            "width": 64
          }],
          "name": "Evergreen (Expanded)",
          "release_date": "1997-01-01",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:7ynWqEk1YxxZ2TYf1v6imE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0fgYKF9Avljex0L9Wt5b8Z"
          },
          "href": "https://api.spotify.com/v1/artists/0fgYKF9Avljex0L9Wt5b8Z",
          "id": "0fgYKF9Avljex0L9Wt5b8Z",
          "name": "Echo & the Bunnymen",
          "type": "artist",
          "uri": "spotify:artist:0fgYKF9Avljex0L9Wt5b8Z"
        }],
        "disc_number": 1,
        "duration_ms": 235119,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAAP9700022"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4zlRCThoy7Wops9GF11kQX"
        },
        "href": "https://api.spotify.com/v1/tracks/4zlRCThoy7Wops9GF11kQX",
        "id": "4zlRCThoy7Wops9GF11kQX",
        "is_local": false,
        "is_playable": true,
        "name": "Nothing Lasts Forever",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/c24389ebfc0953ca0fe2a4dac137e2d2e6772f0e?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:4zlRCThoy7Wops9GF11kQX"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 20
  },
  "type": "playlist",
  "uri": "spotify:playlist:72mQfEidYOYCM5hUqqMKlp"
};

/***/ })

/******/ });