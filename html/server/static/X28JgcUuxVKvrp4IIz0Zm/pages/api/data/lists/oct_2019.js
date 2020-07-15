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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NyJ4");


/***/ }),

/***/ "NyJ4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/17wAu8H3bnNfF6GZzw17C0"
  },
  "followers": {
    "href": null,
    "total": 2
  },
  "href": "https://api.spotify.com/v1/playlists/17wAu8H3bnNfF6GZzw17C0?type=track,episode",
  "id": "17wAu8H3bnNfF6GZzw17C0",
  "images": [{
    "height": 640,
    "url": "https://mosaic.scdn.co/640/ab67616d0000b27306564737c00ef490e47b0eafab67616d0000b2736550d84ed6d3b7d8856c3878ab67616d0000b273a17f657c12d5fa3543452d61ab67616d0000b273f67c07116d39352500737a51",
    "width": 640
  }, {
    "height": 300,
    "url": "https://mosaic.scdn.co/300/ab67616d0000b27306564737c00ef490e47b0eafab67616d0000b2736550d84ed6d3b7d8856c3878ab67616d0000b273a17f657c12d5fa3543452d61ab67616d0000b273f67c07116d39352500737a51",
    "width": 300
  }, {
    "height": 60,
    "url": "https://mosaic.scdn.co/60/ab67616d0000b27306564737c00ef490e47b0eafab67616d0000b2736550d84ed6d3b7d8856c3878ab67616d0000b273a17f657c12d5fa3543452d61ab67616d0000b273f67c07116d39352500737a51",
    "width": 60
  }],
  "name": "October 2019",
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
    "share_id": "_RNrre7xSL2TJsCrAbzmAw",
    "share_url": "https://open.spotify.com/playlist/17wAu8H3bnNfF6GZzw17C0?si=_RNrre7xSL2TJsCrAbzmAw",
    "uri": "spotify:playlist:17wAu8H3bnNfF6GZzw17C0"
  },
  "snapshot_id": "ODQsOWFhZDhmYzkyZWE3YzgyOTczZWFmYzJmMTljZDg3ZDBiNjI4MDdjYQ==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/17wAu8H3bnNfF6GZzw17C0/tracks?offset=0&limit=100&market=from_token&type=track,episode",
    "items": [{
      "added_at": "2019-09-23T21:10:39Z",
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
        "share_id": "WmR1rn-jQ4e4N8-pd6wDYw",
        "share_url": "https://open.spotify.com/track/79Ec0lnV4BPRT8zh8eFfds?si=WmR1rn-jQ4e4N8-pd6wDYw",
        "uri": "spotify:track:79Ec0lnV4BPRT8zh8eFfds"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4M1FpEWs2PeYfJe7xxJfhH"
            },
            "href": "https://api.spotify.com/v1/artists/4M1FpEWs2PeYfJe7xxJfhH",
            "id": "4M1FpEWs2PeYfJe7xxJfhH",
            "name": "Freddie Mercury",
            "type": "artist",
            "uri": "spotify:artist:4M1FpEWs2PeYfJe7xxJfhH"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7iUs6CPNH5uG3ORq64kP48"
          },
          "href": "https://api.spotify.com/v1/albums/7iUs6CPNH5uG3ORq64kP48",
          "id": "7iUs6CPNH5uG3ORq64kP48",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f67c07116d39352500737a51",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f67c07116d39352500737a51",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f67c07116d39352500737a51",
            "width": 64
          }],
          "name": "Messenger of the Gods: The Singles Collection",
          "release_date": "2016-09-02",
          "release_date_precision": "day",
          "total_tracks": 25,
          "type": "album",
          "uri": "spotify:album:7iUs6CPNH5uG3ORq64kP48"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4M1FpEWs2PeYfJe7xxJfhH"
          },
          "href": "https://api.spotify.com/v1/artists/4M1FpEWs2PeYfJe7xxJfhH",
          "id": "4M1FpEWs2PeYfJe7xxJfhH",
          "name": "Freddie Mercury",
          "type": "artist",
          "uri": "spotify:artist:4M1FpEWs2PeYfJe7xxJfhH"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5z78MGBVvkpjhOcr0oKYoE"
          },
          "href": "https://api.spotify.com/v1/artists/5z78MGBVvkpjhOcr0oKYoE",
          "id": "5z78MGBVvkpjhOcr0oKYoE",
          "name": "Dave Clark",
          "type": "artist",
          "uri": "spotify:artist:5z78MGBVvkpjhOcr0oKYoE"
        }],
        "disc_number": 1,
        "duration_ms": 241786,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBVDL1600250"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/79Ec0lnV4BPRT8zh8eFfds"
        },
        "href": "https://api.spotify.com/v1/tracks/79Ec0lnV4BPRT8zh8eFfds",
        "id": "79Ec0lnV4BPRT8zh8eFfds",
        "is_local": false,
        "is_playable": true,
        "name": "Time",
        "popularity": 12,
        "preview_url": "https://p.scdn.co/mp3-preview/35b8847d78f803f46e3665aa1aae3beba0327ffb?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:79Ec0lnV4BPRT8zh8eFfds"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-11T18:22:03Z",
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
        "share_id": "khdYuiwKSLa6zsSGnoPNQg",
        "share_url": "https://open.spotify.com/track/5xAZDlzqvI1wflhB4mzYoz?si=khdYuiwKSLa6zsSGnoPNQg",
        "uri": "spotify:track:5xAZDlzqvI1wflhB4mzYoz"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7jefIIksOi1EazgRTfW2Pk"
            },
            "href": "https://api.spotify.com/v1/artists/7jefIIksOi1EazgRTfW2Pk",
            "id": "7jefIIksOi1EazgRTfW2Pk",
            "name": "Electric Light Orchestra",
            "type": "artist",
            "uri": "spotify:artist:7jefIIksOi1EazgRTfW2Pk"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7cuUWuHoLgx9SzUONHSg89"
          },
          "href": "https://api.spotify.com/v1/albums/7cuUWuHoLgx9SzUONHSg89",
          "id": "7cuUWuHoLgx9SzUONHSg89",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a17f657c12d5fa3543452d61",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a17f657c12d5fa3543452d61",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a17f657c12d5fa3543452d61",
            "width": 64
          }],
          "name": "On the Third Day",
          "release_date": "1973-11-01",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:7cuUWuHoLgx9SzUONHSg89"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7jefIIksOi1EazgRTfW2Pk"
          },
          "href": "https://api.spotify.com/v1/artists/7jefIIksOi1EazgRTfW2Pk",
          "id": "7jefIIksOi1EazgRTfW2Pk",
          "name": "Electric Light Orchestra",
          "type": "artist",
          "uri": "spotify:artist:7jefIIksOi1EazgRTfW2Pk"
        }],
        "disc_number": 1,
        "duration_ms": 249226,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19805098"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5xAZDlzqvI1wflhB4mzYoz"
        },
        "href": "https://api.spotify.com/v1/tracks/5xAZDlzqvI1wflhB4mzYoz",
        "id": "5xAZDlzqvI1wflhB4mzYoz",
        "is_local": false,
        "is_playable": true,
        "name": "Showdown",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/f3a860b119f997a2ba5d3ea426d5c48c4175271f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:5xAZDlzqvI1wflhB4mzYoz"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-08-26T22:40:25Z",
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
        "share_id": "drwVf7IbSJioO8Wf935tMQ",
        "share_url": "https://open.spotify.com/track/0EvvWjmA1nqtYcsQTAbdea?si=drwVf7IbSJioO8Wf935tMQ",
        "uri": "spotify:track:0EvvWjmA1nqtYcsQTAbdea"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kTZfKGZEj8R76z3ooKOF1"
            },
            "href": "https://api.spotify.com/v1/artists/2kTZfKGZEj8R76z3ooKOF1",
            "id": "2kTZfKGZEj8R76z3ooKOF1",
            "name": "Your Smith",
            "type": "artist",
            "uri": "spotify:artist:2kTZfKGZEj8R76z3ooKOF1"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5B3XDPfMYwIcoB1mAS0IJm"
          },
          "href": "https://api.spotify.com/v1/albums/5B3XDPfMYwIcoB1mAS0IJm",
          "id": "5B3XDPfMYwIcoB1mAS0IJm",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27306564737c00ef490e47b0eaf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0206564737c00ef490e47b0eaf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485106564737c00ef490e47b0eaf",
            "width": 64
          }],
          "name": "You Could've Told Me",
          "release_date": "2019-08-23",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5B3XDPfMYwIcoB1mAS0IJm"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2kTZfKGZEj8R76z3ooKOF1"
          },
          "href": "https://api.spotify.com/v1/artists/2kTZfKGZEj8R76z3ooKOF1",
          "id": "2kTZfKGZEj8R76z3ooKOF1",
          "name": "Your Smith",
          "type": "artist",
          "uri": "spotify:artist:2kTZfKGZEj8R76z3ooKOF1"
        }],
        "disc_number": 1,
        "duration_ms": 198191,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM24S1923515"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0EvvWjmA1nqtYcsQTAbdea"
        },
        "href": "https://api.spotify.com/v1/tracks/0EvvWjmA1nqtYcsQTAbdea",
        "id": "0EvvWjmA1nqtYcsQTAbdea",
        "is_local": false,
        "is_playable": true,
        "name": "You Could've Told Me",
        "popularity": 35,
        "preview_url": "https://p.scdn.co/mp3-preview/b57988954488ba05afe13d46ce9bf46d116bcfa4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0EvvWjmA1nqtYcsQTAbdea"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-23T21:24:39Z",
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
        "share_id": "z7DlA_UtQUKSlVzJZSiS4A",
        "share_url": "https://open.spotify.com/track/1Ngmwr134PMuIAToxIjoRb?si=z7DlA_UtQUKSlVzJZSiS4A",
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
      "added_at": "2019-09-12T19:03:16Z",
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
        "share_id": "MgLK8EsuSCm-8w2fNMu2hw",
        "share_url": "https://open.spotify.com/track/0167rjkh1i0R2vM8H8qu00?si=MgLK8EsuSCm-8w2fNMu2hw",
        "uri": "spotify:track:0167rjkh1i0R2vM8H8qu00"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6emHCSoB4tJxTVXakbrpPz"
            },
            "href": "https://api.spotify.com/v1/artists/6emHCSoB4tJxTVXakbrpPz",
            "id": "6emHCSoB4tJxTVXakbrpPz",
            "name": "Karen O",
            "type": "artist",
            "uri": "spotify:artist:6emHCSoB4tJxTVXakbrpPz"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2dBj3prW7gP9bCCOIQeDUf"
            },
            "href": "https://api.spotify.com/v1/artists/2dBj3prW7gP9bCCOIQeDUf",
            "id": "2dBj3prW7gP9bCCOIQeDUf",
            "name": "Danger Mouse",
            "type": "artist",
            "uri": "spotify:artist:2dBj3prW7gP9bCCOIQeDUf"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/56H9Xp1X7QENnDuAMp5VU2"
          },
          "href": "https://api.spotify.com/v1/albums/56H9Xp1X7QENnDuAMp5VU2",
          "id": "56H9Xp1X7QENnDuAMp5VU2",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273fe4cd7162a092eca0dfe55a5",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02fe4cd7162a092eca0dfe55a5",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851fe4cd7162a092eca0dfe55a5",
            "width": 64
          }],
          "name": "Turn The Light",
          "release_date": "2019-03-11",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:56H9Xp1X7QENnDuAMp5VU2"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6emHCSoB4tJxTVXakbrpPz"
          },
          "href": "https://api.spotify.com/v1/artists/6emHCSoB4tJxTVXakbrpPz",
          "id": "6emHCSoB4tJxTVXakbrpPz",
          "name": "Karen O",
          "type": "artist",
          "uri": "spotify:artist:6emHCSoB4tJxTVXakbrpPz"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2dBj3prW7gP9bCCOIQeDUf"
          },
          "href": "https://api.spotify.com/v1/artists/2dBj3prW7gP9bCCOIQeDUf",
          "id": "2dBj3prW7gP9bCCOIQeDUf",
          "name": "Danger Mouse",
          "type": "artist",
          "uri": "spotify:artist:2dBj3prW7gP9bCCOIQeDUf"
        }],
        "disc_number": 1,
        "duration_ms": 199320,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMRSZ1801991"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0167rjkh1i0R2vM8H8qu00"
        },
        "href": "https://api.spotify.com/v1/tracks/0167rjkh1i0R2vM8H8qu00",
        "id": "0167rjkh1i0R2vM8H8qu00",
        "is_local": false,
        "is_playable": true,
        "name": "Turn The Light",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/68939cef55ffe15584921e5314f6fd148997d863?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0167rjkh1i0R2vM8H8qu00"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-10-03T17:38:26Z",
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
        "share_id": "4sTf49X9T6CSVPU1AFwzOA",
        "share_url": "https://open.spotify.com/track/2apLrBlEQvFa8ob0dQcu6i?si=4sTf49X9T6CSVPU1AFwzOA",
        "uri": "spotify:track:2apLrBlEQvFa8ob0dQcu6i"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6dgwEwnK0YtDfS9XhRwBTG"
            },
            "href": "https://api.spotify.com/v1/artists/6dgwEwnK0YtDfS9XhRwBTG",
            "id": "6dgwEwnK0YtDfS9XhRwBTG",
            "name": "Broken Bells",
            "type": "artist",
            "uri": "spotify:artist:6dgwEwnK0YtDfS9XhRwBTG"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1HXt6ZlEaXQEEt1YjxHUPy"
          },
          "href": "https://api.spotify.com/v1/albums/1HXt6ZlEaXQEEt1YjxHUPy",
          "id": "1HXt6ZlEaXQEEt1YjxHUPy",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273946e067107dc24a09fd4e44c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02946e067107dc24a09fd4e44c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851946e067107dc24a09fd4e44c",
            "width": 64
          }],
          "name": "Good Luck",
          "release_date": "2019-09-27",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1HXt6ZlEaXQEEt1YjxHUPy"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6dgwEwnK0YtDfS9XhRwBTG"
          },
          "href": "https://api.spotify.com/v1/artists/6dgwEwnK0YtDfS9XhRwBTG",
          "id": "6dgwEwnK0YtDfS9XhRwBTG",
          "name": "Broken Bells",
          "type": "artist",
          "uri": "spotify:artist:6dgwEwnK0YtDfS9XhRwBTG"
        }],
        "disc_number": 1,
        "duration_ms": 206813,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QMEU31819028"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2apLrBlEQvFa8ob0dQcu6i"
        },
        "href": "https://api.spotify.com/v1/tracks/2apLrBlEQvFa8ob0dQcu6i",
        "id": "2apLrBlEQvFa8ob0dQcu6i",
        "is_local": false,
        "is_playable": true,
        "name": "Good Luck",
        "popularity": 60,
        "preview_url": "https://p.scdn.co/mp3-preview/307be1b8f100cf36e66d38d5ce4772bc27630e72?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2apLrBlEQvFa8ob0dQcu6i"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-23T21:01:30Z",
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
        "share_id": "FrLM4PxWSRaZ8GkTswcaMw",
        "share_url": "https://open.spotify.com/track/2blOXai13SQaV5X0jqg4Ff?si=FrLM4PxWSRaZ8GkTswcaMw",
        "uri": "spotify:track:2blOXai13SQaV5X0jqg4Ff"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4yZ1I5mV8oGX5rfSuygqbv"
            },
            "href": "https://api.spotify.com/v1/artists/4yZ1I5mV8oGX5rfSuygqbv",
            "id": "4yZ1I5mV8oGX5rfSuygqbv",
            "name": "Gateway Drugs",
            "type": "artist",
            "uri": "spotify:artist:4yZ1I5mV8oGX5rfSuygqbv"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5VDocLl1IAhVMBuL3HjohO"
          },
          "href": "https://api.spotify.com/v1/albums/5VDocLl1IAhVMBuL3HjohO",
          "id": "5VDocLl1IAhVMBuL3HjohO",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bba3ef4ac1c336766986131f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bba3ef4ac1c336766986131f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bba3ef4ac1c336766986131f",
            "width": 64
          }],
          "name": "Gateway Drugs",
          "release_date": "2015-09-01",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:5VDocLl1IAhVMBuL3HjohO"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4yZ1I5mV8oGX5rfSuygqbv"
          },
          "href": "https://api.spotify.com/v1/artists/4yZ1I5mV8oGX5rfSuygqbv",
          "id": "4yZ1I5mV8oGX5rfSuygqbv",
          "name": "Gateway Drugs",
          "type": "artist",
          "uri": "spotify:artist:4yZ1I5mV8oGX5rfSuygqbv"
        }],
        "disc_number": 1,
        "duration_ms": 227755,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QM4DW1594813"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2blOXai13SQaV5X0jqg4Ff"
        },
        "href": "https://api.spotify.com/v1/tracks/2blOXai13SQaV5X0jqg4Ff",
        "id": "2blOXai13SQaV5X0jqg4Ff",
        "is_local": false,
        "is_playable": true,
        "name": "Summer Time",
        "popularity": 39,
        "preview_url": "https://p.scdn.co/mp3-preview/28ba797e1a31332e28aecc05ba455ed917c36261?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2blOXai13SQaV5X0jqg4Ff"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-18T18:28:15Z",
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
        "share_id": "MKO3UfuiQKKxN-msIkanGQ",
        "share_url": "https://open.spotify.com/track/6zRBNkFmcNLgb3mOLmUK8i?si=MKO3UfuiQKKxN-msIkanGQ",
        "uri": "spotify:track:6zRBNkFmcNLgb3mOLmUK8i"
      },
      "track": {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/68NOjWuVYBRXzYwhel3jAl"
            },
            "href": "https://api.spotify.com/v1/artists/68NOjWuVYBRXzYwhel3jAl",
            "id": "68NOjWuVYBRXzYwhel3jAl",
            "name": "SIAMES",
            "type": "artist",
            "uri": "spotify:artist:68NOjWuVYBRXzYwhel3jAl"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/54Tu4voMoq7IC5lEAFiOsn"
          },
          "href": "https://api.spotify.com/v1/albums/54Tu4voMoq7IC5lEAFiOsn",
          "id": "54Tu4voMoq7IC5lEAFiOsn",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736031abc846e4815d43383665",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026031abc846e4815d43383665",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516031abc846e4815d43383665",
            "width": 64
          }],
          "name": "Home",
          "release_date": "2020-03-13",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:54Tu4voMoq7IC5lEAFiOsn"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/68NOjWuVYBRXzYwhel3jAl"
          },
          "href": "https://api.spotify.com/v1/artists/68NOjWuVYBRXzYwhel3jAl",
          "id": "68NOjWuVYBRXzYwhel3jAl",
          "name": "SIAMES",
          "type": "artist",
          "uri": "spotify:artist:68NOjWuVYBRXzYwhel3jAl"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/56v6nmscLs2EGMSvg3JrQI"
          },
          "href": "https://api.spotify.com/v1/artists/56v6nmscLs2EGMSvg3JrQI",
          "id": "56v6nmscLs2EGMSvg3JrQI",
          "name": "Barbie Williams",
          "type": "artist",
          "uri": "spotify:artist:56v6nmscLs2EGMSvg3JrQI"
        }],
        "disc_number": 1,
        "duration_ms": 215500,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCAEK1999297"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6zRBNkFmcNLgb3mOLmUK8i"
        },
        "href": "https://api.spotify.com/v1/tracks/6zRBNkFmcNLgb3mOLmUK8i",
        "id": "6zRBNkFmcNLgb3mOLmUK8i",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7uKTSZIGG9aFJtU2HIda2O"
          },
          "href": "https://api.spotify.com/v1/tracks/7uKTSZIGG9aFJtU2HIda2O",
          "id": "7uKTSZIGG9aFJtU2HIda2O",
          "type": "track",
          "uri": "spotify:track:7uKTSZIGG9aFJtU2HIda2O"
        },
        "name": "Summer Nights",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/93665d72745ca505879239fdb2cc4917321ccc84?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:6zRBNkFmcNLgb3mOLmUK8i"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-08-26T20:46:42Z",
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
        "share_id": "8NpKB7WwTQugSP-uNqt5Ng",
        "share_url": "https://open.spotify.com/track/4LHwT4iMefOqlHbgBE3Slj?si=8NpKB7WwTQugSP-uNqt5Ng",
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
      "added_at": "2019-08-14T19:41:53Z",
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
        "share_id": "mGXcGpVFTGCo9us1gQdgZQ",
        "share_url": "https://open.spotify.com/track/6QIw7F84ukZy4onuTVZVLd?si=mGXcGpVFTGCo9us1gQdgZQ",
        "uri": "spotify:track:6QIw7F84ukZy4onuTVZVLd"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0oNT7doR0CV9mAXYDSk8Tx"
            },
            "href": "https://api.spotify.com/v1/artists/0oNT7doR0CV9mAXYDSk8Tx",
            "id": "0oNT7doR0CV9mAXYDSk8Tx",
            "name": "FLOOR CRY",
            "type": "artist",
            "uri": "spotify:artist:0oNT7doR0CV9mAXYDSk8Tx"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/22ojz9iEWcGbCLgoKVR5So"
          },
          "href": "https://api.spotify.com/v1/albums/22ojz9iEWcGbCLgoKVR5So",
          "id": "22ojz9iEWcGbCLgoKVR5So",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2730621b847a561f0695a72cd16",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e020621b847a561f0695a72cd16",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048510621b847a561f0695a72cd16",
            "width": 64
          }],
          "name": "Drive",
          "release_date": "2018-05-27",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:22ojz9iEWcGbCLgoKVR5So"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0oNT7doR0CV9mAXYDSk8Tx"
          },
          "href": "https://api.spotify.com/v1/artists/0oNT7doR0CV9mAXYDSk8Tx",
          "id": "0oNT7doR0CV9mAXYDSk8Tx",
          "name": "FLOOR CRY",
          "type": "artist",
          "uri": "spotify:artist:0oNT7doR0CV9mAXYDSk8Tx"
        }],
        "disc_number": 1,
        "duration_ms": 206513,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZDA41801869"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6QIw7F84ukZy4onuTVZVLd"
        },
        "href": "https://api.spotify.com/v1/tracks/6QIw7F84ukZy4onuTVZVLd",
        "id": "6QIw7F84ukZy4onuTVZVLd",
        "is_local": false,
        "is_playable": true,
        "name": "Drive",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/934d8790b039b94c2d69f124c0eb5b1e2b1369dc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6QIw7F84ukZy4onuTVZVLd"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-10-04T20:55:01Z",
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
        "share_id": "v6QCtr_ATDC8MN2pR9VYrA",
        "share_url": "https://open.spotify.com/track/7DtSSDpIt8IvZSwNoEN5Xg?si=v6QCtr_ATDC8MN2pR9VYrA",
        "uri": "spotify:track:7DtSSDpIt8IvZSwNoEN5Xg"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5x3hUNIfDPxP1Kr0ZaGs64"
            },
            "href": "https://api.spotify.com/v1/artists/5x3hUNIfDPxP1Kr0ZaGs64",
            "id": "5x3hUNIfDPxP1Kr0ZaGs64",
            "name": "Saintseneca",
            "type": "artist",
            "uri": "spotify:artist:5x3hUNIfDPxP1Kr0ZaGs64"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0DonBdMNRMQyCwfF2Nnk4J"
          },
          "href": "https://api.spotify.com/v1/albums/0DonBdMNRMQyCwfF2Nnk4J",
          "id": "0DonBdMNRMQyCwfF2Nnk4J",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bd5af3eb89589e275477631b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bd5af3eb89589e275477631b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bd5af3eb89589e275477631b",
            "width": 64
          }],
          "name": "Wait A Minute",
          "release_date": "2019-04-03",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0DonBdMNRMQyCwfF2Nnk4J"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5x3hUNIfDPxP1Kr0ZaGs64"
          },
          "href": "https://api.spotify.com/v1/artists/5x3hUNIfDPxP1Kr0ZaGs64",
          "id": "5x3hUNIfDPxP1Kr0ZaGs64",
          "name": "Saintseneca",
          "type": "artist",
          "uri": "spotify:artist:5x3hUNIfDPxP1Kr0ZaGs64"
        }],
        "disc_number": 1,
        "duration_ms": 203488,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEP41916001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7DtSSDpIt8IvZSwNoEN5Xg"
        },
        "href": "https://api.spotify.com/v1/tracks/7DtSSDpIt8IvZSwNoEN5Xg",
        "id": "7DtSSDpIt8IvZSwNoEN5Xg",
        "is_local": false,
        "is_playable": true,
        "name": "Wait A Minute",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/054a13b324ae36b4559c108e92d1a9c835cf39a0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7DtSSDpIt8IvZSwNoEN5Xg"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-11T05:37:31Z",
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
        "share_id": "P7PlqjfhS6-7Zkw9IWXVoQ",
        "share_url": "https://open.spotify.com/track/0P9Ym65hdZ6F7TKgWC81sV?si=P7PlqjfhS6-7Zkw9IWXVoQ",
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
      "added_at": "2019-09-23T20:25:35Z",
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
        "share_id": "Jkjc2197ShyND9xSvlJGsA",
        "share_url": "https://open.spotify.com/track/2oFIlJQXQEyppboBVqc4Uh?si=Jkjc2197ShyND9xSvlJGsA",
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
      "added_at": "2019-10-03T00:32:11Z",
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
        "share_id": "0PcLuOoeRLK9u7iqe2OR8A",
        "share_url": "https://open.spotify.com/track/5mjMp0LgZjSJnw2i7cRKMl?si=0PcLuOoeRLK9u7iqe2OR8A",
        "uri": "spotify:track:5mjMp0LgZjSJnw2i7cRKMl"
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
            "spotify": "https://open.spotify.com/album/7pg8T6pajjHVZbiyB8bGxo"
          },
          "href": "https://api.spotify.com/v1/albums/7pg8T6pajjHVZbiyB8bGxo",
          "id": "7pg8T6pajjHVZbiyB8bGxo",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e73a1a912f761d1a8b57c43b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e73a1a912f761d1a8b57c43b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e73a1a912f761d1a8b57c43b",
            "width": 64
          }],
          "name": "Two Hands",
          "release_date": "2019-10-11",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7pg8T6pajjHVZbiyB8bGxo"
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
        "duration_ms": 211560,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAFL1900262"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5mjMp0LgZjSJnw2i7cRKMl"
        },
        "href": "https://api.spotify.com/v1/tracks/5mjMp0LgZjSJnw2i7cRKMl",
        "id": "5mjMp0LgZjSJnw2i7cRKMl",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6N1ngx4OdhaksnPwMXKUFe"
          },
          "href": "https://api.spotify.com/v1/tracks/6N1ngx4OdhaksnPwMXKUFe",
          "id": "6N1ngx4OdhaksnPwMXKUFe",
          "type": "track",
          "uri": "spotify:track:6N1ngx4OdhaksnPwMXKUFe"
        },
        "name": "Forgotten Eyes",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/1d2dbde81661befe84381769cd30457be01bc412?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5mjMp0LgZjSJnw2i7cRKMl"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-08-07T20:41:04Z",
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
        "share_id": "4apYeWYyQKGCEVL_jfetGw",
        "share_url": "https://open.spotify.com/track/0qsyhfujAr0EhX4Bv6I5zh?si=4apYeWYyQKGCEVL_jfetGw",
        "uri": "spotify:track:0qsyhfujAr0EhX4Bv6I5zh"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0JnhdXEQfVjoY1OgwTExwO"
            },
            "href": "https://api.spotify.com/v1/artists/0JnhdXEQfVjoY1OgwTExwO",
            "id": "0JnhdXEQfVjoY1OgwTExwO",
            "name": "MUNYA",
            "type": "artist",
            "uri": "spotify:artist:0JnhdXEQfVjoY1OgwTExwO"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4vQ1tygew4t6ohz5tg0PGQ"
          },
          "href": "https://api.spotify.com/v1/albums/4vQ1tygew4t6ohz5tg0PGQ",
          "id": "4vQ1tygew4t6ohz5tg0PGQ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733a22aa0b564e6c7336c9dcad",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023a22aa0b564e6c7336c9dcad",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513a22aa0b564e6c7336c9dcad",
            "width": 64
          }],
          "name": "If I'm Gone Tomorrow (It's Because of Aliens)",
          "release_date": "2018-09-18",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4vQ1tygew4t6ohz5tg0PGQ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0JnhdXEQfVjoY1OgwTExwO"
          },
          "href": "https://api.spotify.com/v1/artists/0JnhdXEQfVjoY1OgwTExwO",
          "id": "0JnhdXEQfVjoY1OgwTExwO",
          "name": "MUNYA",
          "type": "artist",
          "uri": "spotify:artist:0JnhdXEQfVjoY1OgwTExwO"
        }],
        "disc_number": 1,
        "duration_ms": 167517,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZBXN1800901"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0qsyhfujAr0EhX4Bv6I5zh"
        },
        "href": "https://api.spotify.com/v1/tracks/0qsyhfujAr0EhX4Bv6I5zh",
        "id": "0qsyhfujAr0EhX4Bv6I5zh",
        "is_local": false,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7oIcmESw6LC7vR6p7jOk4r"
          },
          "href": "https://api.spotify.com/v1/tracks/7oIcmESw6LC7vR6p7jOk4r",
          "id": "7oIcmESw6LC7vR6p7jOk4r",
          "type": "track",
          "uri": "spotify:track:7oIcmESw6LC7vR6p7jOk4r"
        },
        "name": "If I'm Gone Tomorrow (It's Because of Aliens)",
        "popularity": 29,
        "preview_url": "https://p.scdn.co/mp3-preview/c55dad80f9c6db1302c838e00d04ff03cbd59f5a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0qsyhfujAr0EhX4Bv6I5zh"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-11T18:21:34Z",
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
        "share_id": "5RZDJx_LQemVseCfD2t1VQ",
        "share_url": "https://open.spotify.com/track/0xifPbwMj64cdImwGJ9kxO?si=5RZDJx_LQemVseCfD2t1VQ",
        "uri": "spotify:track:0xifPbwMj64cdImwGJ9kxO"
      },
      "track": {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4Em1Ttxf3w2t0QtKYtYImx"
            },
            "href": "https://api.spotify.com/v1/artists/4Em1Ttxf3w2t0QtKYtYImx",
            "id": "4Em1Ttxf3w2t0QtKYtYImx",
            "name": "Mike Edge",
            "type": "artist",
            "uri": "spotify:artist:4Em1Ttxf3w2t0QtKYtYImx"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7GWhMHRczkhkQCUAD9Q2v1"
          },
          "href": "https://api.spotify.com/v1/albums/7GWhMHRczkhkQCUAD9Q2v1",
          "id": "7GWhMHRczkhkQCUAD9Q2v1",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ed0bca873a82d6d99aaa11da",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ed0bca873a82d6d99aaa11da",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ed0bca873a82d6d99aaa11da",
            "width": 64
          }],
          "name": "Mike Edge",
          "release_date": "2017-05-12",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:7GWhMHRczkhkQCUAD9Q2v1"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4Em1Ttxf3w2t0QtKYtYImx"
          },
          "href": "https://api.spotify.com/v1/artists/4Em1Ttxf3w2t0QtKYtYImx",
          "id": "4Em1Ttxf3w2t0QtKYtYImx",
          "name": "Mike Edge",
          "type": "artist",
          "uri": "spotify:artist:4Em1Ttxf3w2t0QtKYtYImx"
        }],
        "disc_number": 1,
        "duration_ms": 217977,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1777952"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0xifPbwMj64cdImwGJ9kxO"
        },
        "href": "https://api.spotify.com/v1/tracks/0xifPbwMj64cdImwGJ9kxO",
        "id": "0xifPbwMj64cdImwGJ9kxO",
        "is_local": false,
        "is_playable": true,
        "name": "Don't Worry",
        "popularity": 14,
        "preview_url": "https://p.scdn.co/mp3-preview/7a37c516f8bd9d0f224e84e4ca05091e3e482902?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0xifPbwMj64cdImwGJ9kxO"
      },
      "video_thumbnail": {
        "url": null
      }
    }, {
      "added_at": "2019-09-23T21:09:00Z",
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
        "share_id": "-uS2c8BUQBqKCFsi3l5pMQ",
        "share_url": "https://open.spotify.com/track/4SeXSURWGvprP5a1uAWSoE?si=-uS2c8BUQBqKCFsi3l5pMQ",
        "uri": "spotify:track:4SeXSURWGvprP5a1uAWSoE"
      },
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4M1FpEWs2PeYfJe7xxJfhH"
            },
            "href": "https://api.spotify.com/v1/artists/4M1FpEWs2PeYfJe7xxJfhH",
            "id": "4M1FpEWs2PeYfJe7xxJfhH",
            "name": "Freddie Mercury",
            "type": "artist",
            "uri": "spotify:artist:4M1FpEWs2PeYfJe7xxJfhH"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6oGu0NZWy8gJ18wggybFqH"
            },
            "href": "https://api.spotify.com/v1/artists/6oGu0NZWy8gJ18wggybFqH",
            "id": "6oGu0NZWy8gJ18wggybFqH",
            "name": "Montserrat Caballé",
            "type": "artist",
            "uri": "spotify:artist:6oGu0NZWy8gJ18wggybFqH"
          }],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5rUIVycCFrc3JmKRuL8JIf"
          },
          "href": "https://api.spotify.com/v1/albums/5rUIVycCFrc3JmKRuL8JIf",
          "id": "5rUIVycCFrc3JmKRuL8JIf",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273471efbf90389424cdde9f557",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02471efbf90389424cdde9f557",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851471efbf90389424cdde9f557",
            "width": 64
          }],
          "name": "The Very Best of Freddie Mercury Solo: Lover of Life, Singer of Songs",
          "release_date": "2006-09-04",
          "release_date_precision": "day",
          "total_tracks": 35,
          "type": "album",
          "uri": "spotify:album:5rUIVycCFrc3JmKRuL8JIf"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4M1FpEWs2PeYfJe7xxJfhH"
          },
          "href": "https://api.spotify.com/v1/artists/4M1FpEWs2PeYfJe7xxJfhH",
          "id": "4M1FpEWs2PeYfJe7xxJfhH",
          "name": "Freddie Mercury",
          "type": "artist",
          "uri": "spotify:artist:4M1FpEWs2PeYfJe7xxJfhH"
        }],
        "disc_number": 1,
        "duration_ms": 212733,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBDTW0000015"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4SeXSURWGvprP5a1uAWSoE"
        },
        "href": "https://api.spotify.com/v1/tracks/4SeXSURWGvprP5a1uAWSoE",
        "id": "4SeXSURWGvprP5a1uAWSoE",
        "is_local": false,
        "is_playable": true,
        "name": "Goin' Back",
        "popularity": 26,
        "preview_url": "https://p.scdn.co/mp3-preview/0815820da2e71e1fee9df2d95c4b2603d3e40dd6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "tags": [],
        "track": true,
        "track_number": 19,
        "type": "track",
        "uri": "spotify:track:4SeXSURWGvprP5a1uAWSoE"
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
  "uri": "spotify:playlist:17wAu8H3bnNfF6GZzw17C0"
};

/***/ })

/******/ });