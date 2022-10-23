// @ts-ignore
import * as plugins from "enmity/managers/plugins";
let installPlugin = window.enmity.plugins.installPlugin
let installTheme =  window.enmity.themer.installTheme
import { getByProps } from "enmity/metro";
import { React } from "enmity/metro/common";
import { create } from "enmity/patcher";
import * as Assets from "enmity/api/assets";
import manifest from "../manifest.json";
const Patcher = create("download-buttons");
const Opener = getByProps("openLazy");
let pluginChannel = "961782195767365732"
let themeChannel = "961782176062509117"

const DownloadButtons: plugins.Plugin = {
   ...manifest,
   patches: [],
   onStart() {
      
      Patcher.before(Opener, "openLazy", (_, [component, sheet]) => {
            if (sheet === "MessageLongPressActionSheet") {
               component.then((instance) => {
                  let func = instance.default;
                  instance.default = function (
                        { message, user, channel, canAddNewReactions },
                        _
                  ) {
                        let og = func(
                           { message, user, channel, canAddNewReactions },
                           _
                        );

                        if (og.props.children.props.children.props.children[1][2].key == "420") return og;

                        let ButtonRow =
                           og.props.children.props.children.props
                              .children[1][2].type;

                        let myIdol = (
                           <ButtonRow
                              key="420"
                              onPressRow={(_) => {
                                    Opener.hideActionSheet();
                                    if (message.channel_id === pluginChannel) {
                                       let pluginUrl = message.content.split("Download: ")[1].split("\n")[0]
                                       installPlugin(pluginUrl)
                                    }
                                    if (message.channel_id === themeChannel) {
                                       let themeUrl = message.content.split("Download: ")[1].split("\n")[0]
                                       installTheme(themeUrl)
                                    };
                              }}
                              message="Download Plugin/Theme"
                              iconSource={Assets.getIDByName("ic_folder_add_24px")}
                           />
                        );
                        og.props.children.props.children.props.children[1].unshift(
                           myIdol
                        );
                        return og;
                  };
                  return instance;
               });
            }
      });
   },

   onStop() {
      
   },
};

plugins.registerPlugin(DownloadButtons);
