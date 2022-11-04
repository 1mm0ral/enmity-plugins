import { FormRow, ScrollView } from "enmity/components";
import { React, Dialog } from "enmity/metro/common";
let installPlugin = window.enmity.plugins.installPlugin
import { reload } from "enmity/api/native";
interface Props {
    pluginUrl: string;
}

export default ({ pluginUrl }: Props) => {
    return (
        <FormRow
            label="Update Plugin"
            trailing={FormRow.Arrow}
            onPress={() => {
                console.log(pluginUrl);
                installPlugin(`${pluginUrl}`);
                Dialog.show({
                    title: "Plugin Update",
                    body: "Updating the plugin using this button will require you to reload Discord. Would you like to reload Discord now?",
                    confirmText: "Yep!",
                    cancelText: "Later",
                    onConfirm: () => {
                        installPlugin(`${pluginUrl}`)
                        reload()
                    },
                });
            }}
        />
    );
};
