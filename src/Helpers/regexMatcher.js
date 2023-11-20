export function isEmail(string){
   return string.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}
export function isValidPassword(string){
    return string.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ );
}