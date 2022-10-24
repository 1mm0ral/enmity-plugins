// @ts-ignore
import * as plugins from "enmity/managers/plugins";
let installPlugin = window.enmity.plugins.installPlugin
let installTheme = window.enmity.themer.installTheme
import UpdateButton from "../../common/components/UpdateButton";
import {
   getByProps
} from "enmity/metro";
import {
   React
} from "enmity/metro/common";
import {
   create
} from "enmity/patcher";
import {
   FormRow,
   ScrollView
} from 'enmity/components';
import manifest from "../manifest.json";
const Patcher = create("download-buttons");
const Opener = getByProps("openLazy");

const DownloadButtons: plugins.Plugin = {
      ...manifest,
      patches: [],
      onStart() {

         Patcher.before(Opener, "openLazy", ({
            hideActionSheet
         }, [component, sheet]) => {
            if (sheet === "LongPressUrl") {
               component.then(instance => {
                  Patcher.after(instance, 'default', (_, args, res) => {
                     const children = res.props.children[1].props.children;
                     const link = res.props.children[0].props.title;
                     children.unshift(<FormRow 
                        label = 'Download Plugin/theme'
                        onPress = {() => {
                              if (link.endsWith("js")) {
                                 installPlugin(link)
                              }
                              else if (link.endsWith("json")) {
                                 installTheme(link)
                              }
                              hideActionSheet();
                           }}
                        />);

                     res.props.children[1].props.children = children;
                  });
               });
            }
         });
      },
   onStop() {},
   getSettingsPanel({ settings }) {
      return (
         <ScrollView settings={settings}>
            <UpdateButton pluginUrl={manifest.sourceUrl} />
         </ScrollView>
      );
   },
};

plugins.registerPlugin(DownloadButtons);