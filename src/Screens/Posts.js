import { StyleSheet, Text, View ,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setUserPost } from '../Redux/Action/CardAction';

const Posts = ({route,navigation}) => {
    // const [userPost, setUserPost] = useState([])
    // const [isloading,setisLoading] = useState(true);
    const dispatch = useDispatch()
    const {userPosts,isLoading} = useSelector(state=>state.CardReducer)
    const {id} = route.params;
    useEffect(() => {
      // fetchUserPost()
      dispatch(setUserPost(id))
      // setisLoading(false)
    },[userPosts])
    // const fetchUserPost = async () => {
    //     let Base_Url = "https://jsonplaceholder.typicode.com";
    //     let UsersPost = `posts?userId=${id}`;
    //     fetch(`${Base_Url}/${UsersPost}`)
    //       .then((response) => response.json())
    //       .then((data) => setUserPost(data))
    //       .catch((err) => console.error(err));
    //   };
  return (
    <View style={styles.container}>
       {
         !isLoading?(
          <FlatList       
          data={userPosts}
          renderItem={({item}) => {
            return (
               <View style={styles.postView}>
                   <Text style={{fontWeight:'700',paddingBottom:10,fontSize:25,color:'#e0fbfc'}}>
                   {item.title}
                   </Text>
                   <View style={{backgroundColor:'#3d5a80',borderRadius:10,padding:5,marginBottom:10 }}>
                   <Text style={{fontSize:20,textAlign:'center',color:'#e0fbfc'}}>
                   {item.body}
                   </Text>
                   </View>
                  <TouchableOpacity style={{backgroundColor:'#3d5a80',width:120,borderRadius:5,padding:10,alignSelf:'center'}} onPress={()=>{
                      navigation.navigate('Comments',{id:item.id})
                  }}>
                    <Text style={{color:'#e0fbfc',fontWeight:'700'}}>
                        Comments (5)
                    </Text>
                  </TouchableOpacity>
               </View>
            );
          }}
        />
         ):(
          <ActivityIndicator size="large" color="#00ff00" style={{position:"absolute",top:300,left:180,color:"white",zIndex:1}}/>
         )
       }
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#98c1d9"
        // justifyContent:'center',
        // alignContent:'center'
    },
    postView:{
        backgroundColor:'#293241',
        margin:10,
        borderRadius:10,
        padding:10
    }
})