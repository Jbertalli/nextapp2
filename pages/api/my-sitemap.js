const { SitemapStream, streamToPromise } = require( 'sitemap' );
const { Readable } = require( 'stream' );

export default async (req, res) => {
    // An array with your links
    const links = [
        { url: '/pages/CalorieIntakeCalculator', changefreq: 'daily', priority: 0.3  }, 
        { url: '/pages/BMICalculator', changefreq: 'daily', priority: 0.3  },
        { url: '/pages/BodyFatCalculator', changefreq: 'daily', priority: 0.3  },
        { url: '/pages/LoanCalculator', changefreq: 'daily', priority: 0.3  },
        { url: '/pages/CompoundInterestCalculator', changefreq: 'daily', priority: 0.3  },
        { url: '/pages/TrackProgress', changefreq: 'daily', priority: 0.3  }
    ];

    // Create a stream to write to
    const stream = new SitemapStream( { hostname: `https://${req.headers.host}` } );

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString)
}