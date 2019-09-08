// 首页api
import request from '@/http'

// 获取主题列表
export function getTopic (params) {
  return request({
    url: '/topics',
    method: 'get',
    params
  })
}

// 获取主题列表
export function getDatails (id, params) {
  return request({
    url: `/topic/${id}`,
    method: 'get',
    params
  })
}

// accesstoken 验证 accessToken 的正确性
export function postAccessToken (params) {
  return request({
    url: '/accesstoken',
    method: 'post',
    params
  })
}
