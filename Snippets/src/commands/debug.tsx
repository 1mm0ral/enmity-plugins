import { Command } from "enmity/api/commands";
import { Messages } from "enmity/metro/common";
import { name, version, release} from '../../manifest.json'
import { debug_info } from "../utils/debug";
let command: Command = {
    name: `debug (${name})`,
    description: `Debug command for ${name}`,
    execute: async function (args, message) {
        Messages.sendMessage(message.channel.id, { content: await debug_info(version, release)})
    }
}
export default command