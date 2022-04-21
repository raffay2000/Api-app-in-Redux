import { StyleSheet, Text, View, FlatList,ActivityIndicator } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { setPostComments } from '../Redux/Action/CardAction';

const Comments = ({ route }) => {
  // const [PostComments, setPostComments] = useState([]);
  // const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()
  const {PostComments,isLoading} = useSelector(state=>state.CardReducer)
  const { id } = route.params;

  useEffect(() => {
    // fetchUserComments();
    dispatch(setPostComments(id))
    // setLoading(false)
  },[PostComments]);
  // const fetchUserComments = async () => {
  //   let Base_Url = "https://jsonplaceholder.typicode.com";
  //   let PostComm = `comments?postId=${id}`;
  //   fetch(`${Base_Url}/${PostComm}`)
  //     .then((response) => response.json())
  //     .then((data) => setPostComments(data))
  //     .catch((err) => console.error(err));
  // };
  return (
    <View style={styles.container}>
      {
        !isLoading ? (
         <FlatList
          data={PostComments}
          renderItem={({ item }) => {
            return (
              <View style={styles.CommentView}>
                <Text
                  style={[
                    styles.textColor,
                    { fontSize: 25, fontWeight: "700", marginBottom: 18 },
                  ]}
                >
                  {item.email}
                </Text>
                <View
                  style={{
                    backgroundColor: "#3d5a80",
                    borderRadius: 10,
                    padding: 5,
                  }}
                >
                  <Text style={[styles.textColor, { fontSize: 18 }]}>
                    {item.body}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        ):(
          <ActivityIndicator size="large" color="#00ff00" style={{position:"absolute",top:300,left:180,color:"white",zIndex:1}}/>
        )
      }
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98c1d9",
  },
  CommentView: {
    backgroundColor: "#293241",
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  textColor: {
    color: "#e0fbfc",
  },
});