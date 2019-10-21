console.log("Distance Travelled Calculator");
//Position, decimal degrees
const lon = -17.109205;
const lat = 28.0884;

//Earth’s radius, sphere
const R = 6378137;

//offsets in meters
const dn = 0;
const de = -4000;

//Coordinate offsets in radians
let dLat = dn / R;
let dLon = de / (R * Math.cos((Math.PI * lat) / 180));

//OffsetPosition, decimal degrees
let latO = lat + (dLat * 180) / Math.PI;
let lonO = lon + (dLon * 180) / Math.PI;
console.log(latO.toFixed(6));
console.log(lonO.toFixed(6));
