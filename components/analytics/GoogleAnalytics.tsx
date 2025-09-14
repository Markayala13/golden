'use client'

import Script from 'next/script'

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'location'
              }
            });

            // Enhanced tracking for pool and stonework business
            gtag('event', 'page_view', {
              'custom_parameter_1': 'pool_stonework',
              'custom_parameter_2': 'texas',
              'business_type': 'pool_construction',
              'service_area': 'texas'
            });

            // Track phone clicks
            document.addEventListener('click', function(e) {
              if (e.target.tagName === 'A' && e.target.href.startsWith('tel:')) {
                gtag('event', 'phone_call', {
                  'event_category': 'contact',
                  'event_label': 'phone_click',
                  'value': 1
                });
              }
            });

            // Track form submissions
            document.addEventListener('submit', function(e) {
              if (e.target.tagName === 'FORM') {
                gtag('event', 'form_submit', {
                  'event_category': 'contact',
                  'event_label': 'contact_form',
                  'value': 1
                });
              }
            });

            // Track service page views
            if (window.location.pathname.includes('services')) {
              gtag('event', 'service_page_view', {
                'event_category': 'engagement',
                'event_label': 'services',
                'value': 1
              });
            }
          `,
        }}
      />
    </>
  )
}