import Script from 'next/script';

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Texas Pool & Pavers",
    "alternateName": "Texas Pool and Pavers",
    "description": "Top-rated specialists in custom swimming pools, elegant paver driveways, and luxury outdoor living spaces in Texas. Professional pool construction, hardscaping, BBQ islands, fire pits, and covered patios.",
    "image": [
      "https://texaspoolandpavers.com/LOGOS/PAVERS LOGO.PNG",
      "https://texaspoolandpavers.com/pic/CapturePOOL.PNG",
      "https://texaspoolandpavers.com/optimized-services/CUSTOMEPOOLS.webp"
    ],
    "@id": "https://texaspoolandpavers.com",
    "url": "https://texaspoolandpavers.com",
    "telephone": "+1-210-374-2779",
    "email": "texaspoolandpavers@gmail.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11631 Culebra Rd",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78253",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.51369998208207,
      "longitude": -98.71429368489864
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61560989897082&mibextid=LQQJ4d"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "San Antonio",
        "addressRegion": "TX"
      },
      {
        "@type": "City",
        "name": "Stone Oak",
        "addressRegion": "TX"
      },
      {
        "@type": "City",
        "name": "Fair Oaks Ranch",
        "addressRegion": "TX"
      },
      {
        "@type": "City",
        "name": "Boerne",
        "addressRegion": "TX"
      },
      {
        "@type": "City",
        "name": "Helotes",
        "addressRegion": "TX"
      }
    ],
    "serviceType": [
      "Pool Construction",
      "Paver Installation",
      "Hardscaping",
      "BBQ Islands",
      "Fire Pits",
      "Covered Patios",
      "Outdoor Living Spaces"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool and Paver Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Pool Construction",
            "description": "Professional custom swimming pool construction with excavation, gunite, plaster, and finishing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paver Driveways",
            "description": "Elegant and durable paver driveway installation using premium materials."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outdoor Hardscaping",
            "description": "Professional hardscaping services including retaining walls, patios, and outdoor living spaces."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
