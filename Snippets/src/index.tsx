// @ts-ignore
import * as plugins from "enmity/managers/plugins";
import { Storage } from "enmity/metro/common"
import * as commands from "enmity/api/commands"
import UpdateButton from "../../common/components/UpdateButton";
import { ScrollView } from "enmity/components"
import { Messages } from 'enmity/metro/common'
import debug from './commands/debug'
const { sendMessage } = Messages
import manifest from '../manifest.json'

const Snippets: plugins.Plugin = {
    ...manifest,
    onStart() {
        let snippets = []
        Storage.getItem("snippets").then(value => {
            if (value) {
                snippets = value
            }
        })
        commands.registerCommands("snippets", [
            debug, {
            name: "snippet create",
            description: "Create Text Snippet",
            options: [
                {
                    type: 3,
                    name: "Name",
                    displayName: "Name",
                    description: "Name for Snippet",
                    displayDescription: "Name for Snippet",
                    required: true
                },
                {
                    type: 3,
                    name: "Value",
                    displayName: "Value",
                    description: "Value for Snippet",
                    displayDescription: "Value for Snippet",
                    required: true
                }   
            ],
            execute: (args, message) => {
                let Name = args[0].value;
                let Value = args[1].value;
                snippets.push({name: Name, displayName: Name, value: Value})
                Storage.setItem('snippets', snippets).then(() => {
                    Messages.sendBotMessage(message.channel.id, `Created Snippet ${Name} with value ${Value}`)
                })
            }
        }, {
            name: "snippets send",
            description: "Send a snippet to the current channel.",
            options: [{
                type: 1,
                name: "Snippets",
                displayName: "Snippets",
                description: "List of snippets to select from.",
                displayDescription: "List of snippets to select from.",
                required: true,
                choices: snippets
            }],
            execute: (args, message) => {
                Messages.sendBotMessage(message.channel.id, `${JSON.stringify(snippets)}`)
            }
        }, {
            name: "snippets delete",
            description: "Delete a snippet.",
            options: [{
                type: 1,
                name: "Snippets",
                displayName: "Snippets",
                description: "List of snippets to select from.",
                displayDescription: "List of snippets to select from.",
                required: true,
                choices: snippets
            }],
            execute: (args, message) => {
                let [, choice] = args
                let newSnippets = []
                for (let i = 0; i < snippets.length; i++) {
                    if (snippets[i].name !== choice.name) {
                        newSnippets.push(snippets[i])
                    }
                    snippets = newSnippets
                }
            }
        }])
    },
    onStop() {
        commands.unregisterCommands("snippets")
    },
    getSettingsPanel({ settings }) {
        return (
            <ScrollView settings={settings}>
                <UpdateButton pluginUrl={manifest.sourceUrl} />
            </ScrollView>
        );
    },
}

plugins.registerPlugin(Snippets)