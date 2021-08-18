import  {request}  from "./request"

export function getCategory() {
	return request({
			url: '/category',
	})
}
// 获取右侧小图标
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}