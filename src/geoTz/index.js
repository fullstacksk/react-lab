import geoTz from 'geo-tz';
import ct from 'countries-and-timezones';

import React from 'react';

const GeoTZ = () => {
	return (
		<div>
			<div>timezone string : {geoTz(47.650499, -122.35007)}</div>
			<div>timezone offset : {ct.getTimezone('America/Los_Angeles')?.utcOffset}</div>
			<div>timezone string : {geoTz(12.897680008162345, 77.68258305794984)}</div>
			<div>timezone offset : {ct.getTimezone('Asia/Kolkata')?.utcOffset}</div>
			<div>timezone string : {geoTz(12.9818512, 77.66725819999999)}</div>
			{console.log(ct.getTimezone('Asia/Kolkata'))}
			<div>timezone offset : {ct.getTimezone(geoTz(12.9818512, 77.66725819999999))?.utcOffsetStr}</div>
		</div>
	);
};

export default GeoTZ;
