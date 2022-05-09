import request from '@/utils/request'
export function fileList(server, path, sshInfo) {
    return request.get(`${server}file/list?path=${path}&sshInfo=${sshInfo}`)
}
