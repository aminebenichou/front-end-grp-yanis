const url = 'https://youtube-v2.p.rapidapi.com/video/recommendations?video_id=c-xOi9FcSqA';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

async function getVideos()  {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// getVideos()



const mock_videos= {
  "number_of_videos": 20,
  "continuation_token": "CBQSKRILYy14T2k5RmNTcUHAAQDIAQDgAQGiAg0o____________AUAA-AIAGAAqmwZNZ3NJejlIYTJPU2EyZUNDQWRyT2ktc013QVFLdlFRS0FfSS1BQW9Pd2o0TENKU0l0dWFGNUxXV3BBRUtBX0ktQUFvTndqNEtDSUNBNVB5ejZNN25aUW9EOGo0QUNnM0NQZ29JeGJmRzU2aUgxN2dCQ2dQeVBnQUtEY0ktQ2dqY2tKZmJfNkNsbVZFS0FfSS1BQW9Pd2o0TENKUGI4Xy05ek1ldndnRUtBX0ktQUFvT3dqNExDSkxfbG82TDRZbTM0QUVLQV9JLUFBb053ajRLQ0k3VjY3ak00ZU9ISHdvRDhqNEFDZzNDUGdvSXdOXzVoLTJYczdkNUNnUHlQZ0FLRGNJLUNnaW1uNWFaOWMyaDVGNEtBX0ktQUFvT3dqNExDTGlJa29EbDU3ekduZ0VLQV9JLUFBb093ajRMQ08tTXc1R0kxdU90a1FFS0FfSS1BQW9Od2o0S0NLdVAxLV9mckplaFRBb0Q4ajRBQ2c3Q1Bnc0k5Tm5keE5MczBvdWJBUW9EOGo0QUNnM0NQZ29JNXZLOTdKLWwwbzVFQ2dQeVBnQUtEc0ktQ3dpYS10dnV6b0tLOExRQkNnUHlQZ0FLRGNJLUNnaXEzOXUxcHFXZDgwTUtBX0ktQUFvTndqNEtDS3pZd0pxcmxlcVVFQW9EOGo0QUNnM0NQZ29JNHNxQ3k3NzcxSVlEQ2dQeVBnQUtEc0ktQ3dpMWhiV2NuYWJFMWQ4QkNnUHlQZ0FLRHNJLUN3alAwZHJZNUpyWjRJSUJFaFFBQWdRR0NBb01EaEFTRkJZWUdod2VJQ0lrSmhvRUNBQVFBUm9FQ0FJUUF4b0VDQVFRQlJvRUNBWVFCeG9FQ0FnUUNSb0VDQW9RQ3hvRUNBd1FEUm9FQ0E0UUR4b0VDQkFRRVJvRUNCSVFFeG9FQ0JRUUZSb0VDQllRRnhvRUNCZ1FHUm9FQ0JvUUd4b0VDQndRSFJvRUNCNFFIeG9FQ0NBUUlSb0VDQ0lRSXhvRUNDUVFKUm9FQ0NZUUp5b1VBQUlFQmdnS0RBNFFFaFFXR0JvY0hpQWlKQ1lqD3dhdGNoLW5leHQtZmVlZA%3D%3D",
  "videos": [
    {
      "video_id": "pCzXIFzNhBQ",
      "title": "MacBook Air M5 After 3 Months: Worth Every Penny!",
      "author": "Kyle Erickson",
      "number_of_views": 17000,
      "video_length": "14:21",
      "description": "",
      "is_live_content": null,
      "published_time": "1 day ago",
      "channel_id": "UCnn3N0i3TVGbQ9bMb4ln2OQ",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/pCzXIFzNhBQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBs-rTavwkrU3zj-3hZL_qnclwhpg",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/pCzXIFzNhBQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIoDD0c4hAiXvLsfl9kgDDLoxhXg",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "Zc87Qz-ZAAA",
      "title": "Why iPhone Dominates the World…",
      "author": "Andres Vidoza",
      "number_of_views": 56000,
      "video_length": "15:13",
      "description": "",
      "is_live_content": null,
      "published_time": "21 hours ago",
      "channel_id": "UCC_NjLEb2Sley94py4vSYTA",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/Zc87Qz-ZAAA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCZbAEeBVt9Cp_M2u-6iweYE84Dww",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/Zc87Qz-ZAAA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9kv2TxYx4VKVq1Ix9eXN8lDKZBw",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "AXFcOozxm8U",
      "title": "Is Cashify Safe? I Let Claude Inspect My ₹70,000 Used MacBook",
      "author": "Parthav AI",
      "number_of_views": 49,
      "video_length": "14:06",
      "description": "",
      "is_live_content": null,
      "published_time": "1 day ago",
      "channel_id": "UClicmsaC-oSadIw2scBgxng",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/AXFcOozxm8U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_j_wBF0QA13VxS3nGTRycjHg2KQ",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/AXFcOozxm8U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCd2wHtYeT8t1nkfDmW3Q-u6qhmw",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "UTKVB_tlyFw",
      "title": "Is there life after coding agents?",
      "author": "Awesome",
      "number_of_views": 36000,
      "video_length": "11:45",
      "description": "",
      "is_live_content": null,
      "published_time": "1 hour ago",
      "channel_id": "UCXzw-OdotBUcNA9yhuYQBwA",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/UTKVB_tlyFw/hqdefault_custom_2.jpg?sqp=CLi55NEG-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQziCSgq_VIplQ1YjpZtPZsyk2nQ",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/UTKVB_tlyFw/hqdefault_custom_2.jpg?sqp=CLi55NEG-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKlYB3x3h4X6M1MMRJVf7Fghx6gw",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "wl8eY9_87ZM",
      "title": "Windows Let Me Down, So I Left.",
      "author": "Switch and Click",
      "number_of_views": 159000,
      "video_length": "12:14",
      "description": "",
      "is_live_content": null,
      "published_time": "1 day ago",
      "channel_id": "UCT6AJiTYspOILBK3hMWEq2g",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/wl8eY9_87ZM/hqdefault_custom_1.jpg?sqp=CLi55NEG-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBO9B4iijHPZu9LLJj_dRy96mjq-g",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/wl8eY9_87ZM/hqdefault_custom_1.jpg?sqp=CLi55NEG-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkcgnj8P6VsKonBefMnmC-fkyp7A",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "4G4nCLHFv5I",
      "title": "How Much Ram Do You Really Need in a MacBook?",
      "author": "SPACE DESIGN WAREHOUSE",
      "number_of_views": 526000,
      "video_length": "13:11",
      "description": "",
      "is_live_content": null,
      "published_time": "5 months ago",
      "channel_id": "UC_lGMZMTN7Oh9DRKV2eaMtg",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/4G4nCLHFv5I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAXho31VMoFR7ky9qA2lnLiwQ75Iw",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/4G4nCLHFv5I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBD6F4jnuxoOZg_lUbiDmbSvjWkew",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "Hw-PDMca6o4",
      "title": "Macbook Air M4 Long Term Review - As a Software Engineer",
      "author": "Marko",
      "number_of_views": 393000,
      "video_length": "15:00",
      "description": "",
      "is_live_content": null,
      "published_time": "3 months ago",
      "channel_id": "UCCQ6SXMc7MoJ88jjpn6j-8Q",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/Hw-PDMca6o4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDDrvKE_Kq3NaGmWFkIkMYvfvyihw",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/Hw-PDMca6o4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCofzWpgxzfQr2Ns9sGRkN7Do_O4Q",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "eW7MvtD-b8A",
      "title": "M5 MacBook Air: REAL-LIFE User Review After 60 Days!",
      "author": "Marina Morre",
      "number_of_views": 64000,
      "video_length": "9:34",
      "description": "",
      "is_live_content": null,
      "published_time": "13 days ago",
      "channel_id": "UCJHrX94JJBV_2VXSk_XrQrA",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/eW7MvtD-b8A/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBlCqFfb8QGroyuDPEfpnUIBDlSUQ",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/eW7MvtD-b8A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASQwG4EkpGhpkOYC3A5mskvOcCcg",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "XsiGb1Mlj6Y",
      "title": "I FINALLY Upgraded from M1 PRO to M5 PRO... holy sh*t",
      "author": "Snowball ",
      "number_of_views": 114000,
      "video_length": "12:39",
      "description": "",
      "is_live_content": null,
      "published_time": "6 days ago",
      "channel_id": "UCtCzRcwm4hmY_IvtN61ZgQQ",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/XsiGb1Mlj6Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLArMQ9fVhL-2a5TrN6DsUhfQDNzEg",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/XsiGb1Mlj6Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChJHzR8h3AEoA0ZqpogdsT1naHwA",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "nozzPlAEhDg",
      "title": "MacBook Air replaced my M1 Max for 21 days",
      "author": "Samuel Nam",
      "number_of_views": 55000,
      "video_length": "11:54",
      "description": "",
      "is_live_content": null,
      "published_time": "9 days ago",
      "channel_id": "UCovagaiL6pBYWfvThaXVniA",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/nozzPlAEhDg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDkyhBoO0lQL10r8YtMLfkNOLzabw",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/nozzPlAEhDg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFcpjjFXSU2CWJWrapMFIFXZVG3g",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "kVuOsIIwxm8",
      "title": "Can This M5 MacBook Air be my Main Editing Rig?",
      "author": "SPACE DESIGN WAREHOUSE",
      "number_of_views": 40000,
      "video_length": "13:39",
      "description": "",
      "is_live_content": null,
      "published_time": "2 weeks ago",
      "channel_id": "UC_lGMZMTN7Oh9DRKV2eaMtg",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/kVuOsIIwxm8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCZDgGsUOP2mzsEe3f-cYTlq27XMg",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/kVuOsIIwxm8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDP_2ugQoVciofIuhbYncAEGdXN-Q",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "TEJdZf31x6s",
      "title": "MacBook Neo vs Air vs Pro - Don’t Waste Your Money! [2026]",
      "author": "The Tech Chap",
      "number_of_views": 577000,
      "video_length": "19:41",
      "description": "",
      "is_live_content": null,
      "published_time": "1 month ago",
      "channel_id": "UCzlXf-yUIaOpOjEjPrOO9TA",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/TEJdZf31x6s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCMY-WRG1eDteUaqHdgqEZr1G5nhg",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/TEJdZf31x6s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeSXhaszoRd5gqqn8auUk2CqViAQ",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "mxdLZSiXbPQ",
      "title": "MacBook Ultra - Apple's BIGGEST Redesign Yet!",
      "author": "ZONEofTECH",
      "number_of_views": 128000,
      "video_length": "11:03",
      "description": "",
      "is_live_content": null,
      "published_time": "1 day ago",
      "channel_id": "UCr6JcgG9eskEzL-k6TtL9EQ",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/mxdLZSiXbPQ/hqdefault_custom_3.jpg?sqp=CLi55NEG-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDKDnC2WgU7V7sqsqU8__qmL2lrng",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/mxdLZSiXbPQ/hqdefault_custom_3.jpg?sqp=CLi55NEG-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpGbkeOODKYh4-OGL88UwG2KATag",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "RB1JKf2PeWY",
      "title": "I Spent $8,700 on a MacBook. The M5 Made It Obsolete.",
      "author": "ThisIsE",
      "number_of_views": 286000,
      "video_length": "15:24",
      "description": "",
      "is_live_content": null,
      "published_time": "2 months ago",
      "channel_id": "UCKJgBJcJkc0Q4kZeGIyNTYA",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/RB1JKf2PeWY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJIHRSffbxJ-DRonZHYNXyEekK8g",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/RB1JKf2PeWY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbLFxShiRrF9EwkdOiWqsqkRrW5g",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "tOAoFO3W_Ro",
      "title": "Apple Just Wont Fix This - Software Engineer Vlog (ep. WONTFIX)",
      "author": "Marko",
      "number_of_views": 47000,
      "video_length": "12:22",
      "description": "",
      "is_live_content": null,
      "published_time": "2 months ago",
      "channel_id": "UCCQ6SXMc7MoJ88jjpn6j-8Q",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/tOAoFO3W_Ro/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDguiPAhw_M3Tb8zjOxZygsNzssxw",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/tOAoFO3W_Ro/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAztwdR8eOYSy3eaL_1F6XlGlfG7Q",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "Q-Z1Kma276o",
      "title": "I went from M1 to M5... (holy sh*t, it's very good)",
      "author": "Bog",
      "number_of_views": 345000,
      "video_length": "13:09",
      "description": "",
      "is_live_content": null,
      "published_time": "4 weeks ago",
      "channel_id": "UCZXW8E1__d5tZb-wLFOt8TQ",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/Q-Z1Kma276o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCe1kSOnwTNBOGT1YPFbOkVrgCM7Q",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/Q-Z1Kma276o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1orvDs7hou_NDa2RT26h9IUFzrw",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "ECmoqrNQLCw",
      "title": "I might have found the BEST budget router...",
      "author": "Hardware Haven",
      "number_of_views": 125000,
      "video_length": "22:32",
      "description": "",
      "is_live_content": null,
      "published_time": "1 day ago",
      "channel_id": "UCgdTVe88YVSrOZ9qKumhULQ",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/ECmoqrNQLCw/hqdefault_custom_2.jpg?sqp=CLi55NEG-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA64NnWcYtQRgISpCEdtqS0VeGuKQ",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/ECmoqrNQLCw/hqdefault_custom_2.jpg?sqp=CLi55NEG-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoohsd8nSRjqbNHhtoYwbkUckhCA",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "Aw1T2-lgpWI",
      "title": "Get A Cheaper MacBook in 2026",
      "author": "Dave2D",
      "number_of_views": 503000,
      "video_length": "10:43",
      "description": "",
      "is_live_content": null,
      "published_time": "2 months ago",
      "channel_id": "UCVYamHliCI9rw1tHR1xbkfw",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/Aw1T2-lgpWI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4RtzMIcrS-AcOy-6Wl4ma1pt47Q",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/Aw1T2-lgpWI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEWPFjnyKIKpQxLqU9UDuOM-XyAg",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "36sRMdONQrU",
      "title": "Installing macOS Tahoe on my old gaming PC (it actually worked)",
      "author": "foci",
      "number_of_views": 23000,
      "video_length": "16:19",
      "description": "",
      "is_live_content": null,
      "published_time": "2 days ago",
      "channel_id": "UCF3JCPvD72PJMVZrfST-fag",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/36sRMdONQrU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpfXzLH6I7Yn8-Is5M0-3USS7R9Q",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/36sRMdONQrU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBATLlZqFae3ROajAmXba3XLM5fSg",
          "width": 336,
          "height": 188
        }
      ]
    },
    {
      "video_id": "gsFk1ksWqM8",
      "title": "MacBook Air M5 vs MacBook Pro M5 Pro: Save Your Money!",
      "author": "Kyle Erickson",
      "number_of_views": 105000,
      "video_length": "16:03",
      "description": "",
      "is_live_content": null,
      "published_time": "1 month ago",
      "channel_id": "UCnn3N0i3TVGbQ9bMb4ln2OQ",
      "category": null,
      "type": "NORMAL",
      "keywords": [],
      "thumbnails": [
        {
          "url": "https://i.ytimg.com/vi/gsFk1ksWqM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDXy2DFtISx63NgVHKuAZuqUmUB4w",
          "width": 168,
          "height": 94
        },
        {
          "url": "https://i.ytimg.com/vi/gsFk1ksWqM8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbV6opB2aoJ1snMEx3LwwXxJZspA",
          "width": 336,
          "height": 188
        }
      ]
    }
  ]
}
const paragraph = document.getElementById("test")
paragraph.innerHTML = "welcome"
mock_videos.videos.forEach((video)=>console.log(video.title))
console.log(paragraph);

const video_title=document.getElementsByClassName("vid-title")[0]
video_title.innerHTML = mock_videos.videos[0].title
