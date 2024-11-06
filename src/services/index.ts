import request from './request'
import type { BannerRes } from './type'

export const getBannerApi = () => {
  return request<BannerRes>({ url: 'https://zyxcl.xyz/music/api/banner' })
}
