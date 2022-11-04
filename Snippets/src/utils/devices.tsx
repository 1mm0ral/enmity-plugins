// Credits: acquitelol
import { REST, Storage } from "enmity/metro/common";
import { name } from '../../manifest.json'
import { format_object } from "./format_object";

async function get_device_list() {
    try {
        let existing = await Storage.getItem("device_list")
        if (existing) return JSON.parse(existing); 

        let res = await REST.get(`https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt`);
        let encoded = res.text; 

        let final = format_object(encoded)

        await Storage.setItem("device_list", final)

        let device_list = await Storage.getItem("device_list")
        return JSON.parse(device_list)
    } catch(err) {
        console.warn(`[${name} Local Error — Issue when getting devices: ${err}]`)
        return 
    }
}


export {get_device_list}