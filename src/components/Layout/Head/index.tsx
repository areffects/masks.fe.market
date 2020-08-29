import React from 'react'
import NextHead from 'next/head'

export interface IHead {
	pageTitle?: string
	pageKeywords?: string
	pageDescription?: string
	pageImageURL?: string
	canonicalLink?: string
	siteName?: string
	hideFromSearch?: boolean
	ogTitle?: string
	ogDescription?: string
}

const Head: React.FunctionComponent<IHead> = ({
	pageTitle = 'Masks',
	pageKeywords = 'Masks',
	pageDescription,
	pageImageURL = '/static/images/cat.jpg',
	canonicalLink,
	siteName,
	hideFromSearch = false,
	ogTitle,
	ogDescription,
}) => {
	return (
		<NextHead>
			<title>{`${pageTitle}`}</title>
			{pageDescription && <meta name="description" content={pageDescription} />}
			{pageKeywords && <meta name="keywords" content={pageKeywords} />}
			{canonicalLink && <link rel="canonical" href={canonicalLink} />}
			{ogTitle || pageTitle ? <meta property="og:title" content={ogTitle || pageTitle} /> : null}
			{ogDescription || pageDescription ? (
				<meta property="og:description" content={ogDescription || pageDescription} />
			) : null}
			{pageImageURL && <meta property="og:image" content={pageImageURL} />}
			{siteName && <meta property="og:site_name" content={siteName} />}
			<meta property="og:type" content="website" />
			{canonicalLink && <meta property="og:url" content={canonicalLink} />}
			{hideFromSearch && <meta name="robots" content="noindex, nofollow" />}
		</NextHead>
	)
}

export default Head
