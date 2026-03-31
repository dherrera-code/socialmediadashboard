const API_URL = "https://socialmediadhapi-aeaqadhae6gzbwe0.westus3-01.azurewebsites.net/Social/"

export const GetMainSocialStats = async () => {
    const res = await fetch(API_URL + "GetMainSocialStats");
    const data = await res.json();
    return data;
}

export const GetDailySocialStats = async () => {
    const res = await fetch(API_URL + "GetDailySocialStats");
    const data = await res.json();
    return data;
}