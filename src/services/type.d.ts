

export interface BannerItem {
  imageUrl: string;
  targetId: number;
}

export interface BannerRes {
  banners: BannerItem[]
  code: number
}