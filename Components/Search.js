import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import {connect} from 'react-redux'
import {getFilmsFromApiUsingSearchTextAndPage} from '../API/TDBapi'
import FilmList from './FilmList'

 class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = { 
            films : [],
            isLoading : false, 
        }
        this.searchedText = "" 
        this.page= 0
        this.totalPages = 0
       
    }
   
    _loadFilm= ()=>{
       
    if(this.searchedText.length>0){
        this.setState({ isLoading : true})
        getFilmsFromApiUsingSearchTextAndPage(this.searchedText,this.page+1)
        .then(data=>{ 
            this.page = data.page,
            this.totalPages =data.total_pages
            this.setState({ 
           films : [...this.state.films, ...data.results],
           isLoading : false
          
        })
    })
    }
    }
    _searchedText=(text)=>{
        this.searchedText=text;
    }
    _searchFilms=()=>{
        this.page=0;
        this.totalPages=0;
        this.setState({
            films:[]
        },()=>{
            this._loadFilm(this.props)
        })
      
    }
    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm : idFilm })
       
    }
    _displayLoading = () => {
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }
  

                                             
    render(){
        
        return (
            <View style={styles.coutainer}>
                <TextInput style={styles.textInput} onSubmitEditing={()=> this._searchFilms()} 
                    onChangeText={text=> this._searchedText(text)} placeholder="Titre de film"/>
                <Button style={styles.button} title="Rechercher" onPress={ ()=> this._searchFilms()} />
                <FilmList 
                films = {this.state.films}
                navigation = {this.props.navigation}
                loadFilms= {this._loadFilm}
                page = {this.page}
                totalPages= {this.totalPages}
                
                />
               
               {this._displayLoading()}
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    coutainer : {
        flex : 1
        

    },
    textInput : {
        marginRight : 2,
        marginLeft : 2,
        height : 50,
        borderColor : '#000000',
        borderWidth :1,
        paddingLeft  : 7
    },
    button : {
        height : 50,
        
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});

const mapStatetoProps = (state) => {
    return{
        favoritesFilm : state.favoritesFilm
    }
}

export default connect(mapStatetoProps)(Search)