import request from '@/utils/request'
export function checkSSH(path, sshInfo) {
    return request.get(`${path}check?sshInfo=${sshInfo}`)
}
