import React, { useRef, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";

import { styles } from "../styles/styles";

const EditorScreen = () => {
  const strikethrough = require("./../../../imgs/imgs-examples/img.png"); //icon for strikethrough
  const video = require("./../../../imgs/imgs-examples/video.png"); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        "Toolbar click, selected items (insert end callback):",
        items
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }

  return (
    <View style={styles.containerRTD}>
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Escribe algo..."}
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
      />
      <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={"#38a2c6"}
        selectedIconTint={"blue"}
        disabledIconTint={"purple"}
        onPressAddImage={onPressAddImage}
        iconSize={30}
        actions={[
          "insertVideo",
          ...defaultActions,
          actions.setStrikethrough,
          actions.heading1,
        ]}
        // map icons for self made actions
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
          ),
          [actions.setStrikethrough]: strikethrough,
          ["insertVideo"]: video,
        }}
        insertVideo={insertVideo}
      />
    </View>
  );
};

export default EditorScreen;