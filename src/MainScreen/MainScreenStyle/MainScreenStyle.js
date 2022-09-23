import {StyleSheet, TouchableWithoutFeedback, YellowBox} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'black'
  },
  viewData: {
    backgroundColor:'purple',
    flex: 7,
    // margin: 30,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 30,
    alignItems:'center',
    
    // justifyContent:'center'
  },
  viewImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top:20,
    //   borderWidth:1,
    //   borderColor:'black'
  },
  imgRadius: {
    height: 200,
    width: 200,
    flex: 0,
    borderRadius: 200 / 2,
    borderWidth: 2,
    borderColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    justifyContent:'center',
    // marginHorizontal:20
    // marginTop: 80,
    top:100
  },
  line: {
    height: 3,
    //   width:'100%',
    flex: 1,
    backgroundColor: 'black',
    top:100
  },
  chu1:{
    color:'red',
  },
  img: {
    justifyContent:'center',
    alignContent:'center',
    // flex:1,
    height: '90%',
    width: '90%',
    // borderWidth:1,
    borderColor: 'black',
    borderRadius: 180 / 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    
    
    // padding:20
  },
  viewIcon: {
    flex: 1,
    // borderWidth: 1,
    // borderRadius:20,
    backgroundColor:'red',
    top:100
    
    
  },
  iconBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom:50
    // backgroundColor:'red'
  },
  button: {
    margin: 10,
  },
  card:{
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    height:'90%',
    width:'90%',
    position:'absolute',
    
  },
  viewText: {
    // flex:1,
    // borderWidth: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    // borderColor: 'rgba(0,0,0,1)',
    backgroundColor:'red',
    width:300
  },
  viewIcon: {
    // flex: 1,
    // // borderWidth: 1,
    // // borderRadius:20,
    // backgroundColor:'blue',
    width:330,
    height:200,
    top:140
    // top:280,
    // width:'70%'
  },
  textTitle:{
    fontSize:30,
    fontWeight:'500',
    color:'silver',
    // backgroundColor:'yellow',
    top:50,
   
    alignSelf:'center'
    
  },
  textInfo:{
    fontSize:20,
    fontWeight:'500',
    color:'black',
    // backgroundColor:'red',
    bottom:30,
    alignSelf:'center'
  },
})
export default styles;