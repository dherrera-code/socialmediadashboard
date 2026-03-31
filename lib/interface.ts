export interface SocialOverall {
    socialMedia: string,
    username: string,
    followerCount: number,
    addedFollowers: number
}

export interface DailyOverview {
    socialMedia: string,
    viewsOrLikes: string,
    amounts: number,
    trendingPercentage: number
}
// export interface SocialDataContextType {
//     socialData: SocialOverall[] | null;
//     setSocialData : ( socialData: SocialOverall[] | null) => void
// }
