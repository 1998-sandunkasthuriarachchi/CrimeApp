import {Text,View,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard,Button,} from "react-native";
import { styles } from "../styles/upload";

import { Formik } from "formik";
import * as yup from 'yup';

const ReportSchema=yup.object({
  description:yup.string()
  .required()
  .max(10),
  subject:yup.string().required()
})

export default function Upload({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.titleText}>Report now</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.formtext}>Subject*</Text>
          <Formik
            initialValues={{ description: "", subject: "" }}
            validationSchema={ReportSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={styles.subject}
                  placeholder="subject"
                  onChangeText={props.handleChange("subject")}
                  value={props.values.subject}
                />
                <Text style={styles.formtext}>Description*</Text>
                <TextInput
                  numberOfLines={25}
                  multiline
                  style={styles.inputBox}
                  placeholder="explain incident details here.."
                  onChangeText={props.handleChange("description")}
                  value={props.values.description}
                />
                <TouchableOpacity
                  style={styles.btnSend}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.text}>Send</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <TouchableOpacity style={styles.btnBack} onPress={()=>navigation.goBack()}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
