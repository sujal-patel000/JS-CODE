const accountId = 144553
let accountEmail = "sujalvaghasiya053@gmail.com"
var accountPassword = "1234"
accountCity = "ahemdabad"
let accountstate;
// without values variables are undefined
// ; is not importantr in js
// where use const: then the values are not changing & using let value are changable

//accountId = 2 //not allowed

accountEmail = "as@as.com"
accountPassword = "222"
accountCity = "junagadh"

/*
prefer not to use var
because of issue in block scop & functional scop 
use.. const & let
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])
