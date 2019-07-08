import axios from 'axios';
import getUrlFromPid from './weiboImgTools'
import {imageUploadApi} from '@/constant.js'
const IMAGE_API = imageUploadApi + '?url=0&markpos=0&logo=0&nick=0&marks=1&app=miniblog&s=json&p=1&ori=1&data=0&file_source=49'
const imageUrlCache = {}

function uploadImage(file) {
    const formData = new FormData()
    formData.append('pic1', file)
    return new Promise((resolve, reject) => {
        axios.post(IMAGE_API, formData, { withCredentials: true }).then((res) => {
            if (res && res.data && res.data.code === 'A00006' && res.data.data && res.data.data.pics && res.data.data.pics.pic_1 && res.data.data.pics.pic_1.pid) {
                resolve({
                    pid: res.data.data.pics.pic_1.pid,
                    url: getUrl(res.data.data.pics.pic_1.pid),
                    bmiddleUrl: getUrl(res.data.data.pics.pic_1.pid, 'bmiddle'),
                    thumbnailUrl: getUrl(res.data.data.pics.pic_1.pid, 'thumbnail')
                })
            } else {
                reject(res)
            }
        }, (err) => {
            reject(err)
        })
    })
}

function getUrl(pid, type) {
    if (!pid) {
        return ''
    }
    if (imageUrlCache[pid]) {
        return imageUrlCache[pid]
    }
    if (pid && !/^(https?|blob):\/\/.+$/.test(pid)) {
        imageUrlCache[pid] = getUrlFromPid(pid, type)
    } else {
        imageUrlCache[pid] = pid
    }
    return imageUrlCache[pid]
}

export default uploadImage
export { uploadImage, getUrl }
