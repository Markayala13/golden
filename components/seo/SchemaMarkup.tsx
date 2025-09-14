import Script from 'next/script';

export function SchemaMarkup() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
    "name": "Golden Boy Stonework",
    "alternateName": ["Golden Boy Stonework LLC", "Golden Boy Stone Work", "Golden Boy Pool Builders"],
    "description": "Texas's premier custom pool builders and stone craftsmen serving Austin, San Antonio, Houston, and all Texas cities. Expert pool construction, luxury stonework, outdoor kitchens, fire pits, and elegant patios. Licensed, insured, and trusted by thousands of homeowners.",
    "image": [
      "https://goldenboytonework.com/logos/logobg.png",
      "https://goldenboytonework.com/img/1(1).jpg",
      "https://goldenboytonework.com/img/1(7).jpg",
      "https://goldenboytonework.com/img/1(20).jpg"
    ],
    "logo": "https://goldenboytonework.com/logos/logobg.png",
    "@id": "https://goldenboytonework.com/#business",
    "url": "https://goldenboytonework.com",
    "telephone": ["+1-469-478-6051", "+1-214-478-6051"],
    "email": ["eliasbulmaro5@gmail.com", "lopezbriana841@gmail.com"],
    "priceRange": "$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing Available"],
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
      "https://www.facebook.com/profile.php?id=61560989897082&mibextid=LQQJ4d",
      "https://www.instagram.com/goldenboytonework",
      "https://www.linkedin.com/company/goldenboytonework"
    ],
    "areaServed": [
      // Major Texas Cities
      { "@type": "City", "name": "Austin", "addressRegion": "TX" },
      { "@type": "City", "name": "San Antonio", "addressRegion": "TX" },
      { "@type": "City", "name": "Houston", "addressRegion": "TX" },
      { "@type": "City", "name": "Dallas", "addressRegion": "TX" },
      { "@type": "City", "name": "Fort Worth", "addressRegion": "TX" },

      // Austin Metro Area
      { "@type": "City", "name": "Round Rock", "addressRegion": "TX" },
      { "@type": "City", "name": "Cedar Park", "addressRegion": "TX" },
      { "@type": "City", "name": "Pflugerville", "addressRegion": "TX" },
      { "@type": "City", "name": "Georgetown", "addressRegion": "TX" },
      { "@type": "City", "name": "Kyle", "addressRegion": "TX" },
      { "@type": "City", "name": "Buda", "addressRegion": "TX" },
      { "@type": "City", "name": "Dripping Springs", "addressRegion": "TX" },
      { "@type": "City", "name": "Lakeway", "addressRegion": "TX" },
      { "@type": "City", "name": "Westlake", "addressRegion": "TX" },
      { "@type": "City", "name": "Bee Cave", "addressRegion": "TX" },
      { "@type": "City", "name": "Leander", "addressRegion": "TX" },
      { "@type": "City", "name": "Liberty Hill", "addressRegion": "TX" },
      { "@type": "City", "name": "Marble Falls", "addressRegion": "TX" },
      { "@type": "City", "name": "Bastrop", "addressRegion": "TX" },
      { "@type": "City", "name": "Elgin", "addressRegion": "TX" },

      // San Antonio Metro Area
      { "@type": "City", "name": "Stone Oak", "addressRegion": "TX" },
      { "@type": "City", "name": "Fair Oaks Ranch", "addressRegion": "TX" },
      { "@type": "City", "name": "Boerne", "addressRegion": "TX" },
      { "@type": "City", "name": "Helotes", "addressRegion": "TX" },
      { "@type": "City", "name": "Schertz", "addressRegion": "TX" },
      { "@type": "City", "name": "New Braunfels", "addressRegion": "TX" },
      { "@type": "City", "name": "Seguin", "addressRegion": "TX" },

      // Houston Metro Area
      { "@type": "City", "name": "Sugar Land", "addressRegion": "TX" },
      { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
      { "@type": "City", "name": "The Woodlands", "addressRegion": "TX" },
      { "@type": "City", "name": "Katy", "addressRegion": "TX" },
      { "@type": "City", "name": "Cypress", "addressRegion": "TX" },
      { "@type": "City", "name": "Spring", "addressRegion": "TX" },

      // Other Major Texas Cities
      { "@type": "City", "name": "Plano", "addressRegion": "TX" },
      { "@type": "City", "name": "McKinney", "addressRegion": "TX" },
      { "@type": "City", "name": "Frisco", "addressRegion": "TX" },
      { "@type": "City", "name": "Allen", "addressRegion": "TX" },
      { "@type": "City", "name": "Richardson", "addressRegion": "TX" },
      { "@type": "City", "name": "Garland", "addressRegion": "TX" },
      { "@type": "City", "name": "Irving", "addressRegion": "TX" },
      { "@type": "City", "name": "Arlington", "addressRegion": "TX" },
      { "@type": "City", "name": "Grand Prairie", "addressRegion": "TX" },
      { "@type": "City", "name": "Mesquite", "addressRegion": "TX" },
      { "@type": "City", "name": "Carrollton", "addressRegion": "TX" },
      { "@type": "City", "name": "Lewisville", "addressRegion": "TX" },
      { "@type": "City", "name": "Denton", "addressRegion": "TX" },
      { "@type": "City", "name": "Flower Mound", "addressRegion": "TX" },
      { "@type": "City", "name": "Waco", "addressRegion": "TX" },
      { "@type": "City", "name": "Temple", "addressRegion": "TX" },
      { "@type": "City", "name": "Killeen", "addressRegion": "TX" },
      { "@type": "City", "name": "College Station", "addressRegion": "TX" },
      { "@type": "City", "name": "Bryan", "addressRegion": "TX" },
      { "@type": "City", "name": "Tyler", "addressRegion": "TX" },
      { "@type": "City", "name": "Longview", "addressRegion": "TX" },
      { "@type": "City", "name": "Lufkin", "addressRegion": "TX" },
      { "@type": "City", "name": "Nacogdoches", "addressRegion": "TX" }
    ],
    "serviceType": [
      "Custom Pool Construction",
      "Swimming Pool Installation",
      "Luxury Stonework",
      "Stone Patios",
      "Outdoor Kitchen Construction",
      "BBQ Island Installation",
      "Fire Pit Construction",
      "Stone Fireplaces",
      "Paver Driveways",
      "Hardscaping",
      "Retaining Walls",
      "Pool Decks",
      "Outdoor Living Spaces",
      "Landscape Architecture",
      "Stone Veneer",
      "Covered Patio Construction"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium Pool Construction & Stonework Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Custom Swimming Pool Construction",
          "description": "Complete custom pool construction including excavation, gunite, plaster, tile, coping, and equipment installation.",
          "category": "Pool Construction",
          "areaServed": { "@type": "State", "name": "Texas" },
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        },
        {
          "@type": "Offer",
          "name": "Luxury Stone Patios",
          "description": "Custom stone patio design and installation using premium natural stone materials.",
          "category": "Stonework",
          "areaServed": { "@type": "State", "name": "Texas" },
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        },
        {
          "@type": "Offer",
          "name": "Outdoor Kitchen & BBQ Islands",
          "description": "Custom outdoor kitchen and BBQ island construction with stone countertops and premium appliances.",
          "category": "Outdoor Living",
          "areaServed": { "@type": "State", "name": "Texas" },
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        },
        {
          "@type": "Offer",
          "name": "Stone Fire Pits & Fireplaces",
          "description": "Custom stone fire pit and fireplace construction for outdoor entertainment spaces.",
          "category": "Fire Features",
          "areaServed": { "@type": "State", "name": "Texas" },
          "businessFunction": "http://purl.org/goodrelations/v1#Sell"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Ricardo" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "From the first design meeting to the final touch, they treated our project like their own home. We finally have the luxury space we always dreamed of."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Our backyard feels like a private retreat now. The stonework and pool design are stunning, and the team made everything so smooth and stress-free."
      }
    ],
    "knowsAbout": [
      "Pool Construction",
      "Stonework",
      "Hardscaping",
      "Outdoor Living Design",
      "Pool Equipment",
      "Stone Masonry",
      "Landscape Architecture",
      "Texas Building Codes",
      "Pool Safety",
      "Outdoor Kitchen Design"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Pool Design Consultation",
        "description": "Complimentary on-site consultation and custom pool design service"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Golden Boy Stonework",
    "url": "https://goldenboytonework.com",
    "logo": "https://goldenboytonework.com/logos/logobg.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61560989897082&mibextid=LQQJ4d"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-469-478-6051",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"],
      "areaServed": "US-TX"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Golden Boy Stonework - Premier Pool Builders & Stone Craftsmen in Texas",
    "description": "Transform your backyard into a luxury oasis with Golden Boy Stonework. Custom pools, elegant stonework, outdoor kitchens, and fire pits serving all of Texas.",
    "url": "https://goldenboytonework.com",
    "mainEntity": {
      "@id": "https://goldenboytonework.com/#business"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://goldenboytonework.com"
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}