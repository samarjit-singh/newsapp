import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Sam Byford",
      title: "The redesigned MacBook Air might have an M1, not an M2",
      description:
        "Analyst Ming-Chi Kuo “strongly believes” that the upcoming MacBook Air redesign will feature an M1 chip, instead of the widely expected “M2” upgrade. The redesigned MacBook Air had previously been reported to have an M2 chip by Bloomberg’s Mark Gurman.",
      url: "https://www.theverge.com/2022/3/9/22968489/m2-macbook-air-redesign-m1-ming-chi-kuo",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/VLyTECj67PbeQ0Doj3ieyG3KNZA=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22046475/vpavic_4291_20201113_0380.0.jpg",
      publishedAt: "2022-03-09T05:58:38Z",
      content:
        "Ming-Chi Kuo strongly believes the new Air has an M1\r\nPhoto by Vjeran Pavic / The Verge\r\nTF International Securities analyst Ming-Chi Kuo strongly believes that the upcoming MacBook Air redesign will… [+1274 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Russia-Ukraine: Is internet on verge of break-up?",
      description:
        "The global internet is under threat as the conflict in Ukraine continues.",
      url: "https://www.bbc.co.uk/news/technology-60661987",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/33F4/production/_123600331_netsmashed.png",
      publishedAt: "2022-03-09T01:02:56Z",
      content:
        "By Jane WakefieldTechnology reporter \r\nImage source, Getty Images\r\nImage caption, Many of the rules of global business have been torn up following the Russian invasion of Ukraine - will the internet … [+6509 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters Editorial",
      title:
        "Apple upgrades iPhone SE, other higher-end products - Reuters.com",
      description:
        "Apple on Tuesday added 5G connectivity to its low-cost iPhone SE and iPad Air and introduced a faster chip for a new desktop, a high point in Apple's move to power its devices with microprocessors designed in house.",
      url: "https://www.reuters.com/video/watch/idRCV00ATNX",
      urlToImage:
        "https://static.reuters.com/resources/r/?d=20220309&i=RCV00ATNX&r=RCV00ATNX&t=2",
      publishedAt: "2022-03-09T02:17:21Z",
      content:
        "Posted \r\nApple on Tuesday added 5G connectivity to its low-cost iPhone SE and iPad Air and introduced a faster chip for a new desktop, a high point in Apple's move to power its devices with microproc… [+24 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters Editorial",
      title:
        "Apple upgrades iPhone SE, other higher-end products - Reuters.com",
      description:
        "Apple on Tuesday added 5G connectivity to its low-cost iPhone SE and iPad Air and introduced a faster chip for a new desktop, a high point in Apple's move to power its devices with microprocessors designed in house.",
      url: "https://www.reuters.com/video/watch/idspww?now=true",
      urlToImage:
        "https://ajo.prod.reuters.tv/api/v2/img/6228072ee4b085d396fd5054-1646790446502?location=LANDSCAPE",
      publishedAt: "2022-03-09T02:17:21Z",
      content:
        "Posted \r\nApple on Tuesday added 5G connectivity to its low-cost iPhone SE and iPad Air and introduced a faster chip for a new desktop, a high point in Apple's move to power its devices with microproc… [+24 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Rare Steve Jobs items hit the auction block - Reuters.com",
      description:
        "Items from the birth of Apple, home computing and video gaming are up for grabs at an auction, which will conclude on March 17.",
      url: "https://www.reuters.com/lifestyle/rare-steve-jobs-items-hit-auction-block-2022-03-09/",
      urlToImage:
        "https://www.reuters.com/resizer/3IGf5kZOck4cafQwChJ9jKPHflQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PACFZ2GMNFJOXKMC2WEDKJGIZY.jpg",
      publishedAt: "2022-03-09T01:07:00Z",
      content:
        'NEW YORK, March 8 (Reuters) - Items from the birth of Apple, home computing and video gaming are up for grabs at an auction, which will conclude on March 17.\r\nThe top lot from "The Steve Jobs Revolut… [+1714 chars]',
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title:
        "Kuo: 2022 MacBook Air to Feature M1 Chip, More Color Options and All-New Design",
      description:
        "Following today's event that saw the introduction of the Mac Studio, respected Apple analyst Ming-Chi Kuo has provided some detail on the MacBook Air, another Mac product that we're expecting to see refreshed later in the year.\n\n\n\n\n\nAccording to Kuo, the 2022…",
      url: "https://www.macrumors.com/2022/03/08/kuo-macbook-air-2022-m1/",
      urlToImage:
        "https://images.macrumors.com/t/vVp2U5B2vZoXBsVhr2P6HvDrL7Q=/1867x/article-new/2021/11/macbook-air-rounded-mock-orange.jpg",
      publishedAt: "2022-03-09T00:47:37Z",
      content:
        "Following today's event that saw the introduction of the Mac Studio, respected Apple analyst Ming-Chi Kuo has provided some detail on the MacBook Air, another Mac product that we're expecting to see … [+1548 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "gbienasz@insider.com (Gabrielle Bienasz)",
      title:
        "Apple's pricey new monitor comes with a free 1-meter cable. A 1.8-meter cable will cost you $129.",
      description:
        "Apple started selling the Thunderbolt 4 Pro Cable, with versions costing $129 and $159, after unveiling new products at an event Tuesday.",
      url: "https://www.businessinsider.com/the-thunderbolt-4-pro-versions-pricer-at-129-or-159-2022-3",
      urlToImage:
        "https://i.insider.com/622805587eb82f00180e0c6f?width=1200&format=jpeg",
      publishedAt: "2022-03-09T01:47:48Z",
      content:
        "Apple unveiled a slew of new products on Tuesday, but some of the accessories raised a few eyebrows for their price points.\r\nAmong the new offerings was a $1,600 monitor in aluminum casing called Stu… [+789 chars]",
    },
    {
      source: {
        id: null,
        name: "VentureBeat",
      },
      author: "Jeff Grubb",
      title:
        "A Nintendo legend retires and the eShop shuts down in Russia | Last of the Nintendogs",
      description:
        "The Last of the Nintendogs return to talk about Next Level Games CEO retiring and Nintendo shutting down its digital sales in Russia.",
      url: "https://venturebeat.com/2022/03/08/a-nintendo-legend-retires-and-the-eshop-shuts-down-in-russia-last-of-the-nintendogs/",
      urlToImage:
        "https://venturebeat.com/wp-content/uploads/2021/07/cover-art.png?w=1200&strip=all",
      publishedAt: "2022-03-09T02:17:27Z",
      content:
        "GamesBeat Summit 2022 returns with its largest event for leaders in gaming on April 26-28th. Reserve your spot here!\r\nLast of the Nintendogs love you very much. So this episode they talk about Ninten… [+337 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Tomás Rivero",
      title:
        "iPhone SE 2022 vs iPhone SE 2020: comparamos sus características y precio",
      description:
        "Apple presentó hoy el muy esperado iPhone SE de tercera generación. Esta nueva iteración de la familia más asequible de móviles de la compañía llega con un aspecto externo idéntico a su antecesor. Este nuevo modelo también comparte algunos componentes interno…",
      url: "https://hipertextual.com/2022/03/comparativa-iphone-se-2022-vs-iphone-se-2020",
      urlToImage:
        "https://hipertextual.com/wp-content/uploads/2022/03/iphone-se-2022-6-scaled.jpg",
      publishedAt: "2022-03-09T01:53:41Z",
      content:
        "Apple presentó hoy el muy esperado iPhone SE de tercera generación. Esta nueva iteración de la familia más asequible de móviles de la compañía llega con un aspecto externo idéntico a su antecesor. Es… [+6859 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Trevor Mogg",
      title: "All of the product videos that Apple shared today",
      description:
        "We've brought together all of the videos that Apple shared today following the unveiling of new products at its Peek Performance event.",
      url: "https://www.digitaltrends.com/mobile/apple-videos-for-new-products/",
      urlToImage:
        "https://icdn.digitaltrends.com/image/digitaltrends/apple-mac-studio.jpg",
      publishedAt: "2022-03-09T01:30:19Z",
      content:
        "Apple made a slew of product announcements at its Peek Performance event on Tuesday, March 8.\r\nBelow weve brought together all of Apples videos promoting its new releases, along with a video of the e… [+2176 chars]",
    },
    {
      source: {
        id: null,
        name: "Archive.org",
      },
      author: null,
      title: "Ask Slashdot: How Powerful Is Your Computer? (1999)",
      description: "Comments",
      url: "https://web.archive.org/web/20001212132500if_/http://slashdot.org/askslashdot/99/02/12/1429236.shtml",
      urlToImage: null,
      publishedAt: "2022-03-09T05:01:28Z",
      content:
        "In my original post to Slashdot, boldly titled I Got News for All of You, I made the following rash, unsubstantiated claim:\r\n Overlapping windows were thought up in the '40s, the mouse in the '50s, a… [+3372 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Frank Schräer",
      title:
        "Mittwoch: Apple mit Doppel-Chip und neuem Mac, Russland bleibt im Internet",
      description:
        "Apple-Neuheiten: Dual-Chip, Mac, iPad & iPhone + Russland schaltet nicht ab + Cloud-Störungen bei Spotify & Discord + Fake-Review-Anbieter beugt sich Amazon",
      url: "https://www.heise.de/news/Mittwoch-Apple-mit-Doppel-Chip-und-neuem-Mac-Russland-bleibt-im-Internet-6543397.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/3/5/9/8/9/7/mittwoch-aac0d1ed1a699675.webp",
      publishedAt: "2022-03-09T05:30:00Z",
      content:
        "Apple hat auf seiner Frühlings-Keynote nicht nur ein neues iPhone, ein neues iPad und einen neuen Mac präsentiert, sondern auch einen neuen Prozessor. Der M1 Ultra kommt im neuen Mac Studio zum Einsa… [+3552 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Everything Apple announced during today’s ‘Peek Performance’ event",
      description:
        "Apple on Tuesday held its special online event “Peek Perfomance,” at which the company announced the third-generation iPhone SE, iPad Air 5, and a brand new Mac Studio desktop computer along with the new Apple Studio Display. Read on as we detail everything A…",
      url: "https://9to5mac.com/2022/03/08/everything-apple-announced-during-todays-peek-performance-event/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/Screen-Shot-2022-03-08-at-1.57.53-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-03-09T00:07:45Z",
      content:
        "Apple on Tuesday held its special online event “Peek Perfomance,” at which the company announced the third-generation iPhone SE, iPad Air 5, and a brand new Mac Studio desktop computer along with the… [+4717 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Mac Studio with M1 Ultra beats 28-core Intel Mac Pro in Geekbench score",
      description:
        "Apple on Tuesday introduced Mac Studio, which comes with the powerful M1 Max chip by default. However, the company also offers a more expensive model with M1 Ultra, a new Apple Silicon chip that is even faster than the M1 Max. To give us a better idea of that…",
      url: "https://9to5mac.com/2022/03/08/mac-studio-with-m1-ultra-beats-28-core-intel-mac-pro-in-geekbench-score/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/Screen-Shot-2022-03-08-at-1.26.01-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-03-09T04:25:55Z",
      content:
        "Apple on Tuesday introduced Mac Studio, which comes with the powerful M1 Max chip by default. However, the company also offers a more expensive model with M1 Ultra, a new Apple Silicon chip that is e… [+1658 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Kuo: Redesigned MacBook Air on track for this year, but it might use an M1 chip",
      description:
        "Apple just introduced a new Mac today, but the rumors never stop. This time, analyst Ming-Chi Kuo shared on Twitter another prediction, this time about the rumored MacBook Air. In line with other rumors, Kuo believes that the new laptop will be announced late…",
      url: "https://9to5mac.com/2022/03/08/kuo-redesigned-macbook-air-on-track-for-this-year-but-it-might-use-an-m1-chip/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/11/macbook-air-concept-parker.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-03-09T01:03:03Z",
      content:
        "Apple just introduced a new Mac today, but the rumors never stop. This time, analyst Ming-Chi Kuo shared on Twitter another prediction, this time about the rumored MacBook Air. In line with other rum… [+2482 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Jeff Benjamin",
      title:
        "Apple’s Studio Display supports the 5th-gen iPad Air, but not the 4th-gen – Here’s why",
      description:
        "Apple’s new Studio Display is unsurprisingly proving to be very popular among Apple faithful, as evident from the slipping shipment times that are pushing orders back to May. \nThe Studio Display is compatible with a large swath of Mac computers, dating back t…",
      url: "https://9to5mac.com/2022/03/08/apples-studio-display-supports-the-5th-gen-ipad-air-but-not-the-4th-gen-heres-why/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/Screen-Shot-2022-03-08-at-1.57.21-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-03-09T00:12:38Z",
      content:
        "Apples new Studio Display is unsurprisingly proving to be very popular among Apple faithful, as evident from the slipping shipment times that are pushing orders back to May. \r\nThe Studio Display is c… [+2512 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Darryl Boxberger)",
      title: "Apple teases new filmmaking tools coming to iMovie in April",
      description:
        'Among the myriad of announcements made at the "Peek Performance" event on March 8, Apple teased two new iMovie filmmaking features.These new features will arrive in April, according to the official iMovie site.Magic Move allows users to select media or an alb…',
      url: "https://appleinsider.com/articles/22/03/09/apple-teases-new-filmmaking-tools-coming-to-imovie-in-april",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/47379-92391-504D79A5-082B-462C-AD9B-0C85A2D5A00D-xl.jpg",
      publishedAt: "2022-03-09T00:25:23Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1307 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Mike Peterson)",
      title:
        "MacBook Air with new form factor, more colors to arrive in 2022, Kuo says",
      description:
        "Apple's 2022 MacBook Air will sport a new form factor and additional color options, and could arrive by the third quarter of the year, according to well-respected analyst Ming-Chi Kuo.MacBook Air renderThe upcoming MacBook Air could hit the mass production ph…",
      url: "https://appleinsider.com/articles/22/03/09/macbook-air-with-new-form-factor-more-colors-to-arrive-in-2022-kuo-says",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/47381-92394-51812357703_d529ba2107_o-xl.jpg",
      publishedAt: "2022-03-09T01:14:47Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1239 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Christine McKee)",
      title:
        "Apple's 1TB 14-inch MacBook Pro is $200 off, plus $60 off AppleCare, now in stock",
      description:
        "Apple Event deals continue to roll in — and this time the 14-inch MacBook Pro with an upgraded 10-core CPU, 16-core GPU and 1TB of storage has been slashed to $2,299. Did we mention AppleCare is $60 off as well? Units are in stock now.Every 14-inch and 16-inc…",
      url: "https://appleinsider.com/articles/22/03/09/apples-1tb-14-inch-macbook-pro-is-200-off-plus-60-off-applecare-now-in-stock",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/47380-92389-macbook-pro-14-inch-200-off-xl.jpg",
      publishedAt: "2022-03-09T00:11:23Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1920 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "そうこ",
      title: "Apple TV+の「Friday Night Baseball」は日本でも配信",
      description:
        "Image:Apple磯野、野球見ようぜ！（日本では）真夜中のAppleイベントで発表されたAppleTV+の野球プログラム「FridayNightBaseball」は日本でも配信されます。イベント見ながら「へー、まぁ関係ないか」と思っていた野球ファンは嬉しいね。「FridayNightBaseball」は、AppleとMLBがタッグを組んだAppleTV+限定の配信番組。週に1度のダブルヘッダー",
      url: "https://www.gizmodo.jp/2022/03/apple-tv-plus-friday-night-baseball.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/03/09/220309applemlb-w960.jpg",
      publishedAt: "2022-03-09T04:30:00Z",
      content:
        "AppleApple TV+Friday Night Baseball\r\nFriday Night BaseballAppleMLBApple TV+1Apple TV+\r\nApple TV+iPhoneMacApple TV 4K\r\nApple TV+MLB Big Inning\r\nSource: Apple",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container md-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
