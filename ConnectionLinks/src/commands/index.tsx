import {
    Command,
    ApplicationCommandInputType,
    ApplicationCommandType,
    ApplicationCommandOptionType
} from 'enmity/api/commands';
import {
    sendReply
} from "enmity/api/clyde";
import {
    getByProps
} from 'enmity/metro';

const linkCommand: Command = {
    id: "accounts-command",
    name: "link",
    displayName: "link",
    description: "Link Account",
    displayDescription: "Lets you link accounts that you never though u could",
    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,
    options: [{
        name: "service",
        displayName: "service",
        description: "Service to link",
        displayDescription: "Service to link",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [{
            name: "ebay",
            displayName: "ebay",
            value: "ebay"
        }, ]
    }],
    execute: async function (args, message) {
        switch (args[0].value) {
            case "ebay":
                getByProps("authorize", "callback").authorize("ebay").then((url) => {
                    sendReply(message.channel.id, {
                        embeds: [{
                            type: 'rich',
                            title: `Ebay`,
                            description: `[Click to connect account](${url.body.url})`,
                            color: "#252850"
                        }]
                    })
                })
                break;
        }

        return {}
    }
}

export {
    linkCommand
}