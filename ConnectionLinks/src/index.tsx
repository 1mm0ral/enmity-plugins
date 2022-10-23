// @ts-ignore
import * as plugins from "enmity/managers/plugins";
import * as commands from "enmity/api/commands";
import manifest from '../manifest.json'
import { linkCommand } from './commands/index';
const ConnectionLinks: plugins.Plugin = {
    ...manifest,
    onStart: (): void => {
        commands.registerCommands("link-account", [linkCommand])
    },
    onStop: (): void => {
        commands.unregisterCommands("link-account")
    }
}

plugins.registerPlugin(ConnectionLinks);