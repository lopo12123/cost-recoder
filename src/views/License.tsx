import React from "react";

import { ScrollView, StyleSheet, Text, View, Linking, Alert } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})

const mitText = "MIT License\n" +
    "\n" +
    "Copyright (c) \<2022\> \<copyright Lopo\>\n" +
    "\n" +
    "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n" +
    "\n" +
    "The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.\n" +
    "\n" +
    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n"

const License = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>
                    { mitText }
                </Text>
                <Text style={{ color: '#409eff', textDecorationLine: 'underline' }}
                      onPress={() => {
                          const url = 'https://spdx.org/licenses/MIT'
                          Linking.canOpenURL(url)
                              .then((support) => {
                                  if(!support) {
                                      Alert.alert('fail to open default browser')
                                  }
                                  else {
                                      return Linking.openURL(url);
                                  }
                              })
                              .catch((err) => {
                                  if(err) {
                                      Alert.alert("fail to open default browser");
                                  }
                              })
                      }}>
                    View More About MIT License.
                </Text>
            </ScrollView>
        </View>
    )
}

export default License;
