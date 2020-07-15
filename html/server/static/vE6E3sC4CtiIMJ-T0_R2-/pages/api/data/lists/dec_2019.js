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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0+hL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/1waxtEBlUiNXhXEYgrkDgk"
  },
  "followers": {
    "href": null,
    "total": 1
  },
  "href": "https://api.spotify.com/v1/playlists/1waxtEBlUiNXhXEYgrkDgk?type=track,episode",
  "id": "1waxtEBlUiNXhXEYgrkDgk",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b2735e31eefd8cf0535c67798fcaab67616d0000b2736550d84ed6d3b7d8856c3878ab67616d0000b2739feb6be64c809c0c80551cc9ab67616d0000b273ba6d68ac51c398ad00da9a46",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b2735e31eefd8cf0535c67798fcaab67616d0000b2736550d84ed6d3b7d8856c3878ab67616d0000b2739feb6be64c809c0c80551cc9ab67616d0000b273ba6d68ac51c398ad00da9a46",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b2735e31eefd8cf0535c67798fcaab67616d0000b2736550d84ed6d3b7d8856c3878ab67616d0000b2739feb6be64c809c0c80551cc9ab67616d0000b273ba6d68ac51c398ad00da9a46",
    "width": 60
  }],
  "name": "2019 smash hits",
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
    "share_id": "_uOwCc4nSSSKZ66xIFXDyw",
    "share_url": "https://open.spotify.com/playlist/1waxtEBlUiNXhXEYgrkDgk?si=_uOwCc4nSSSKZ66xIFXDyw",
    "uri": "spotify:playlist:1waxtEBlUiNXhXEYgrkDgk"
  },
  "snapshot_id": "NDYsOTE4ZGJlMjRjYWMwODIzNzZiZWE1MmMzYmYzOTA0ZTc0MDljZTdkMQ==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/1waxtEBlUiNXhXEYgrkDgk/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2019-12-24T23:21:33Z",
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
        "share_id": "I5UvQJ_5Rr6Ewc9ODRORGg",
        "share_url": "https://open.spotify.com/track/1arEFIGFihaStHQSBQAyVL?si=I5UvQJ_5Rr6Ewc9ODRORGg",
        "uri": "spotify:track:1arEFIGFihaStHQSBQAyVL"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4OdKVXxhqKvBH0rNyv5hn0"
            },
            "href": "https://api.spotify.com/v1/artists/4OdKVXxhqKvBH0rNyv5hn0",
            "id": "4OdKVXxhqKvBH0rNyv5hn0",
            "name": "Antonio Williams",
            "type": "artist",
            "uri": "spotify:artist:4OdKVXxhqKvBH0rNyv5hn0"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2gAaA8XU9yOXCgSbAQBdHO"
            },
            "href": "https://api.spotify.com/v1/artists/2gAaA8XU9yOXCgSbAQBdHO",
            "id": "2gAaA8XU9yOXCgSbAQBdHO",
            "name": "Kerry McCoy",
            "type": "artist",
            "uri": "spotify:artist:2gAaA8XU9yOXCgSbAQBdHO"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/15IptXkUnTozDs3Mjdk9bl"
          },
          "href": "https://api.spotify.com/v1/albums/15IptXkUnTozDs3Mjdk9bl",
          "id": "15IptXkUnTozDs3Mjdk9bl",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735e31eefd8cf0535c67798fca",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025e31eefd8cf0535c67798fca",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515e31eefd8cf0535c67798fca",
            "width": 64
          }],
          "name": "25th Street Sessions",
          "release_date": "2016-12-16",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:15IptXkUnTozDs3Mjdk9bl"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4OdKVXxhqKvBH0rNyv5hn0"
          },
          "href": "https://api.spotify.com/v1/artists/4OdKVXxhqKvBH0rNyv5hn0",
          "id": "4OdKVXxhqKvBH0rNyv5hn0",
          "name": "Antonio Williams",
          "type": "artist",
          "uri": "spotify:artist:4OdKVXxhqKvBH0rNyv5hn0"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2gAaA8XU9yOXCgSbAQBdHO"
          },
          "href": "https://api.spotify.com/v1/artists/2gAaA8XU9yOXCgSbAQBdHO",
          "id": "2gAaA8XU9yOXCgSbAQBdHO",
          "name": "Kerry McCoy",
          "type": "artist",
          "uri": "spotify:artist:2gAaA8XU9yOXCgSbAQBdHO"
        }],
        "disc_number": 1,
        "duration_ms": 246464,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USA2Z1611821"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1arEFIGFihaStHQSBQAyVL"
        },
        "href": "https://api.spotify.com/v1/tracks/1arEFIGFihaStHQSBQAyVL",
        "id": "1arEFIGFihaStHQSBQAyVL",
        "is_local": false,
        "is_playable": true,
        "name": "Changes",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/cca03a5050765ffd588a79e997fe4acc3f883bd6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1arEFIGFihaStHQSBQAyVL"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T04:59:39Z",
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
        "share_id": "PYnJ2uH4RWmVOqQLpqh55w",
        "share_url": "https://open.spotify.com/track/6PfKuEVOwNfuk5ZtKxrJYC?si=PYnJ2uH4RWmVOqQLpqh55w",
        "uri": "spotify:track:6PfKuEVOwNfuk5ZtKxrJYC"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3wKj5PmSpnrtz9n9hG2QCA"
            },
            "href": "https://api.spotify.com/v1/artists/3wKj5PmSpnrtz9n9hG2QCA",
            "id": "3wKj5PmSpnrtz9n9hG2QCA",
            "name": "Future Generations",
            "type": "artist",
            "uri": "spotify:artist:3wKj5PmSpnrtz9n9hG2QCA"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/41FwqxhlXrOy6Asy7fByGj"
          },
          "href": "https://api.spotify.com/v1/albums/41FwqxhlXrOy6Asy7fByGj",
          "id": "41FwqxhlXrOy6Asy7fByGj",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ba6d68ac51c398ad00da9a46",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ba6d68ac51c398ad00da9a46",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ba6d68ac51c398ad00da9a46",
            "width": 64
          }],
          "name": "All The Same",
          "release_date": "2018-06-08",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:41FwqxhlXrOy6Asy7fByGj"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3wKj5PmSpnrtz9n9hG2QCA"
          },
          "href": "https://api.spotify.com/v1/artists/3wKj5PmSpnrtz9n9hG2QCA",
          "id": "3wKj5PmSpnrtz9n9hG2QCA",
          "name": "Future Generations",
          "type": "artist",
          "uri": "spotify:artist:3wKj5PmSpnrtz9n9hG2QCA"
        }],
        "disc_number": 1,
        "duration_ms": 198383,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJMZ1800051"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6PfKuEVOwNfuk5ZtKxrJYC"
        },
        "href": "https://api.spotify.com/v1/tracks/6PfKuEVOwNfuk5ZtKxrJYC",
        "id": "6PfKuEVOwNfuk5ZtKxrJYC",
        "is_local": false,
        "is_playable": true,
        "name": "All The Same",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/d4a4b33bda2a6454f38d4fafc1d36aed299d5521?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6PfKuEVOwNfuk5ZtKxrJYC"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T00:13:33Z",
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
        "share_id": "yhRXEe8KSCaVbZpBkyIO1A",
        "share_url": "https://open.spotify.com/track/2oFIlJQXQEyppboBVqc4Uh?si=yhRXEe8KSCaVbZpBkyIO1A",
        "uri": "spotify:track:2oFIlJQXQEyppboBVqc4Uh"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1RPW4MVBs8ssPSeiaM01YH"
            },
            "href": "https://api.spotify.com/v1/artists/1RPW4MVBs8ssPSeiaM01YH",
            "id": "1RPW4MVBs8ssPSeiaM01YH",
            "name": "Operator Music Band",
            "type": "artist",
            "uri": "spotify:artist:1RPW4MVBs8ssPSeiaM01YH"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3DpvFzHYXsl8wA9Xlb3ZW7"
          },
          "href": "https://api.spotify.com/v1/albums/3DpvFzHYXsl8wA9Xlb3ZW7",
          "id": "3DpvFzHYXsl8wA9Xlb3ZW7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2739feb6be64c809c0c80551cc9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e029feb6be64c809c0c80551cc9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048519feb6be64c809c0c80551cc9",
            "width": 64
          }],
          "name": "Mondo",
          "release_date": "2019-07-30",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3DpvFzHYXsl8wA9Xlb3ZW7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1RPW4MVBs8ssPSeiaM01YH"
          },
          "href": "https://api.spotify.com/v1/artists/1RPW4MVBs8ssPSeiaM01YH",
          "id": "1RPW4MVBs8ssPSeiaM01YH",
          "name": "Operator Music Band",
          "type": "artist",
          "uri": "spotify:artist:1RPW4MVBs8ssPSeiaM01YH"
        }],
        "disc_number": 1,
        "duration_ms": 201173,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM6MZ1993901"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2oFIlJQXQEyppboBVqc4Uh"
        },
        "href": "https://api.spotify.com/v1/tracks/2oFIlJQXQEyppboBVqc4Uh",
        "id": "2oFIlJQXQEyppboBVqc4Uh",
        "is_local": false,
        "is_playable": true,
        "name": "Mondo",
        "popularity": 6,
        "preview_url": "https://p.scdn.co/mp3-preview/d4def449563bb1061f7732f5c9676a0b209dac27?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2oFIlJQXQEyppboBVqc4Uh"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:01:40Z",
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
        "share_id": "up6E1rbcTFWzL3H-VJVvgw",
        "share_url": "https://open.spotify.com/track/1Ngmwr134PMuIAToxIjoRb?si=up6E1rbcTFWzL3H-VJVvgw",
        "uri": "spotify:track:1Ngmwr134PMuIAToxIjoRb"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5sucRI2dyTcvYWnW0VkRip"
            },
            "href": "https://api.spotify.com/v1/artists/5sucRI2dyTcvYWnW0VkRip",
            "id": "5sucRI2dyTcvYWnW0VkRip",
            "name": "Thunderbitch",
            "type": "artist",
            "uri": "spotify:artist:5sucRI2dyTcvYWnW0VkRip"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2iG70Yjy6X5DmWGvNNNjkE"
          },
          "href": "https://api.spotify.com/v1/albums/2iG70Yjy6X5DmWGvNNNjkE",
          "id": "2iG70Yjy6X5DmWGvNNNjkE",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736550d84ed6d3b7d8856c3878",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026550d84ed6d3b7d8856c3878",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516550d84ed6d3b7d8856c3878",
            "width": 64
          }],
          "name": "Thunderbitch",
          "release_date": "2015-08-29",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2iG70Yjy6X5DmWGvNNNjkE"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5sucRI2dyTcvYWnW0VkRip"
          },
          "href": "https://api.spotify.com/v1/artists/5sucRI2dyTcvYWnW0VkRip",
          "id": "5sucRI2dyTcvYWnW0VkRip",
          "name": "Thunderbitch",
          "type": "artist",
          "uri": "spotify:artist:5sucRI2dyTcvYWnW0VkRip"
        }],
        "disc_number": 1,
        "duration_ms": 199986,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USATO1400740"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1Ngmwr134PMuIAToxIjoRb"
        },
        "href": "https://api.spotify.com/v1/tracks/1Ngmwr134PMuIAToxIjoRb",
        "id": "1Ngmwr134PMuIAToxIjoRb",
        "is_local": false,
        "is_playable": true,
        "name": "Leather Jacket",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/8b0f3149205099ceaf10938bf7fc23d7141e9431?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1Ngmwr134PMuIAToxIjoRb"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T00:18:43Z",
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
        "share_id": "v9qylcmtTbuyppVNJlPrRw",
        "share_url": "https://open.spotify.com/track/1odDX4vqpKbBndVT14KSsq?si=v9qylcmtTbuyppVNJlPrRw",
        "uri": "spotify:track:1odDX4vqpKbBndVT14KSsq"
      },
      "track": {
        "album": {
          "album_type": "album",
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
            "spotify": "https://open.spotify.com/album/4WZISsRg4BaWPjDrdPCT8m"
          },
          "href": "https://api.spotify.com/v1/albums/4WZISsRg4BaWPjDrdPCT8m",
          "id": "4WZISsRg4BaWPjDrdPCT8m",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738e8e6e9de06fd605d7c58522",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028e8e6e9de06fd605d7c58522",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518e8e6e9de06fd605d7c58522",
            "width": 64
          }],
          "name": "Family of Aliens",
          "release_date": "2018-09-07",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4WZISsRg4BaWPjDrdPCT8m"
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
          "spotify": "https://open.spotify.com/track/1odDX4vqpKbBndVT14KSsq"
        },
        "href": "https://api.spotify.com/v1/tracks/1odDX4vqpKbBndVT14KSsq",
        "id": "1odDX4vqpKbBndVT14KSsq",
        "is_local": false,
        "is_playable": true,
        "name": "Cactus",
        "popularity": 24,
        "preview_url": "https://p.scdn.co/mp3-preview/b3eec600f96eb3ee54d7d9f8f48bbd5e32e3aaa3?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1odDX4vqpKbBndVT14KSsq"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:41:16Z",
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
        "share_id": "h5Z-gMIwSlOeXH99TtuSGA",
        "share_url": "https://open.spotify.com/track/0P9Ym65hdZ6F7TKgWC81sV?si=h5Z-gMIwSlOeXH99TtuSGA",
        "uri": "spotify:track:0P9Ym65hdZ6F7TKgWC81sV"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2KHY8H0FNemFh7qzOt7gpN"
            },
            "href": "https://api.spotify.com/v1/artists/2KHY8H0FNemFh7qzOt7gpN",
            "id": "2KHY8H0FNemFh7qzOt7gpN",
            "name": "French Vanilla",
            "type": "artist",
            "uri": "spotify:artist:2KHY8H0FNemFh7qzOt7gpN"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2BDvgKV5VGKbJ9oy4Vstq3"
          },
          "href": "https://api.spotify.com/v1/albums/2BDvgKV5VGKbJ9oy4Vstq3",
          "id": "2BDvgKV5VGKbJ9oy4Vstq3",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f0eef5825e2aabf58eba3223",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f0eef5825e2aabf58eba3223",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f0eef5825e2aabf58eba3223",
            "width": 64
          }],
          "name": "How Am I Not Myself?",
          "release_date": "2019-06-07",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2BDvgKV5VGKbJ9oy4Vstq3"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2KHY8H0FNemFh7qzOt7gpN"
          },
          "href": "https://api.spotify.com/v1/artists/2KHY8H0FNemFh7qzOt7gpN",
          "id": "2KHY8H0FNemFh7qzOt7gpN",
          "name": "French Vanilla",
          "type": "artist",
          "uri": "spotify:artist:2KHY8H0FNemFh7qzOt7gpN"
        }],
        "disc_number": 1,
        "duration_ms": 150937,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM4TX1964964"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0P9Ym65hdZ6F7TKgWC81sV"
        },
        "href": "https://api.spotify.com/v1/tracks/0P9Ym65hdZ6F7TKgWC81sV",
        "id": "0P9Ym65hdZ6F7TKgWC81sV",
        "is_local": false,
        "is_playable": true,
        "name": "Real or Not",
        "popularity": 21,
        "preview_url": "https://p.scdn.co/mp3-preview/c04a5a5d81464c60cbf5fe1f8a69c1adcea8ac0b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0P9Ym65hdZ6F7TKgWC81sV"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:04:02Z",
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
        "share_id": "UySwpiEvRDClYkoYk6YLDw",
        "share_url": "https://open.spotify.com/track/0b7sosQaoQiBJMAhhz3OGP?si=UySwpiEvRDClYkoYk6YLDw",
        "uri": "spotify:track:0b7sosQaoQiBJMAhhz3OGP"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2PDepyCtfybWn5UJv0DmKw"
            },
            "href": "https://api.spotify.com/v1/artists/2PDepyCtfybWn5UJv0DmKw",
            "id": "2PDepyCtfybWn5UJv0DmKw",
            "name": "Molly Nilsson",
            "type": "artist",
            "uri": "spotify:artist:2PDepyCtfybWn5UJv0DmKw"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6obvMVCOQ0Hw8A5CRbSJuP"
          },
          "href": "https://api.spotify.com/v1/albums/6obvMVCOQ0Hw8A5CRbSJuP",
          "id": "6obvMVCOQ0Hw8A5CRbSJuP",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738af84da11c07111b53bf9d11",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028af84da11c07111b53bf9d11",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518af84da11c07111b53bf9d11",
            "width": 64
          }],
          "name": "2020",
          "release_date": "2018-10-21",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6obvMVCOQ0Hw8A5CRbSJuP"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2PDepyCtfybWn5UJv0DmKw"
          },
          "href": "https://api.spotify.com/v1/artists/2PDepyCtfybWn5UJv0DmKw",
          "id": "2PDepyCtfybWn5UJv0DmKw",
          "name": "Molly Nilsson",
          "type": "artist",
          "uri": "spotify:artist:2PDepyCtfybWn5UJv0DmKw"
        }],
        "disc_number": 1,
        "duration_ms": 213130,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "SEYVA1800109"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0b7sosQaoQiBJMAhhz3OGP"
        },
        "href": "https://api.spotify.com/v1/tracks/0b7sosQaoQiBJMAhhz3OGP",
        "id": "0b7sosQaoQiBJMAhhz3OGP",
        "is_local": false,
        "is_playable": true,
        "name": "Days of Dust",
        "popularity": 27,
        "preview_url": "https://p.scdn.co/mp3-preview/644b7c2b7a6645a57a15c80241654cc3bc6defe2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:0b7sosQaoQiBJMAhhz3OGP"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:33:07Z",
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
        "share_id": "px_c076wQ_SbBM2IpyOlew",
        "share_url": "https://open.spotify.com/track/2En9hPrl1Z2raU3CeYleUI?si=px_c076wQ_SbBM2IpyOlew",
        "uri": "spotify:track:2En9hPrl1Z2raU3CeYleUI"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2JFTRDi5v7JtqoouVe1z5D"
            },
            "href": "https://api.spotify.com/v1/artists/2JFTRDi5v7JtqoouVe1z5D",
            "id": "2JFTRDi5v7JtqoouVe1z5D",
            "name": "Slow Pulp",
            "type": "artist",
            "uri": "spotify:artist:2JFTRDi5v7JtqoouVe1z5D"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2gSm64JocQqESwqWSdEnjA"
          },
          "href": "https://api.spotify.com/v1/albums/2gSm64JocQqESwqWSdEnjA",
          "id": "2gSm64JocQqESwqWSdEnjA",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dc724793e8cc6baa9280afe2",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dc724793e8cc6baa9280afe2",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dc724793e8cc6baa9280afe2",
            "width": 64
          }],
          "name": "Steel Birds",
          "release_date": "2018-11-01",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2gSm64JocQqESwqWSdEnjA"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2JFTRDi5v7JtqoouVe1z5D"
          },
          "href": "https://api.spotify.com/v1/artists/2JFTRDi5v7JtqoouVe1z5D",
          "id": "2JFTRDi5v7JtqoouVe1z5D",
          "name": "Slow Pulp",
          "type": "artist",
          "uri": "spotify:artist:2JFTRDi5v7JtqoouVe1z5D"
        }],
        "disc_number": 1,
        "duration_ms": 203500,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADX1830837"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2En9hPrl1Z2raU3CeYleUI"
        },
        "href": "https://api.spotify.com/v1/tracks/2En9hPrl1Z2raU3CeYleUI",
        "id": "2En9hPrl1Z2raU3CeYleUI",
        "is_local": false,
        "is_playable": true,
        "name": "Steel Birds",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/2058399776ff34078726242fb9808e241ba8c081?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2En9hPrl1Z2raU3CeYleUI"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T06:03:41Z",
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
        "share_id": "VLUAnkbwTVSGvo11vVV_Vg",
        "share_url": "https://open.spotify.com/track/4LHwT4iMefOqlHbgBE3Slj?si=VLUAnkbwTVSGvo11vVV_Vg",
        "uri": "spotify:track:4LHwT4iMefOqlHbgBE3Slj"
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
            "spotify": "https://open.spotify.com/album/25sq9h4c8DUJYaj67GWeqs"
          },
          "href": "https://api.spotify.com/v1/albums/25sq9h4c8DUJYaj67GWeqs",
          "id": "25sq9h4c8DUJYaj67GWeqs",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273fa2db32e748dbf6c9ff8c81b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02fa2db32e748dbf6c9ff8c81b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851fa2db32e748dbf6c9ff8c81b",
            "width": 64
          }],
          "name": "2AM",
          "release_date": "2019-08-23",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:25sq9h4c8DUJYaj67GWeqs"
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
        "duration_ms": 268413,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FR96X1901441"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4LHwT4iMefOqlHbgBE3Slj"
        },
        "href": "https://api.spotify.com/v1/tracks/4LHwT4iMefOqlHbgBE3Slj",
        "id": "4LHwT4iMefOqlHbgBE3Slj",
        "is_local": false,
        "is_playable": true,
        "name": "2AM",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/529edaba8323c2a3901bb0281a50a2bfa7214762?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4LHwT4iMefOqlHbgBE3Slj"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:35:16Z",
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
        "share_id": "T4SX0HxXTy6EFIzidXh_qQ",
        "share_url": "https://open.spotify.com/track/1uahtMMjNzfo4854aTvbXE?si=T4SX0HxXTy6EFIzidXh_qQ",
        "uri": "spotify:track:1uahtMMjNzfo4854aTvbXE"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/08q2kFjr9p4cJqTGU9xJgg"
            },
            "href": "https://api.spotify.com/v1/artists/08q2kFjr9p4cJqTGU9xJgg",
            "id": "08q2kFjr9p4cJqTGU9xJgg",
            "name": "pronoun",
            "type": "artist",
            "uri": "spotify:artist:08q2kFjr9p4cJqTGU9xJgg"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3DKAWelo1cJB6ifREPVtOo"
          },
          "href": "https://api.spotify.com/v1/albums/3DKAWelo1cJB6ifREPVtOo",
          "id": "3DKAWelo1cJB6ifREPVtOo",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d8b74654bdba0f5c38e3e6fa",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d8b74654bdba0f5c38e3e6fa",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d8b74654bdba0f5c38e3e6fa",
            "width": 64
          }],
          "name": "There's no one new around you.",
          "release_date": "2016-11-18",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:3DKAWelo1cJB6ifREPVtOo"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/08q2kFjr9p4cJqTGU9xJgg"
          },
          "href": "https://api.spotify.com/v1/artists/08q2kFjr9p4cJqTGU9xJgg",
          "id": "08q2kFjr9p4cJqTGU9xJgg",
          "name": "pronoun",
          "type": "artist",
          "uri": "spotify:artist:08q2kFjr9p4cJqTGU9xJgg"
        }],
        "disc_number": 1,
        "duration_ms": 229000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ4B61600010"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1uahtMMjNzfo4854aTvbXE"
        },
        "href": "https://api.spotify.com/v1/tracks/1uahtMMjNzfo4854aTvbXE",
        "id": "1uahtMMjNzfo4854aTvbXE",
        "is_local": false,
        "is_playable": true,
        "name": "a million other things",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/2b2a91c6bd7e4bd247c73cd535fbb7da3e76a2a9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1uahtMMjNzfo4854aTvbXE"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:05:08Z",
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
        "share_id": "lzAKr1jDR6imGxrlZ_OnsA",
        "share_url": "https://open.spotify.com/track/6EgiD9JhTjQQG2QVhFt0lx?si=lzAKr1jDR6imGxrlZ_OnsA",
        "uri": "spotify:track:6EgiD9JhTjQQG2QVhFt0lx"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6Pled8lBAODAviS574l1Q4"
            },
            "href": "https://api.spotify.com/v1/artists/6Pled8lBAODAviS574l1Q4",
            "id": "6Pled8lBAODAviS574l1Q4",
            "name": "Night Moves",
            "type": "artist",
            "uri": "spotify:artist:6Pled8lBAODAviS574l1Q4"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6E06hCaPnbNSR2KhVTa7CJ"
          },
          "href": "https://api.spotify.com/v1/albums/6E06hCaPnbNSR2KhVTa7CJ",
          "id": "6E06hCaPnbNSR2KhVTa7CJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737863afae3c66455589323457",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027863afae3c66455589323457",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517863afae3c66455589323457",
            "width": 64
          }],
          "name": "Pennied Days",
          "release_date": "2016-03-25",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:6E06hCaPnbNSR2KhVTa7CJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6Pled8lBAODAviS574l1Q4"
          },
          "href": "https://api.spotify.com/v1/artists/6Pled8lBAODAviS574l1Q4",
          "id": "6Pled8lBAODAviS574l1Q4",
          "name": "Night Moves",
          "type": "artist",
          "uri": "spotify:artist:6Pled8lBAODAviS574l1Q4"
        }],
        "disc_number": 1,
        "duration_ms": 216973,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1500753"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6EgiD9JhTjQQG2QVhFt0lx"
        },
        "href": "https://api.spotify.com/v1/tracks/6EgiD9JhTjQQG2QVhFt0lx",
        "id": "6EgiD9JhTjQQG2QVhFt0lx",
        "is_local": false,
        "is_playable": true,
        "name": "Alabama",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/2431fd0cc6622c04f9ac02b0e3c02291d225c5b4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:6EgiD9JhTjQQG2QVhFt0lx"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:55:49Z",
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
        "share_id": "u-6YAU40QWWZ-YmVUIRPdg",
        "share_url": "https://open.spotify.com/track/0TqfKWaEauMUQblfn5RznS?si=u-6YAU40QWWZ-YmVUIRPdg",
        "uri": "spotify:track:0TqfKWaEauMUQblfn5RznS"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2vygNfdnPBXah21ZrqhxYk"
            },
            "href": "https://api.spotify.com/v1/artists/2vygNfdnPBXah21ZrqhxYk",
            "id": "2vygNfdnPBXah21ZrqhxYk",
            "name": "A Certain Ratio",
            "type": "artist",
            "uri": "spotify:artist:2vygNfdnPBXah21ZrqhxYk"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/36Y1pJd0bxGrrlIGslT9wb"
          },
          "href": "https://api.spotify.com/v1/albums/36Y1pJd0bxGrrlIGslT9wb",
          "id": "36Y1pJd0bxGrrlIGslT9wb",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736632cef33487a0c786a5c0fb",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026632cef33487a0c786a5c0fb",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516632cef33487a0c786a5c0fb",
            "width": 64
          }],
          "name": "Houses In Motion",
          "release_date": "2019-04-03",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:36Y1pJd0bxGrrlIGslT9wb"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2vygNfdnPBXah21ZrqhxYk"
          },
          "href": "https://api.spotify.com/v1/artists/2vygNfdnPBXah21ZrqhxYk",
          "id": "2vygNfdnPBXah21ZrqhxYk",
          "name": "A Certain Ratio",
          "type": "artist",
          "uri": "spotify:artist:2vygNfdnPBXah21ZrqhxYk"
        }],
        "disc_number": 1,
        "duration_ms": 229122,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBR8R1900071"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0TqfKWaEauMUQblfn5RznS"
        },
        "href": "https://api.spotify.com/v1/tracks/0TqfKWaEauMUQblfn5RznS",
        "id": "0TqfKWaEauMUQblfn5RznS",
        "is_local": false,
        "is_playable": true,
        "name": "Houses In Motion - Single Version",
        "popularity": 24,
        "preview_url": "https://p.scdn.co/mp3-preview/f1b8694358b9e1e55831788bb019f094b570f63c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0TqfKWaEauMUQblfn5RznS"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2020-01-04T05:37:01Z",
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
        "share_id": "a0WUTOQ2TLq_mu-7O0OuXw",
        "share_url": "https://open.spotify.com/track/71ZT6LU4QXaHlfdeJrgKB7?si=a0WUTOQ2TLq_mu-7O0OuXw",
        "uri": "spotify:track:71ZT6LU4QXaHlfdeJrgKB7"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4YlhxCoA1qEgTHoOBaKu1t"
            },
            "href": "https://api.spotify.com/v1/artists/4YlhxCoA1qEgTHoOBaKu1t",
            "id": "4YlhxCoA1qEgTHoOBaKu1t",
            "name": "Magic Bronson",
            "type": "artist",
            "uri": "spotify:artist:4YlhxCoA1qEgTHoOBaKu1t"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0fXFG1Rjp14EDR5wo9s4js"
          },
          "href": "https://api.spotify.com/v1/albums/0fXFG1Rjp14EDR5wo9s4js",
          "id": "0fXFG1Rjp14EDR5wo9s4js",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27334aa95a83fc2073750d3a510",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0234aa95a83fc2073750d3a510",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485134aa95a83fc2073750d3a510",
            "width": 64
          }],
          "name": "Evil Plans (Deluxe Edition)",
          "release_date": "2019-06-07",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:0fXFG1Rjp14EDR5wo9s4js"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4YlhxCoA1qEgTHoOBaKu1t"
          },
          "href": "https://api.spotify.com/v1/artists/4YlhxCoA1qEgTHoOBaKu1t",
          "id": "4YlhxCoA1qEgTHoOBaKu1t",
          "name": "Magic Bronson",
          "type": "artist",
          "uri": "spotify:artist:4YlhxCoA1qEgTHoOBaKu1t"
        }],
        "disc_number": 1,
        "duration_ms": 220648,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ9H31800028"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/71ZT6LU4QXaHlfdeJrgKB7"
        },
        "href": "https://api.spotify.com/v1/tracks/71ZT6LU4QXaHlfdeJrgKB7",
        "id": "71ZT6LU4QXaHlfdeJrgKB7",
        "is_local": false,
        "is_playable": true,
        "name": "Evil Plans",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/df586266e158d68641ac60281c3ffc1aadc0fcd7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:71ZT6LU4QXaHlfdeJrgKB7"
      },
      "video_thumbnail": {
        "url": null
      }
    }],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 13
  },
  "type": "playlist",
  "uri": "spotify:playlist:1waxtEBlUiNXhXEYgrkDgk"
};

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0+hL");


/***/ })

/******/ });