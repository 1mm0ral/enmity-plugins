// Credits: acquitelol
import { name } from '../../manifest.json'
import { Native } from 'enmity/metro/common'
import { get_device_list } from './devices'

async function debug_info (version: string, release: string) {
    let devices = await get_device_list() 
    
    return `**[${name}] Debug Information**
> **Plugin Version:** ${version}
> **Release Channel:** ${release}
> **Discord Build:** ${Native.InfoDictionaryManager.Version} (${Native.InfoDictionaryManager.Build})
> **Software Version:** ${Native.DCDDeviceManager.systemVersion}
> **Device:** ${devices[Native.DCDDeviceManager.device]}`
}

export { debug_info }