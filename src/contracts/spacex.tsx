export interface SpaceXRoot {
	fairings: Fairings
	links: Links
	static_fire_date_utc: string
	static_fire_date_unix: number
	tbd: boolean
	net: boolean
	window: number
	rocket: string
	success: boolean
	details: string
	crew: any[]
	ships: any[]
	capsules: any[]
	payloads: string[]
	launchpad: string
	auto_update: boolean
	failures: Failure[]
	flight_number: number
	name: string
	date_utc: string
	date_unix: number
	date_local: string
	date_precision: string
	upcoming: boolean
	cores: Core[]
	id: string
}

interface Core {
	core: string
	flight: number
	gridfins: boolean
	legs: boolean
	reused: boolean
	landing_attempt: boolean
	landing_success?: any
	landing_type?: any
	landpad?: any
}

interface Failure {
	time: number
	altitude?: any
	reason: string
}

interface Links {
	patch: Patch
	reddit: Reddit
	flickr: Flickr
	presskit?: any
	webcast: string
	youtube_id: string
	article: string
	wikipedia: string
}

interface Flickr {
	small: any[]
	original: any[]
}

interface Reddit {
	campaign?: any
	launch?: any
	media?: any
	recovery?: any
}

interface Patch {
	small: string
	large: string
}

interface Fairings {
	reused: boolean
	recovery_attempt: boolean
	recovered: boolean
	ships: any[]
}
