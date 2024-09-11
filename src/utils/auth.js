const expireTime=localStorage.getItem("expire_time")
const currentTime = new Date().getTime();
export const timeUntilExpiration = expireTime - currentTime; 

export function isAuth() {
    const tokenExpires = localStorage.getItem("token");
    if (tokenExpires !== undefined && tokenExpires !== null && tokenExpires !== '') {
      return true;
    }
    return false;
  }