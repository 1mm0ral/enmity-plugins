// @ts-ignore
import * as plugins from "enmity/managers/plugins";
import * as commands from "enmity/api/commands";
import manifest from '../manifest.json'
import UpdateButton from "../../common/components/UpdateButton";
import { ScrollView } from 'enmity/components'
import { linkCommand } from './commands/index';
const ConnectionLinks: plugins.Plugin = {
    ...manifest,
    onStart: (): void => {
        commands.registerCommands("link-account", [linkCommand])
    },
    onStop: (): void => {
        commands.unregisterCommands("link-account")
    },
    getSettingsPanel({ settings }) {
        return (
            <ScrollView settings={settings}>
                <UpdateButton pluginUrl={manifest.sourceUrl} />
            </ScrollView>
        );
    },
}

plugins.registerPlugin(ConnectionLinks);